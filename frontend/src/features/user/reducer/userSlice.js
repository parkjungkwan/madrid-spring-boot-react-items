import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from 'features/user';

const userJoinPage = async(x) => {
   const res = await userAPI.userJoin(x)
   return res.data
}
const userFetchOnePage = async(x) => {
  const res = await userAPI.userFetchOne(x)
  return res.data
}
const userFetchListPage = async() => {
  const res = await userAPI.userFetchList()
}
const userLoginPage = async(x) => {
  const res = await userAPI.userLogin(x) 
}
const userModifyPage = async(x) => {
  const res = await userAPI.userModify(x)
}
const userRemovePage = async(x) => {
  const res = await userAPI.userRemove(x)
}

export const joinPage = createAsyncThunk('users/join', userJoinPage)
export const fetchOnePage = createAsyncThunk('users/one', userFetchOnePage)
export const fetchListPage = createAsyncThunk('users/list', userFetchListPage)
export const loginPage = createAsyncThunk('users/login', userLoginPage)
export const modifyPage = createAsyncThunk('users/modify', userModifyPage)
export const removePage = createAsyncThunk('users/remove', userRemovePage)


export default userSlice.reducer;
