const { isAuth } = require('../../middlewares/auth')
const {
  getAllBooks,
  getBookById,
  postBook,
  updateBook,
  deleteBook
} = require('../controllers/libros')

const booksRouter = require('express').Router()

booksRouter.get('/', getAllBooks)
booksRouter.get('/:id', getBookById)
booksRouter.post('/', isAuth, postBook)
booksRouter.put('/:id', isAuth, updateBook)
booksRouter.delete('/:id', isAuth, deleteBook)

module.exports = booksRouter
