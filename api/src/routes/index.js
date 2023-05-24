const { Router } = require('express');
const pokeRoutes = require('./pokemonsRoutes');
const typeRoutes = require('./typesRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//! Rutas de Pokemons
router.use('/pokemons', pokeRoutes);
//! Rutas de Types
router.use('/types', typeRoutes);

module.exports = router;
