import themer from './themer';
import switchapp from './switchapp'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    themer:themer,
    switchapp:switchapp
})

export default allReducers;