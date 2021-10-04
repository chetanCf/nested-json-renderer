import { AnyAction } from "redux"
import { RESET_DATA_FOR_CONTINENT, SET_DATA_FOR_CONTINENT, SET_RANDOM_DATA } from "../actions/countriesAction";
import clone from 'just-clone';
import { CountriesState } from "../Models/CountriesState";


const initialState = {
    "data": [
        {
            "name": "Africa",
            "code": "AF",
            "children": []
        }, {
            "name": "Antarctica",
            "code": "AN",
            "children": []
        },
        {
            "name": "Asia",
            "code": "AS",
            "children": []
        },
        {
            "name": "Europe",
            "code": "EU",
            "children": []
        },
        {
            "name": "North America",
            "code": "NA",
            "children": []
        },
        {
            "name": "South America",
            "code": "SA",
            "children": []
        }
    ]
}

export const CountriesReducer = (state: CountriesState = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_DATA_FOR_CONTINENT: {
            const { continentCode, data: { data: { continent: { countries } } } } = action;
            const requiredContinent = state.data.find(({ code }) => code === continentCode);
            if (requiredContinent && requiredContinent?.children) {
                requiredContinent.children = countries;
            }
            return clone(state);
        }

        case SET_RANDOM_DATA: {
            const { data } = action;
            return clone(data);
        }

        case RESET_DATA_FOR_CONTINENT:{
            return initialState;
        }
        default: return state;
    }

}