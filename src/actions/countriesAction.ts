export const SET_DATA_FOR_CONTINENT = "SET_DATA_FOR_CONTINENT";


export function setDataForContinent(data: any, continentCode:string) {
    return {
        type: SET_DATA_FOR_CONTINENT,
        continentCode,
        data
    }
}