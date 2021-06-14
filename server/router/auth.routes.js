const router = require('express').Router()
const { login, register} = require('../controllers/auth.controller')

router.post('/login').route(login)
router.post('/register').route(register)

module.exports = router
