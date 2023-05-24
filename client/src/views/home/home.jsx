import { Cards, Navbar } from '../../components';

import {useDispatch, useSelector} from 'react-redux';

import style from './home.module.css';
import { useEffect, useState } from 'react';
import { getPokemons, getTypes } from '../../redux/actions';


function Home() {

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.myPokemons);
    const [filtrado, setFiltrado] = useState(allPokemons);
    const [searchString, setSearchString] = useState('');
    const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {
        if(allPokemons.length === 0){
            dispatch(getPokemons());
        }
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(getTypes())
    }, []);

    
    const filter = (event) => {
        const valor = event.target.value;
        if(valor === 'primera'){
            const pokeFilter = allPokemons.slice(1, 151);
            console.log(pokeFilter);
        }else if(valor === 'segunda'){
            const pokeFilter = allPokemons.slice(151, 251);
            console.log(pokeFilter);
        }else if(valor === 'tercera'){
            const pokeFilter = allPokemons.slice(251, 386);
            console.log(pokeFilter);
        }else if (valor === 'cuarta'){
            const pokeFilter = allPokemons.slice(386, 493);
            console.log(pokeFilter);
        }else if (valor === 'quinta'){
            const pokeFilter = allPokemons.slice(493, 649);
            console.log(pokeFilter);
        }else if (valor === 'sexta'){
            const pokeFilter = allPokemons.slice(649, 721);
            console.log(pokeFilter);
        }else if (valor === 'septima'){
            const pokeFilter = allPokemons.slice(721, 809);
            console.log(pokeFilter);
        }else if (valor === 'octava'){
            const pokeFilter = allPokemons.slice(809, 905);
            console.log(pokeFilter);
        }else if (valor === 'novena'){
            const pokeFilter = allPokemons.slice(905, 1010);
            console.log(pokeFilter);
        }else if(valor === 'especiales'){
            const pokeFilter = allPokemons.slice(1010);
            console.log(pokeFilter);
        }else if(valor === 'reset'){
            const pokeFilter = allPokemons;
            console.log(pokeFilter);
        }
        console.log(valor);
    };

    const handleChange = (event) => {
        event.preventDefault();
        setSearchString(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const filtrado = allPokemons.filter((poke) => (
            poke.name.includes(searchString)));
        setFiltrado(filtrado);
        setCurrentPage(0);
    };

    const pokeFilter = () => {
        if(searchString.length === 0) {
            return filtrado.slice(currentPage, currentPage+12)
        }
        const filter = filtrado.filter(poke => poke.name.includes(searchString));
        return filter.slice(currentPage, currentPage + 12)
    };

    const nextPage = () => {
        const filter = filtrado.filter(poke => poke.name.includes(searchString));
        if(filter.length > currentPage + 12){
            setCurrentPage(currentPage + 12 );
        } 
    };
    
    const prevPage = () => {
        if(currentPage > 0) setCurrentPage(currentPage - 12 );
    };

    return (
    <div className={style.home}>
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
        <button onClick={prevPage} className={style.btn}> ← </button>
        <button onClick={nextPage} className={style.btn}> → </button>
        <Cards allPokemons = {pokeFilter()} />
    </div>
    );
}

export default Home;