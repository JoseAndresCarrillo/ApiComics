'use strict'

const express = require('express')
const Controllers = require('../controllers/personaje')
const api = express.Router()

api.get('/personajes',Controllers.getPersonajes)
api.get('/personajes/:personajeId',Controllers.getPersonaje )
api.post('/personajes',Controllers.savePersonaje)
api.put('/personajes/:personajeId',Controllers.updatePersonaje)
api.delete('/personajes/:personajeId',Controllers.deletePersonaje)

module.exports = api
