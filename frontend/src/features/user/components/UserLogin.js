import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory  } from 'react-router-dom';
import { loginPage } from 'features/user/reducer/userSlice'

export default function UserLogin() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [login, setLogin] = useState({})
  const {username, password} = login
  const handleChange = e => {
    const {value, name} = e.target
    setLogin({
      ...login,
      [name] : value
    })
  }

  const changeNull = ls =>{
    for(const i of ls ){
      document.getElementById(i).value = ''
    }
  }
  const handleClick = async e => {
    e.preventDefault()
    e.stopPropagation()
    const loginRequest = {username, password}
    await dispatch(loginPage(loginRequest))
    const loginUser = JSON.parse(localStorage.getItem('sessionUser'))
    if(loginUser.username != null){
      alert(`${loginUser.name}님 환영합니다`)
      history.push("/users/detail")
    }else{
      alert('아이디, 비번 오류로 로그인 실패  ')
      changeNull(['username','password'])
    }
  }
 
  return (
    <form method="POST">
    <ul>
        <li><label for="id">아이디</label>
        <input type="text" id="username" 
            name='username' value={username} onChange={handleChange}/></li>
        <li><label for="pw">비밀번호</label>
        <input type="password" id="password" name="password" onChange={handleChange}/></li>
        <li><input type="button" title="로그인" value="로그인" onClick={handleClick}/></li>
    </ul>
</form>
  );
}
