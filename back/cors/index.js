const dotenv = require('dotenv')
dotenv.config()
module.exports = {
    origin: `${process.env.WEBSITE_URL}`,
    credentials: true,
}
