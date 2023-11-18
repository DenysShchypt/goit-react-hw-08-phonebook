import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk('auth/register', async(newUser,thunkAPI)=>
{  
 
    try {
        const {data} =await axios.post('/users/signup',newUser);

            setAuthHeader(data.token)
            return data;

            
    } catch (error) {
        return thunkAPI.fulfillWithValue(error.message);
    }
});
export const LogIn = createAsyncThunk('auth/login', async(newUser,thunkAPI)=>
{
    try {
        const {data} =await axios.post('/users/login',newUser);
        setAuthHeader(data.token); 
        return data;
    } catch (error) {
        return thunkAPI.fulfillWithValue(error.message);
    }
});

export const LogOut = createAsyncThunk('auth/logout', async(_,thunkAPI)=>{
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.fulfillWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async(_,thunkAPI)=>{
    const state = thunkAPI.getState();
  
    const persistedToken = state.auth.token;
console.log(persistedToken);
    if (persistedToken === null) {

        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
})