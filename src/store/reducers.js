import { combineReducers } from "redux"
import { age, firstname, Gender, lastname, profesion  } from "./reducer"
//import {profesion  } from "./reducer"

export const reducers = combineReducers({
    FIRSTNAME:firstname,
    LASTNAME:lastname,
    AGE:age,
    GENDER:Gender,
    PROFESION:profesion
    


})