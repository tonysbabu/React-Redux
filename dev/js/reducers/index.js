import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import ActiveUser from './reducer-activeUser';

const allReducers = combineReducers({
   users:UserReducer,
   activeuser:ActiveUser
});



export default allReducers;