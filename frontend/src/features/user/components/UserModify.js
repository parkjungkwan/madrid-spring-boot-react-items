import axios from 'axios';
import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom';

export default function UserModify() {
    const history = useHistory()
    const SERVER = 'http://localhost:8080'
    const sessionUser = JSON.parse(localStorage.getItem('sessionUser')); 
    const [join, setJoin] = useState({
        userId: sessionUser.userId,
        username:sessionUser.username, 
        password:sessionUser.password, 
        email:sessionUser.email, 
        name:sessionUser.name, 
        regDate: sessionUser.regDate
    })
    const {username, password, email, name} = join
    const handleChange = e => {
        const { value, name } = e.target
        setJoin({
            ...join,
            [name] : value
        })
    }
    
    const userJoin = joinRequest => 
                axios.post(`${SERVER}/users`, JSON.stringify(joinRequest),{headers})
    const headers = {
        'Content-Type' : 'application/json',
        'Authorization': 'JWT fefege..'
    }
    const handleSubmit = e => {
        e.preventDefault()
        const joinRequest = {...join}
        alert(`회원가입 정보: ${JSON.stringify(joinRequest)}`)
        userJoin(joinRequest)
        .then(res =>{
            alert('회원가입 성공')
            history.push('/users/login')
        })
        .catch(err =>{
            alert(`회원가입 실패 : ${err}`)
        })

  }

  return (
    <div>
         <h1>회원정보 수정</h1>
    <form onSubmit={handleSubmit} method='POST'>
        <ul>
            <li>
              <label>
                    <span>회원번호 : {sessionUser.userId} </span>
                </label>
            </li>
            <li>
                <label>
                    <span>아이디 : {sessionUser.username} </span>
                </label>
            </li>
            <li>
                <label>
                    이메일 : <input type="email" id="email" name="email" placeholder={sessionUser.email}
                                 onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    비밀 번호 : <input type="password" id="password" name="password" placeholder={sessionUser.password} onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    이름 : <input type="text" id="name" name="name" placeholder={sessionUser.name} onChange={handleChange}/>
                </label>
            </li>
           
            <li>
                <input type="submit" value="수정확인"/>
            </li>

        </ul>
    </form>
    </div>
  );
}
