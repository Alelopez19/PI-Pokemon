import { GET_POKEMONS, GET_TYPES } from "./actions";

const initialState = {
    myPokemons: [],
    myPokeFilter: [],
    Types: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                myPokemons: action.payload,
                myPokeFilter: action.payload
            };
        
        case GET_TYPES:
            return { 
                ...state,
                Types: action.payload
            };

        default:
            return {...state}
    }
};


export default rootReducer;