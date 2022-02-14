import axios from "axios";

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const CREATE_ACTIVITY = 'CREATE ACTIVITY';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'
export const SORT_COUNTRIES = 'SORT_COUNTRIES'
export const SORT_POPULATION = 'SORT_POPULATION'
export const SEARCH_COUNTRY ='SEARCH_COUNTRY'

export const getAllCountries = () => async (dispatch) => {
    var response = await axios.get('http://localhost:3001/countries')
    return dispatch({
        type:GET_ALL_COUNTRIES,
        payload: response.data
    })
}

export const filterByContinent = (payload) =>{
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export const sortCountries = (payload) => {
    return {
        type: SORT_COUNTRIES,
        payload
    }
}

export const sortPopulation = (payload) => {
    return{
        type: SORT_POPULATION,
        payload
    }
}

export const getCountry = (payload) => async (dispatch) => {
    try{
        const response = await axios.get(`http://localhost:3001/countries/${payload}`)
        return dispatch({
            type:GET_COUNTRY,
            payload: response.data[0]
        })
    }
    catch(e){
        alert('Country not found')
    }
}

export const findCountry = (payload) => async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/countries?name=${payload}`)
    return dispatch({
        type: SEARCH_COUNTRY,
        payload: response.data
    })
}