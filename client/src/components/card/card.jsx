
import { Link } from 'react-router-dom/cjs/react-router-dom';
import style from './card.module.css'

function Card({pokemon}) {
    const {id, pokeId, name, image, hp, attack, defense, speed,} = pokemon;
    return (
        <Link to={`/home/${pokeId || id}`} >
            <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Press+Start+2P&display=swap" rel="stylesheet"/>
        <div className={style.pokedex}>
            <h3 className={style.name}>{pokeId || id}. {name}</h3>
            <img className={style.screen} src={image} alt="img" />
            <div className={style.buttons}>
            <p className={style.redp}>HP: {hp}</p>
            <p className={style.bluep}>Attack: {attack} </p>
            <p className={style.yellowp}>Defense: {defense} </p>
            <p className={style.greenp}>Speed: {speed} </p>
            </div>
        </div>
        </Link>
        
    );
}

export default Card;
