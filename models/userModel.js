import mongoose from 'mongoose';

const userShema = mongoose.Schema({
        username: {
            type: String,
            required: [true, "Please Add the User Name"],
        },
        email: {
            type: String,
            required: [true, "Please add the user email address"],
            unique: [true, "Email address already Exists"],
        },
        password: {
            type: String,
            required: [true, "user password here"]
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("User", userShema)