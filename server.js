import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import Routes from './routes/ContactRoutes.js'
import ErrorHandler from './middleware/ErrorHandler.js'
import { connectDB } from './config/mongodb_connection.js'
import userRoutes from './routes/userRoutes.js'

const port = process.env.PORT || 5000

connectDB();
const app = express()


app.use(express.json())

app.use('/api/contacts', Routes)
app.use('/api/user', userRoutes)
app.use(ErrorHandler)


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})