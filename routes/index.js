'use strict'

const express = require('express')
const Controllers = require('../controllers/personaje')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/personajes',Controllers.getPersonajes)
api.get('/personajes/:personajeId',Controllers.getPersonaje )
api.post('/personajes',Controllers.savePersonaje)
api.put('/personajes/:personajeId',Controllers.updatePersonaje)
api.delete('/personajes/:personajeId',Controllers.deletePersonaje)
api.get('/private',auth,(req,res)=> {
  res.status(200).send({message:'Tienes acceso'})
})
module.exports = api
