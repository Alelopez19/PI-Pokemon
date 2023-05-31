import { GEN_FILTER, GET_BY_NAME, GET_POKEMONS, GET_TYPES, ORDER_API, ORDER_ASC, ORDER_BDD, ORDER_DES, TYPE_FILTER } from "./actions";

const initialState = {
    myPokemons: [],
    pokeBackUp: [],
    Types: [],
    pokeFilter: [],

};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMONS:
            const typeFiltrado = action.payload.map(pok=>{pok.types = pok.types.map(t=>t.name) 
                return pok})
            return {
                ...state,
                myPokemons: typeFiltrado,
                pokeBackUp: typeFiltrado,
            };

        case GET_TYPES:
            return { 
                ...state,
                Types: action.payload
            };

        case GET_BY_NAME:
            const byName = action.payload.map(pok=>{pok.types = pok.types.map(t=>t.name) 
                return pok})
            return {
                ...state,
                myPokemons: byName
            };

        case ORDER_ASC:
            const actionAsc = action.payload.map(pok=>{pok.types = pok.types.map(t=>t.name) 
                return pok})
            const asc = actionAsc.sort((a, b) => {
                if(a.name>b.name) return 1;
                if(a.name<b.name) return -1;
                return 0})
            return{
                ...state,
                myPokemons: asc
            }

        case ORDER_DES:
            const actionDes = action.payload.map(pok=>{pok.types = pok.types.map(t=>t.name) 
                return pok})
            const des = actionDes.sort((a, b) => {
                if(a.name>b.name) return -1;
                if(a.name<b.name) return 1;
                return 0})
            return{
                ...state,
                myPokemons: des
            }

        case ORDER_API:
            const orderApi = action.payload.map(pok=>{pok.types = pok.types.map(t=>t.name) 
                return pok})
            return{
                ...state,
                myPokemons: orderApi.filter(p => p.created === false)
            }

        case ORDER_BDD:
            const orderBdd = action.payload.map(pok=>{pok.types = pok.types.map(t=>t.name) 
                return pok})
            return{
                ...state,
                myPokemons: orderBdd.filter(p => p.created === true)
            }
        
        case GEN_FILTER:
            if(action.payload === 'primera'){
                const firstGen = state.pokeBackUp.slice(0, 151);
                return {
                    ...state,
                    myPokemons: firstGen
                }
            }else if (action.payload === 'segunda'){
                const secondGen = state.pokeBackUp.slice(151, 251);
                return {
                    ...state,
                    myPokemons: secondGen
                }
            }else if (action.payload === 'tercera'){
                const thirdGen = state.pokeBackUp.slice(251, 386);
                return {
                    ...state,
                    myPokemons: thirdGen
                }
            }else if (action.payload === 'cuarta'){
                const fourGent = state.pokeBackUp.slice(386, 493);
                return {
                    ...state,
                    myPokemons: fourGent
                }
            }else if (action.payload === 'quinta'){
                const fiveGen = state.pokeBackUp.slice(493, 649);
                return {
                    ...state,
                    myPokemons: fiveGen
                }
            }else if (action.payload === 'sexta'){
                const sixGen = state.pokeBackUp.slice(649, 721)
                return {
                    ...state,
                    myPokemons: sixGen
                }
            }else if (action.payload === 'septima'){
                const sevenGen = state.pokeBackUp.slice(721, 809);
                return {
                    ...state,
                    myPokemons: sevenGen
                }
            }else if (action.payload === 'octava'){
                const eigthGen = state.pokeBackUp.slice(809, 905);
                return {
                    ...state,
                    myPokemons: eigthGen
                }
            }else if (action.payload === 'novena'){
                const nineGen = state.pokeBackUp.slice(905, 1010);
                return {
                    ...state,
                    myPokemons: nineGen
                }
            }else if(action.payload === 'reset'){
                return {
                    ...state,
                    myPokemons: state.pokeBackUp
                }
            }
            break;

        case TYPE_FILTER:
            const pokeFiltered = action.payload === 'all' ? state.pokeBackUp : state.pokeBackUp.filter(t => t.types?.includes(action.payload));
            return{
                ...state,
                myPokemons: pokeFiltered
            }
        default: 
            return {...state}
    }
};


export default rootReducer;