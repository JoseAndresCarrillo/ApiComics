'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db,(err,res)=>{
  if(err){
    return console.log(`Error al conectar la base de datos: ${err}`)
  }
  console.log('Conexion Establecida....')

  app.listen(config.port,()=>{
    console.log(`API REST CORRIENDO EN HTTP://LOCALHOST:${config.port}`)
  })
})
