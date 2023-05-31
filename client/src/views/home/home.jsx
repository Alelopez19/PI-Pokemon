import { Cards, Navbar, Filtros } from '../../components';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getByName, getPokemons, getTypes} from '../../redux/actions';

import style from './home.module.css';

function Home() {

    const dispatch = useDispatch();
    const pokeRender = useSelector((state) => state.myPokemons);

    const [searchString, setSearchString] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    
    const [pageNumbersLimit, setPageNumberLimits] = useState(10);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    
    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);


    //? HANDLERS
    const handleChange = (event) => {
        setSearchString(event.target.value);
    };
    
    const handleSubmit = () => {
        dispatch(getByName(searchString))
        setCurrentPage(1);
    };
    
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    };
    
    //? PAGINACION
    const pages = [];
    for(let i = 1; i <= Math.ceil(pokeRender.length/itemsPerPage); i++){pages.push(i);}

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFistItem = indexOfLastItem - itemsPerPage;
    const currentItems = pokeRender.slice(indexOfFistItem, indexOfLastItem)

    const renderPageNumbers = pages.map((number) => {
        if(number < maxPageNumberLimit+1 && number > minPageNumberLimit){
            return (
                <li key={number} id={number} onClick={handleClick} className={currentPage === number ? "active" : null} >
                    {number}
                </li>
            )
        }else {
            return null
        }
    })

    const nextPage = () => {
        setCurrentPage(currentPage+1);

        if(currentPage+1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumbersLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumbersLimit);
        }
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);

        if((currentPage-1) % pageNumbersLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumbersLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumbersLimit);
        }
    };

    let pageIncrementBtn = null;
    if(pages.length > maxPageNumberLimit){
        pageIncrementBtn = <li onClick={nextPage} > &hellip;</li>
    }

    let pageDecrementBtn = null;
    if(minPageNumberLimit >= 1){
        pageDecrementBtn = <li onClick={prevPage} > &hellip; </li>
    }
    
    if(currentItems < Math.ceil(pokeRender.length/itemsPerPage)){
        setCurrentPage(1)
    }

    //? RENDER 
    return (
    <div className={style.home}>
        <h1 className={style.h1} >PROYECTO INDIVIDUAL: POKÉMON</h1>
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
        <Filtros />
        <Cards allPokemons = {currentItems} />

        <span className={style.span} > {currentPage} de {Math.ceil(pokeRender.length/itemsPerPage)} </span>
        <ul className={style.pageNumbers}>
            <button onClick={prevPage} className={style.btn} 
            disabled={currentPage === pages[0] ? true:false} > ← </button>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
            <button onClick={nextPage} className={style.btn} 
            disabled={currentPage === pages[pages.length -1] ? true:false}> → </button>
        </ul>

    </div>
    );
}

export default Home;