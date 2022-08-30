const express = require('express')
const router = express.Router()
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
const passport = require('passport')
const dotenv = require('dotenv')
dotenv.config()

router
    .route('/')
    .get(isLoggedIn, async (req, res, next) => {
        req.logout((err) => {
            if (err) {
                return next(err)
            }
            req.session.destroy((err) => {
                res.send({ success: true })
                // res.redirect(`${process.env.WEBSITE_URL}`)
            })
        })
    })
    .post(isNotLoggedIn, async (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                console.log('login(authenticate) : ', err)
                return next(err)
            }

            if (!user) {
                return res.redirect(`${process.env.WEBSITE_URL}/login`)
            }
            return req.login(user, (loginError) => {
                if (loginError) {
                    console.error(loginError)
                    return next(loginError)
                }

                return res.redirect(`${process.env.WEBSITE_URL}`)
            })
        })(req, res, next)
    })
module.exports = router
