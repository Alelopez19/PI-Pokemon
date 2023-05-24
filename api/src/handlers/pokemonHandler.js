const { 
    getAllPokeController,
    getPokeQueryController,
    getPokeByIdController,
    createPokemonController } = require("../controllers/pokemonControllers");

const getAllPokemonHandler = async (req, res) => {
    const {name} = req.query;
    
    try {
        if(name){
            const response = await getPokeQueryController(name);
            return res.status(200).json(response)
        }
        const response = await getAllPokeController();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({Error: error.message})
    }
};

const getPokeByIdHandler = async (req,res) => {
    const {id} = req.params;
    console.log(id);
    try {
        const response = await getPokeByIdController(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({Error: error.message});
    }
};

const createPokemonHandler = async (req,res) => {
    const {name,image, hp, attack, defense, speed, height, weight, types} = req.body;
    try {
        const response = await createPokemonController(name,image, hp, attack, defense, speed, height, weight, types)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({Error: error.message})
    }
};


module.exports = { getAllPokemonHandler, getPokeByIdHandler, createPokemonHandler };