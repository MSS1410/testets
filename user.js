const { isAuth } = require('../../middlewares/auth')
const { isAdmin } = require('../../middlewares/admin')

const {
  getAllUsers,
  getUserById,
  register,
  login,
  updatedUser,
  roleChange,
  deleteUser
} = require('../controllers/user')

const usersRouter = require('express').Router()

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id', getUserById)
usersRouter.post('/register', register)
usersRouter.post('/login', login)
usersRouter.put('/:id', updatedUser)
usersRouter.put('/:id/role', isAuth, isAdmin)

module.exports = usersRouter
