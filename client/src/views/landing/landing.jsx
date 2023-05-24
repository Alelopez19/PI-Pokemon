import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './landing.module.css';


function Landing() {
    return (
    <div className={styles.landing}>
        <h1>Estoy en la landing</h1>
        <Link to='/home'>
        <button>Inicio</button>
        </Link>
    </div>
    );
}

export default Landing;