const contacts=require('./Contacts')

exports.getAllContacts=(req,res)=>{
    res.json(contacts.getAllContacts())
}
exports.getContact=(req,res)=>{
    let {id}=req.params
    id = parseInt(id)
    let contact=contacts.getContactById(id)
    res.json(contact)
}
exports.createNewContact=(req,res)=>{
    let {name,phone,email}=req.body
    let contact = contacts.createContact({
        name,phone,email
    })
    res.json(contact)
    // res.send('<h1>Created a new contact</h1>')
}
exports.updateContact=(req,res)=>{
    let{id}=req.params
    let{name,phone,email}=req.body
    id=parseInt(id)
    let contact = contacts.updateContactById(id,{
        name,phone,email
    })
    res.json(contact)
}
exports.deleteContact=(req,res)=>{
    let{id}=req.params
    id=parseInt(id)
    let contact=contacts.deleteContactById(id)
    res.json(contact)
}