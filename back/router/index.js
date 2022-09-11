const express = require('express')
const { Plan } = require('../models')
const router = express.Router()
const { isLoggedIn } = require('./middlewares')

router.get('/', isLoggedIn, async (req, res, next) => {
    const user = await req.user
    const name = user.name
    const id = user.id
    const plans = await Plan.findAll({
        attributes: ['planDate'],
        where: {
            UserId: id,
        },
    })
    console.log(plans[0].planDate)

    // console.log(user)
    res.send({ success: true, name: name })
})
module.exports = router
