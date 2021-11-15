import csvTransectionReducer from "./csvTransection";
import testReduxDataReducer from "./testReduxData";

import {combineReducers} from 'redux'

const allReducer = combineReducers({
    csvTransection: csvTransectionReducer,
    testReduxData: testReduxDataReducer,
});

export default allReducer;