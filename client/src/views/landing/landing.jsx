import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import style from './landing.module.css';


function Landing() {
    return (
    <div className={style.landing}>
        <h1 className={style.h1}> falsa PokeDex</h1>
        <Link to='/home'>
        <button className={style.btn} >Inicio</button>
        </Link>
    </div>
    );
}

export default Landing;