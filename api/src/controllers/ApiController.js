require('dotenv').config();
const {URL} = process.env;
const axios = require('axios');

const modelPokemon = (pokemon) => {
    return {
        pokeId: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        backImage: pokemon.sprites.back_default,
        types: pokemon.types.map(e => e.type.name),
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
    }
};


const getPokeType = async () => {
    const response = (await axios(`${URL}/type`)).data;

    const createType = await response.results.map(e => {
        return {name: e.name,};
    });
    return createType;
};

const savePokeApi = async (Pokemon, Type) => {

    try {
        const pokeType = await getPokeType();
        await Type.bulkCreate(pokeType);
    } catch (error) {
        console.log('Error en Type', error.message)
    }


    try {
        const response = (await axios.get(`${URL}/pokemon?limit=1281`)).data;
        const promises = [];
        for (const pokemon of response.results) {
            const responsePokemon = axios.get(pokemon.url);
            promises.push(responsePokemon);
        }
        const results = await Promise.all(promises);
        for (const result of results) {
            const parsedPokemon = modelPokemon(result.data);
            const types = await Type.findAll({
                where: {
                    name: parsedPokemon.types
                }
            });
            const pokemon = await Pokemon.create(parsedPokemon);
            for (const type of types) {
                await pokemon.addType(type);
            };
        }
    } catch (error) {
        console.log('Error en Pokemons', error.message)
    }
};

module.exports = { savePokeApi }