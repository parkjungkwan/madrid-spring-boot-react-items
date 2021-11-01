import { Logout } from 'features/user';
import React from 'react';
import { useHistory  } from 'react-router-dom';
export default function Home() {
  const history = useHistory()
  return (
    <div>
      {localStorage.length > 0 && <Logout/>}
      <h1>시간이란.. 22</h1>
      <p>내일 죽을 것처럼 오늘을 살고 
          영원히 살 것처럼 내일을 꿈구어라.</p>
       
       <button onClick = {e => history.push('/users/add')}>회원가입</button>
       <button onClick = {e => history.push('/users/login')}>로그인</button>
    </div>
  );
}