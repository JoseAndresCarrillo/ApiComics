'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonajeSchema = Schema({
  name: String,
  real_name:String,
  image: String,
  description: String,
  poderes: String,
  ocupacion: String,
  ciudad:String,
  alias: String,
  primera_aparicion: String
})

module.exports = mongoose.model('Personaje',PersonajeSchema)
