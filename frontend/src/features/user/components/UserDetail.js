import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function User() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
       <figure>
        <img  alt=""/>
        <figcaption>오늘은 남은 인생이 첫째되는 시작날</figcaption>
    </figure>
    <h1>Juhyun An</h1>
    <p>이메일 : ahnju96@gmail.com</p>
    <h2>Who I am?</h2>
    <p>경력은 없고 놀고싶습니다</p>
    <hr/>
    <h2>Github</h2>
    <ul>
        <li>GitHub</li>
    </ul>
    <hr/>
    <h2>Skills</h2>
    <ul>
        <li>사용 언어
            <ul>
                <li><mark>HTML</mark></li>
                <li><mark>CSS</mark></li>
                <li>JAVA</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>MySQL</li>
            </ul>
        </li><br/>
        <li>사용 툴
            <ul>
                <li>IntelliJ</li>
                <li>PyCharm</li>
                <li>Docker</li>
                <li>GitHub</li>
                <li>Visual Studio</li>
                <li>Spring Boot</li>
            </ul>
        </li>
    </ul>
    <br/><hr/>
    <h2>Academic</h2>
    <table border="5">
        <caption>학력 사항</caption>
        <thead>
            <tr>
                <th>출신 학교</th>
                <th>전공</th>
                <th>기간</th>
                <th>졸업구분</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>여자고등학교</td>
                <td>(해당사항 없음)</td>
                <td></td>
                <td>졸업</td>
            </tr>
            <tr>
                <td>여자대학교</td>
                <td></td>
                <td></td>
                <td>졸업</td>
            </tr>
        </tbody>
    </table>
    </div>
  );
}
