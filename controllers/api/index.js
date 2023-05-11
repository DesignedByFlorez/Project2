const router = require('express').Router()
const listRoutes = require('./listRoutes')
// const itemRoutes = require('./itemRoutes')
const userRoutes = require('./userRoutes')

router.use('/lists', listRoutes)
// router.use('/items', itemRoutes)
router.use('/users', userRoutes)

module.exports = router
