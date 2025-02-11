const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    console.log('usuario es admin OK')
    return next()
  }
  return res.status(403).json({ message: 'ONLY ADMIN' })
}
module.exports = { isAdmin }
