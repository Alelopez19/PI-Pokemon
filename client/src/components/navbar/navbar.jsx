import { Link } from 'react-router-dom/cjs/react-router-dom';
import Filtros from '../Filtros/filtros';

import style from './navbar.module.css'

function Navbar({handleChange, handleSubmit}) {
    return (
        <div className={style.navbar}>
            
            <Link to='/'>
                <button className={style.btn}>LANDING</button>
            </Link>

            <Link to='/create'>
            <button className={style.btn}>CREAR POKEMON</button>
            </Link>
            
            <input type='search' className={style.input} placeholder='Buscar...' onChange={handleChange}/>
            <button className={style.btn} onClick={handleSubmit}>BUSCAR</button>

            {/* <Filtros  /> */}

        </div>
    );
}

export default Navbar;