import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const Connect = await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Successfully DataBase Connected: ", Connect.connection.host, Connect.connection.name)
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}