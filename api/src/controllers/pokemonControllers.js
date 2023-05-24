require('dotenv').config();
const {URL} = process.env;
const axios = require('axios');
const { Pokemon, Types } = require('../db');
const { Op } = require('sequelize');

const getAllPokeController = async () => {
    const pokemons = await Pokemon.findAll({
        include: {
            model: Types,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        },
    });
    return pokemons;
};

const getPokeQueryController = async (name) => {
    const poke = await Pokemon.findAll({
        include: {
            model: Types,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        },
        where: {
            name: { [Op.iLike]: `%${name}%`}
        }
    });

    if(poke.length > 0){
        return poke
    } return 'No se encontraron pokemons'
};

const getPokeByIdController = async (id) => {

    if(id.length > 6){
        const pokemon = await Pokemon.findAll({
            include: {
                model: Types,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            },
            where: {
                id: id
            }
        })
        
        const poke = {
            name: pokemon[0].name,
            image: pokemon[0].image,
            backImage: pokemon[0].image,
            hp: pokemon[0].hp,
            attack: pokemon[0].attack,
            defense: pokemon[0].defense,
            speed: pokemon[0].speed,
            height: pokemon[0].height,
            weight: pokemon[0].weight,
            types: pokemon[0].types
        };
        return poke;
    }else {
        const pokemon = (await axios(`${URL}/pokemon/${id}`)).data;
        
        const poke = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            backImage: pokemon.sprites.back_default,
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map(e => e.type.name)
        };
        return poke;
    }

};

const createPokemonController = async (name,image, hp, attack, defense, speed, height, weight, types) => {
    
    const pokeCreated = await Pokemon.create({
        name,
        image,
        backImage: image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        created: true
    });

    for (const type of types) {

        const typeDb = await Types.findOne({
            where: {
                name: type.name
            }
        })

        await pokeCreated.addType(typeDb);
    }
    return pokeCreated;
};

module.exports = { 
    getAllPokeController,
    getPokeQueryController,
    getPokeByIdController,
    createPokemonController};