'use strict'

const User = require ('../models/user')
const service = require('../services')

function singUp(req, res){
  const user = new user({
    email: req.body.email,
    displayName:req.bidy.displayName
  })
  user.save((err)=>{
    if(err) res.status(500).send({message: `Error al crear el usuario:${err}`})
    return res.status(200).send({ token: service.createdToken(user)})
  })
}

function signIn(req, res){
  User.find({email:req.body.email},(err,user)=>{
    if(err) return res.status(500).send({message:err})
    if(!user) return res.status(404).send({message: 'No existe el usuario'})
    req.user =user
    res.status(200).send({
      message:'Logueo Exitoso',
      token:service.createdToken(user)
    })
  })
}

module.exports ={
  singUp,
  signIn
}
