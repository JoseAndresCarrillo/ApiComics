'use strict'

const express = require('express')
const personajeCtrl = require('../controllers/personaje')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/personajes',personajeCtrl.getPersonajes)
api.get('/personajes/:personajeId',personajeCtrl.getPersonaje )
api.post('/personajes',personajeCtrl.savePersonaje)
api.put('/personajes/:personajeId',personajeCtrl.updatePersonaje)
api.delete('/personajes/:personajeId',personajeCtrl.deletePersonaje)
api.post('/signUp',userCtrl.signUp)
api.post('/signIn',userCtrl.signIn)
api.get('/private',auth,(req,res)=> {
  res.status(200).send({message:'Tienes acceso'})
})
module.exports = api
