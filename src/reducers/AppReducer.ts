import { combineReducers } from "redux";
import { CountriesReducer } from "./CountriesReducer";

// This is unnecessary for this application.
// In a real world application where we have multiple reducers this will be helpful in combining all the reducers.
export const AppReducer  = combineReducers({continents: CountriesReducer});