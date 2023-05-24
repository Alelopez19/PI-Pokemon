const { getAllTypes } = require("../controllers/typesControllers");

const getAllTypesHandler = async (req,res) => {
    try {
        const response = await getAllTypes();
        return res.status(200).json(response);
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
};

module.exports = { getAllTypesHandler }