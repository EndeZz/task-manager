import { combineReducers } from 'redux';
import { userReducer } from '../client/api/auth';

export const rootReducer = combineReducers({
    user: userReducer,
});
