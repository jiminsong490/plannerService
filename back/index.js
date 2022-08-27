const express = require('express')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const passport = require('passport')
const { sequelize } = require('./models/index')

const app = express()
dotenv.config()

// app.engine('html',require('ejs').renderFile)
app.set('port', process.env.SERVER_PORT || '3005')
// app.set('view engine','html')
// app.set('views',path.join(__dirname, 'views'))

sequelize
    .sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공')
    })
    .catch((err) => {
        console.error(err)
    })

app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = process.env.ENV !== 'production' ? err : {}
    res.status(err.status || 500)
    res.render('error')
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중')
})
