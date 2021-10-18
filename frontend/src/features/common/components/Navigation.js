import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation(){return (<nav class="navi">
<ul>
    <li><Link to='/home'>홈</Link></li>
    <li><Link to='/course-register'>과목 등록</Link></li>
    <li><Link to='/online-profile'>프로필</Link></li>
    <li><Link to='/login'>로그인</Link></li>
    <li><Link to='/join'>회원가입</Link></li>
    <li><Link to='/school-status'>학교 현황</Link></li>
</ul>
</nav>)}
