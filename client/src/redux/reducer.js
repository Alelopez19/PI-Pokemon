import { GEN_FILTER, GET_BY_NAME, GET_POKEMONS, GET_TYPES, ORDER_API, ORDER_ASC, ORDER_BDD, ORDER_DES } from "./actions";

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

        case ORDER_ASC:
            return{
                ...state,
                myPokemons: action.payload
            }

        case ORDER_DES:
            return{
                ...state,
                myPokemons: action.payload
            }

        case ORDER_API:
            return{
                ...state,
                myPokemons: action.payload
            }

        case ORDER_BDD:
            return{
                ...state,
                myPokemons: action.payload
            }
        
        case GEN_FILTER:
            if(action.payload === 'primera'){
                const firstGen = state.myPokemons.slice(0, 151);
                return {
                    ...state,
                    myPokemons: firstGen
                }
            }else if (action.payload === 'segunda'){
                const secondGen = state.myPokemons.slice(151, 251);
                return {
                    ...state,
                    myPokemons: secondGen
                }
            }else if (action.payload === 'tercera'){
                const thirdGen = state.myPokemons.slice(251, 386);
                return {
                    ...state,
                    myPokemons: thirdGen
                }
            }else if (action.payload === 'cuarta'){
                const fourGent = state.myPokemons.slice(386, 493);
                return {
                    ...state,
                    myPokemons: fourGent
                }
            }else if (action.payload === 'quinta'){
                const fiveGen = state.myPokemons.slice(493, 649);
                return {
                    ...state,
                    myPokemons: fiveGen
                }
            }else if (action.payload === 'sexta'){
                const sixGen = state.myPokemons.slice(649, 721)
                return {
                    ...state,
                    myPokemons: sixGen
                }
            }else if (action.payload === 'septima'){
                const sevenGen = state.myPokemons.slice(721, 809);
                return {
                    ...state,
                    myPokemons: sevenGen
                }
            }else if (action.payload === 'octava'){
                const eigthGen = state.myPokemons.slice(809, 905);
                return {
                    ...state,
                    myPokemons: eigthGen
                }
            }else if (action.payload === 'novena'){
                const nineGen = state.myPokemons.slice(905, 1010);
                return {
                    ...state,
                    myPokemons: nineGen
                }
            }else if (action.payload === 'especiales'){
                const especials = state.myPokemons.slice(1010)
                return {
                    ...state,
                    myPokemons: especials
                }
            }else if(action.payload === 'reset'){
                return {
                    ...state,
                    myPokemons: state.pokeBackUp
                }
            }
            break;

        default: 
            return {...state}
    }
};


export default rootReducer;