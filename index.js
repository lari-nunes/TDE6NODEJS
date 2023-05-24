const express = require("express");
const productsRoutes = require("./routes/products")
const usersRoutes = require("./routes/users")

const server = express();
server.use(express.json());

server.use(productsRoutes.router)
server.use(usersRoutes.router)

const port = 3000
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})