import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPage } from 'features/user/reducer/userSlice'
const UserList = () => {
    
    const dispatch = useDispatch()

    const users = useSelector(state => state.userReducer.usersState);
    const type = useSelector(state => state.userReducer.type)
    const keyword = useSelector( state => state.users.keyword)
    const page = users.page;
    
    useEffect(() => {
      const param = {type: type, keyword: keyword, page: page}
      dispatch(listPage(param))
    },[users]);

    return (<table border='1px' style={{textAlign:'center'}}>
    <thead>
    <tr><th>사용자번호</th>
        <th>사용자아이디</th>
        <th>이름</th>
        <th>이메일</th></tr>
    </thead>
    <tbody>
        {users.map((user) => (
            <tr><td>{user.userId}</td>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td></tr>
        ))}
    
    </tbody>
    </table>)
}

export default UserList