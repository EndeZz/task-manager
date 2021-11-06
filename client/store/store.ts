import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasksSlice';
import usersReducer from './reducers/usersSlice';
import contentsReducer from './reducers/tasksContentSlice';

const RootReducer = combineReducers({
  tasksReducer,
  usersReducer,
  contentsReducer,
});

const setupStore = () => configureStore({
  reducer: RootReducer,

});

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
export default setupStore;
