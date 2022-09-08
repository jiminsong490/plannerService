const express = require('express')
const router = express.Router()
const { isLoggedIn } = require('./middlewares')

router.get('/', isLoggedIn, async (req, res, next) => {
    const user = await req.user
    const name = user.name
    // console.log(user)
    res.send({ success: true, name: name })
})
module.exports = router
