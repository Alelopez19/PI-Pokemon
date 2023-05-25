import { Cards, Navbar } from '../../components';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getByName, getPokemons, getTypes } from '../../redux/actions';

import style from './home.module.css';


function Home() {

    const dispatch = useDispatch();
    const pokeFiltered = useSelector((state) => state.myPokemons);
    const pokeBackUp = useSelector((state) => state.pokeBackUp);

    const [render, setRender] = useState(pokeFiltered);
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
        .then(res=> setRender(res.payload))
        setCurrentPage(0);
    };

    // const pokeFilter = () => {
    //     if(searchString.length === 0) {
    //         return render.slice(currentPage, currentPage+12)
    //     }
    //     return render.slice(currentPage, currentPage + 12)
    // };

    // const nextPage = () => {
    //     const filter = render.filter(poke => poke.name.includes(searchString));
    //     if(filter.length > currentPage + 12){
    //         setCurrentPage(currentPage + 12 );
    //     } 
    // };
    
    // const prevPage = () => {
    //     if(currentPage > 0) setCurrentPage(currentPage - 12 );
    // };

    const alfaFilter = (event) => {
        if(event.target.value === 'asc'){
            console.log('asc');
            pokeFiltered.sort((a, b) => {
                if(a.name>b.name) return 1;
                if(a.name<b.name) return -1;
                return 0
            })
            setRender(pokeFiltered);
        }else if(event.target.value === 'des'){
            console.log('des');
            pokeFiltered.sort((a, b) => {
                if(a.name>b.name) return -1;
                if(a.name<b.name) return 1;
                return 0});
            setRender(pokeFiltered);
        }else if(event.target.value === 'res'){
            console.log('res');
            setRender(pokeBackUp);
        }
    };

    return (
    <div className={style.home}>
        <h1 className={style.h1} >PROYECTO INDIVIDUAL: POKÉMON</h1>
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
        {/* <button onClick={prevPage} className={style.btn}> ← </button>
        <span>{(currentPage / 12)+1} de {(Math.round(render.length / 12))+1} </span>
        <button onClick={nextPage} className={style.btn}> → </button> */}
        <select onChange={alfaFilter} >
            <option defaultChecked value="res">Orden Alfabetico</option>
            <option value="asc">Ascendente</option>
            <option value="des">Descendente</option>
        </select>
        <Cards allPokemons = {pokeFiltered} />
    </div>
    );
}

export default Home;