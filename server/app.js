const express = require('express')
const app = express()
const db = require('../server/config/db')
const userRoutes = require('../server/routes/user.routes')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const productRoutes = require('../server/routes/product.routes')
const cartRoutes = require('../server/routes/cart.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/user', userRoutes)
app.use('/api' , productRoutes)
app.use('/', cartRoutes)


app.listen(3000, (req, res) => {
  console.log("chal raha he server")
})