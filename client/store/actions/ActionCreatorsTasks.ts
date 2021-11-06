import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TaskType } from '../models/ITask';
// const fetchTasks = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(tasksSlice.actions.tasksFetching());
//     const response: any = await axios.get<TasksType[]>('http://localhost:5000/tasks/}');
//     dispatch(tasksSlice.actions.tasksFetchingSuccess(response.data));
//   } catch (error: any) {
//     dispatch(tasksSlice.actions.tasksFetchingError(error.message));
//   }
// };

const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<TaskType[]>('http://localhost:5000/tasks');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить задачи');
    }
  },
);
export default fetchTasks;
