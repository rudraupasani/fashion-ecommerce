const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://rudra:30903000@mydrive.fluki.mongodb.net/?retryWrites=true&w=majority&appName=users').then(() => {
    console.log("db is runnig on makan")
})




