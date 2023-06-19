import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "You missed filling name"],
        },
        email: {
            type: String,
            required: [true, "You missed filling email"],
        },
        phone: {
            type: String,
            required: [true, "You missed filling phone number"],
        },
    },
    { 
        timestamps : true 
    }
)

export default mongoose.model("Contact", contactSchema);