import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserType } from '../models/IUser';

const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<UserType[]>('http://localhost:5000/users');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  },
);
export default fetchUsers;
