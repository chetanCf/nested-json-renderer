import { AnyAction } from "redux"
import { SET_DATA_FOR_CONTINENT } from "../actions/countriesAction";
import clone from 'just-clone';


const inititalState = {
    "data": [
        {
            "name": "Asia",
            "code": "AS",
            "children": [
                {
                    "name": "String2",
                    "children": [
                        {
                            "name": "String5",
                            "children": []
                        }
                    ]
                }, {
                    "name": "String3",
                    "children": []
                },

            ]
        }, {
            "name": "North America",
            "code": "NA",
            "children": []
        },

    ]
}

export const CountriesReducer = (state = inititalState, action: AnyAction) => {
    switch (action.type) {
        case SET_DATA_FOR_CONTINENT: {
            const { continentCode, data: { data: { continent: { countries } } } } = action;
            const requiredContinent = state.data.find(({ code }) => code === continentCode);
            if (requiredContinent && requiredContinent?.children) {
                requiredContinent.children = countries;
            }
            return clone(state);
        }
        default: return state;
    }

}