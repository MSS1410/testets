require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { connectDB } = require('./config/db')
const booksRouter = require('./api/routes/libros')
const usersRouter = require('./api/routes/user')

const app = express()
const PORT = 3008
connectDB()
app.use(cors())

app.use(express.json())

app.use('/api/v1/books', booksRouter)
app.use('/api/v1/users', usersRouter)

app.use((req, res, next) => {
  res.status(404).json({ message: '...BACK 2 FRONT - BOOKS & USERS...' })
})
//para 500
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'ERROR INTERNO' })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
