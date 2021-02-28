import Loggin from "./Loggin";
import Toggle from "./Toggle";
import { combineReducers } from 'redux';

const myReducer = combineReducers(
    {
        Loggin,Toggle
    }
)
export default myReducer;