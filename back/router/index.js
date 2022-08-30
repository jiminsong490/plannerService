const e = require('express')
const express = require('express')
const { User } = require('../models')
const router = express.Router()
const { isLoggedIn } = require('./middlewares')

router.get('/', isLoggedIn, async (req, res, next) => {
    const user = await req.user
    const name = user.name
    res.send({ success: true, name: name })
})
module.exports = router
