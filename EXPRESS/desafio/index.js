const express = require('express')
const app = express()
const port = 5000

const path = require('path')

const products = require('./products')
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/product', products)

app.all('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`A API está rodando na porta ${port}`)
})