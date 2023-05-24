const { Router } = require('express');
const {
    getAllPokemonHandler,
    getPokeByIdHandler,
    createPokemonHandler
} = require('../handlers/pokemonHandler')

const pokeRoutes = Router();

pokeRoutes.get('/', getAllPokemonHandler);
pokeRoutes.get('/:id', getPokeByIdHandler);
pokeRoutes.post('/', createPokemonHandler);


module.exports = pokeRoutes;