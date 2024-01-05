import { actionFile } from "../Actions/indexActions";

export const ReducerFile = (
    state = {
        filePath: ""
    },
    action
) => {
    switch (action.type){
        case actionFile?.GET_FILE_PATH:
            return {
                ...state
            }
        default :
            return {
                ...state
            } 
    }
}