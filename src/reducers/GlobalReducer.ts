import clone from "just-clone";
import { AnyAction } from "redux";
import { HIDE_LOADER, SHOW_LOADER } from "../actions/globalAction";

const initialState = {
    loadersCount: 0
}

export const GlobalReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SHOW_LOADER:{
            state.loadersCount += 1;
            return clone(state);
        }
        case HIDE_LOADER:{
            state.loadersCount -= 1;
            return clone(state);
        }
        default: return state;
    }
}