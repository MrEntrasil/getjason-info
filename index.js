const get = require("./routes/get")
const express = require("express")
const app = express()

app.use("/get", get)

app.listen(8080, () => {
    console.log("Servidor rodando!");
})