const { Router } = require('express');
const {getAllTypesHandler} = require('../handlers/typeHandle')

const typeRoutes = Router();

typeRoutes.get('/', getAllTypesHandler);



module.exports = typeRoutes;