import { GET_BY_NAME, GET_POKEMONS, GET_TYPES } from "./actions";

const initialState = {
    myPokemons: [],
    pokeBackUp: [],
    Types: [],

};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                myPokemons: action.payload,
                pokeBackUp: action.payload
            };
        
        case GET_TYPES:
            return { 
                ...state,
                Types: action.payload
            };

        case GET_BY_NAME:
            return {
                ...state,
                myPokemons: action.payload
            };

        default:
            return {...state}
    }
};


export default rootReducer;