import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_TYPES = 'GET_TYPES';
export const GET_BY_NAME = 'GET_BY_NAME'
export const ORDER_ASC = 'ORDER_ASC';
export const ORDER_DES = 'ORDER_DES';
export const ORDER_API = 'ORDER_API';
export const ORDER_BDD = 'ORDER_BDD';
export const GEN_FILTER = 'GEN_FILTER';
export const TYPE_FILTER = 'TYPE_FILTER';

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

export const orderAsc = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/pokemons');
        return dispatch({
            type: ORDER_ASC,
            payload: response.data
        })
    }
};

export const orderDes = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/pokemons');
        return dispatch({
            type: ORDER_DES,
            payload: response.data
        })
    }
};

export const orderApi = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/pokemons');
        return dispatch({
            type: ORDER_API,
            payload: response.data
        })
    }
};

export const orderBDD = () => {
    return async function(dispatch){
        const response = await axios('http://localhost:3001/pokemons');
        return dispatch({
            type: ORDER_BDD,
            payload: response.data
        })
    }
};

export const genFilter = (gen) => {
    return function (dispatch){
        return dispatch({
            type: GEN_FILTER,
            payload: gen,
        })
    }
};

export const getTypeFilter = (type) => {
    return async function (dispatch){
        // const response = (await axios('http://localhost:3001/pokemons')).data;
        // const pokemonsTypes = response.map(p => p.types[0].name);
        // const pokefilter = (response.map(p => p.types[0].name)).filter(t => t === type);
        // const pokefiltrado = response.filter(poke => poke === type)
        
        // const typeResponse = (await axios('http://localhost:3001/types')).data;
        // const typeMap = typeResponse.map(t => t.name);

        // console.log('Response: ', response);
        // console.log('PokemonsTypes: ', pokemonsTypes);
        // console.log('Pokemonsfilter: ', pokefilter);
        // console.log('Pokemonsfiltrado: ', pokefiltrado);

        // console.log('typeResponse: ', typeResponse);
        // console.log('typeMap: ', typeMap);

        return dispatch({
            type: TYPE_FILTER,
            payload: type,
        })
    }
};