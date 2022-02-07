import axios from "axios";

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const CREATE_ACTIVITY = 'CREATE ACTIVITY';

export const getAllCountries = () => async (dispatch) => {
    var response = await axios.get('http://localhost:3001/countries')
    return dispatch({
        type:GET_ALL_COUNTRIES,
        payload: response.data
    })
}