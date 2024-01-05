import { combineReducers } from "redux"

import { ReducerFile } from "./reducerFile"

const allReducers = combineReducers({
    ReducerFile: ReducerFile
});

export default allReducers