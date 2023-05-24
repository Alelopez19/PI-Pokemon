const {Types} = require('../db');

const getAllTypes = async() => {
    const allTypes = await Types.findAll();
    return allTypes;
};

module.exports = { getAllTypes }


