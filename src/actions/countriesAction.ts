export const SET_DATA_FOR_CONTINENT = "SET_DATA_FOR_CONTINENT";
export const SET_RANDOM_DATA = "SET_RANDOM_DATA";
export const RESET_DATA_FOR_CONTINENT = "RESET_DATA_FOR_CONTINENT";




export function setDataForContinent(data: any, continentCode:string) {
    return {
        type: SET_DATA_FOR_CONTINENT,
        continentCode,
        data
    }
}

export function setRandomData(data: any) {
    return {
        type: SET_RANDOM_DATA,
        data
    }
}

export function resetDataForContinent() {
    return {
        type: RESET_DATA_FOR_CONTINENT
    }
}