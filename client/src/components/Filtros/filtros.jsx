import { useDispatch, useSelector } from "react-redux";
import { genFilter, getPokemons, getTypeFilter, orderApi, orderAsc, orderBDD, orderDes } from "../../redux/actions";

import style from './filtros.module.css'

function Filtros (){

    const dispatch = useDispatch();
    const types = useSelector(state => state.Types);

    const alfaFilter = (event) => {
        if(event.target.value === 'asc'){
            dispatch(orderAsc());

        }else if(event.target.value === 'des'){
            dispatch(orderDes())

        }else if(event.target.value === 'res'){
            dispatch(getPokemons());
        }
    };

    const genFiltered = (e) => {
        dispatch(genFilter(e.target.value))
    };

    const createdFilter = (e) => {
        if(e.target.value === 'false') {
            dispatch(orderApi())
        }else if(e.target.value === 'true') {
            dispatch(orderBDD())
        }else if(e.target.value === 'all') {
            dispatch(getPokemons());
        }
    };

    const typeFilter = (e) => {
        dispatch(getTypeFilter(e.target.value))
    };
    
    return (
        <div>

            <select onChange={genFiltered} className={style.select} >
                <option defaultChecked value='reset'>Pokemons por Generacion</option>
                <option value='primera'>Primera Generacion</option>
                <option value='segunda'>Segunda Generacion</option>
                <option value='tercera'>Tercera Generacion</option>
                <option value='cuarta'>Cuarta Generacion</option>
                <option value='quinta'>Quinta Generacion</option>
                <option value='sexta'>Sexta Generacion</option>
                <option value='septima'>Septima Generacion</option>
                <option value='octava'>Octava Generacion</option>
                <option value='novena'>Novena Generacion</option>
            </select>

            <select onChange={alfaFilter} className={style.select} >
                <option defaultChecked value="res">Orden Alfabetico</option>
                <option value="asc">Ascendente</option>
                <option value="des">Descendente</option>
            </select>

            <select onChange={createdFilter} className={style.select} >
                <option value="all"> - </option>
                <option value="false">API</option>
                <option value="true">BDD</option>
            </select>

            {types && 
                <select onChange={typeFilter} className={style.select} >
                    <option defaultChecked value='all'>Types</option>
                    {types.map(t => {return <option key={"created-" + t.id} value={t.name}>{t.name}</option>})}
                </select>}

        </div>
    )
};

export default Filtros;