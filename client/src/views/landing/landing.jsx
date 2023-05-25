import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import style from './landing.module.css';


function Landing() {
    return (
    <div className={style.landing}>
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Press+Start+2P&display=swap" rel="stylesheet"/>
        <h1 className={style.h1}> BIENVENIDO A MI PI</h1>
        <Link to='/home'>
        <button className={style.btn} >Inicio</button>
        </Link>
    </div>
    );
}

export default Landing;