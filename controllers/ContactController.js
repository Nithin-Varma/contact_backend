export const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all Contacts" })
}

export const createContact = (req, res) => {
    console.log(req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("You missed some mandatory fields, please fill those.")
    }
    res.status(200).json({ message: "Create a Contact" })
}

export const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` })
}

export const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
}

export const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` })
}
