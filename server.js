import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import Routes from './routes/ContactRoutes.js'
import ErrorHandler from './middleware/ErrorHandler.js'

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.use('/api/contacts', Routes)
app.use(ErrorHandler)


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})