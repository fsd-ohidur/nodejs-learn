const route = require('express').Router()
const {
    getAllContacts,
    getContact,
    createNewContact,
    updateContact,
    deleteContact
}=require('./contactController')

// Get all ConstantSourceNode

route.get('/',getAllContacts)
route.get('/:id',getContact)
route.post('/',createNewContact)
route.put('/:id',updateContact)
route.delete('/:id',deleteContact)

module.exports=route