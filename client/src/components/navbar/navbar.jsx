import { Link } from 'react-router-dom/cjs/react-router-dom';
import Filtros from '../Filtros/filtros';

import style from './navbar.module.css'

function Navbar({handleChange}) {
    return (
        <div className={style}>
            
            <Link to='/'>
                <button className='btn'>LANDING</button>
            </Link>

            <Link to='/create'>
            <button className='btn'>CREAR POKEMON</button>
            </Link>
            
            <Filtros onChange={handleChange} />

            <input type='search' className='input' placeholder='Buscar...' onChange={handleChange}/>

        </div>
    );
}

export default Navbar;