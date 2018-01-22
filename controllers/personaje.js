'use strict'

const Personaje = require('../models/personaje')

function getPersonaje(req,res){
  let personajeId = req.params.personajeId

  Personaje.findById(personajeId,(err,personaje)=>{
    if (err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
    if (!personaje) return res.status(404).send({message: `El personaje no existe`})

    res.status(200).send({personaje})
  })
}

function getPersonajes(req,res){
  Personaje.find({},(err,personajes)=>{
    if (err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
    if (!personajes) return res.status(404).send({message: `No existe productos`})

    res.status(200).send({personajes})
  })
}

function savePersonaje(req,res){
  console.log('POST /api/personajes')
  console.log(req.body)

  let personaje = new Personaje()
  personaje.name = req.body.name
  personaje.real_name = req.body.real_name
  personaje.image = req.body.image
  personaje.description=req.body.description
  personaje.poderes=req.body.poderes
  personaje.ocupacion=req.body.ocupacion
  personaje.ciudad=req.body.ciudad
  personaje.alias=req.body.alias
  personaje.primera_aparicion= req.body.primera_aparicion


  personaje.save((err,personajeStored)=>{
    if(err) res.status(500).send({message:`Error al salvar en la base de datos : ${err}`})

    res.status(200).send({personaje: personajeStored})
  })
}

function updatePersonaje(req,res){
  let personajeId = req.params.personajeId
  let update =req.body

  Personaje.findByIdAndUpdate(personajeId,update,(err,personajeUpdate)=>{
    if (err) res.status(500).send({message:`Error al actualizar: ${err}`})
    res.status(200).send({personaje: personajeUpdate})
  })
}

function deletePersonaje(req,res){
  let personajeId = req.params.personajeId

  Personaje.findById(personajeId,(err,personaje)=>{
    if (err) res.status(500).send({message:`Error al borrar: ${err}`})
    personaje.remove(err=>{
      if (err) res.status(500).send({message:`Error al borrar: ${err}`})
      res.status(200).send({message:`El personaje fue eliminado`})
    })
  })
}

module.exports = {
  getPersonaje,
  getPersonajes,
  savePersonaje,
  updatePersonaje,
  deletePersonaje
}
