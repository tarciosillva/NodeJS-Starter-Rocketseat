const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

//listagem
routes.get("/products", ProductController.index)
//Consulta
routes.get('/products/:id', ProductController.show)
//Criação
routes.post("/products", ProductController.store)
//Atualização
routes.put("/products/:id", ProductController.update)
//Delete
routes.delete("/products/:id", ProductController.destroy)

module.exports = routes