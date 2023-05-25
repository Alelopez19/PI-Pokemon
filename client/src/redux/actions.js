import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const GET_BY_NAME = 'GET_BY_NAME'
export const ALFAFILTERS = 'ALFAFILTERS';

export const getPokemons = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/pokemons');
        return dispatch({
            type: GET_POKEMONS,
            payload: response.data
        })
    }
};

export const getTypes = () => {
    return async function(dispatch) {
        const response = await axios('http://localhost:3001/types');
        return dispatch({
            type: GET_TYPES,
            payload: response.data
        })
    }
};

export const getByName = (name) => {
    return async function(dispatch) {
        const response = await axios(`http://localhost:3001/pokemons?name=${name}`);
        return dispatch({
            type: GET_BY_NAME,
            payload: response.data
        })
    }
};

