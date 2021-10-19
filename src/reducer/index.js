import csvTransectionReducer from "./csvTransection";

import {combineReducers} from 'redux'

const allReducer = combineReducers({
    csvTransection: csvTransectionReducer,
});

export default allReducer;