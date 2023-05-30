import styles from './cards.module.css'
import Card from '../card/card'

function Cards({allPokemons}) {
    const pokemonsList = allPokemons;
    return (
        <div className={styles.cards}>
            {pokemonsList.map((pokemon) => {return (<Card key={pokemon.pokeId} pokemon = {pokemon} />)})}
        </div>
    );
}

export default Cards;
