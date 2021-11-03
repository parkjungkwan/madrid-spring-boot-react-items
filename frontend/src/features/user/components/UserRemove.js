import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { removePage } from 'features/user/reducer/userSlice'
import { useDispatch } from 'react-redux';

export default function UserRemove() {
  const [pwd, setPwd] = useState('')
  const sessionUser = JSON.parse(localStorage.getItem('sessionUser'))
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <div>
      <h1>회원탈퇴</h1>
      <form method="DELETE" onSubmit={useCallback(
        e => {
          (sessionUser.password === pwd) ? dispatch(removePage(sessionUser.userId))
          : document.getElementById('password').value = ''
        })
      }>
    <ul>
        <li>
              <label>
                    <span>사용자아이디 : {sessionUser.username} </span>
                </label>
            </li>
        <li><label htmlFor="pw">비밀번호 확인</label>
        <input type="password" id="password" name="password" onChange={e => {setPwd(e.target.value)}}/></li>
        <li><input type="submit" value="탈퇴요청" /></li>
        <li><input type="button" value="탈퇴취소" onClick={e => history.push("/users/detail")}/></li>
    </ul>
</form>

    </div>
  );
}