import { GET_ALL_COUNTRIES, GET_COUNTRY, SORT_COUNTRIES, SORT_POPULATION } from "../actions/actions";
import { FILTER_BY_CONTINENT } from "../actions/actions";

const initialState = {
    countries: [],
    allCountries: [],
    country: {}
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            let filteredContinent = allCountries
            if(action.payload){
                filteredContinent = allCountries.filter(country => country.continent.toLowerCase().includes(action.payload.toLowerCase()))
            }
            return{
                ...state,
                countries: filteredContinent
            }
        case SORT_COUNTRIES:
            let sortedCountries = []
            if(action.payload.toLowerCase() === 'az'){
                sortedCountries = state.countries.sort((a, b) => {
                    if(a.name > b.name) return 1
                    if(a.name < b.name) return -1
                    return 0
                })
            }
            else if(action.payload.toLowerCase() === 'za'){
                sortedCountries = state.countries.sort((a, b) => {
                    if(a.name > b.name) return -1
                    if(a.name < b.name) return 1
                    return 0
                })
            }
            return {
                ...state,
                countries: sortedCountries
            }
        case SORT_POPULATION:
            let sortedPopulation = state.countries
            if(action.payload.toLowerCase() === 'asc'){
                sortedPopulation = state.countries.sort((a, b) => {
                    if(a.population > b.population) return 1
                    if(a.population < b.population) return -1
                    return 0
                })
            }
            else if(action.payload.toLowerCase() === 'desc'){
                sortedPopulation = state.countries.sort((a, b) => {
                    if(a.population > b.population) return -1
                    if(a.population < b.population) return 1
                    return 0
                })
            }
            return{
                ...state,
                countries: sortedPopulation
            }
        case GET_COUNTRY:
            return{
                ...state,
                countries: action.payload,
                country: action.payload
            }

        default:
            return state
    }
}
export default rootReducer;