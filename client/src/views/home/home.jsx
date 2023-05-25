import { Cards, Navbar, Filtros } from '../../components';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getByName, getPokemons, getTypes} from '../../redux/actions';

import style from './home.module.css';

function Home() {

    const dispatch = useDispatch();
    const pokeFiltered = useSelector((state) => state.myPokemons);

    const [searchString, setSearchString] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    
    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);

    const handleChange = (event) => {
        setSearchString(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(getByName(searchString))
        setCurrentPage(0);
    };

    const nextPage = () => {
        const filter = pokeFiltered.filter(poke => poke.name.includes(searchString));
        if(filter.length > currentPage + 12){
            setCurrentPage(currentPage + 12 );
        } 
    };
    
    const prevPage = () => {
        if(currentPage > 0) setCurrentPage(currentPage - 12 );
    };

    return (
    <div className={style.home}>
        <h1 className={style.h1} >PROYECTO INDIVIDUAL: POKÉMON</h1>
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
        <Filtros />
        <Cards allPokemons = {(pokeFiltered.slice(currentPage, currentPage+12))} />
        <button onClick={prevPage} className={style.btn}> ← </button>
        <span className={style.span} >{(currentPage / 12)+1} de {(Math.round(pokeFiltered.length / 12))} </span>
        <button onClick={nextPage} className={style.btn}> → </button>
    </div>
    );
}

export default Home;