const exprees = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// iniciando app
const app = exprees()
app.use(cors())
app.use(exprees.json())


//iniciando o DB
mongoose.connect('mongodb+srv://tarciosillva:seven1234@cluster0.8ta9o.mongodb.net/nodeapi?retryWrites=true&w=majority', {useNewUrlParser:true})

requireDir("./src/models")

//Rotas
app.use("/api", require("./src/routes"))

// Porta
app.listen(3001)

