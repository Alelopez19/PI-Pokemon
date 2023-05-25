
import { Link } from 'react-router-dom/cjs/react-router-dom';
import style from './card.module.css'

function Card({pokemon}) {
    const {id, pokeId, name, image } = pokemon;
    return (
        <Link to={`/home/${pokeId || id}`} >
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Press+Start+2P&display=swap" rel="stylesheet"/>
        <div key={id} className={style.pokedex}>
            <h3 className={style.name}>{pokeId || id}. {name}</h3>
            <img className={style.screen} src={image} alt="img" />
            <div className={style.buttons}>
            <p className={style.greenp}>Types: </p>
                {pokemon && pokemon.types.map(type => 
                <p className={style.redp} >{type.name}</p>)}
            </div>
        </div>
        </Link>
        
    );
}

export default Card;
