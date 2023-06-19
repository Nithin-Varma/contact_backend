import asyncHandler from 'express-async-handler'
import Contact from '../models/ContactModel.js'

export const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts)
})

export const createContact = asyncHandler(async(req, res) => {
    console.log(req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("You missed some mandatory fields, please fill those.")
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact)
})

export const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})

export const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )
    res.status(200).json(updatedContact)
})

export const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }
    await Contact.remove()
    res.status(200).json(contact)
})