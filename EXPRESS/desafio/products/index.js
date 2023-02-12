const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/addProduct.html`)
})

router.post('/save', (req, res) => {
    const {name, value} = req.body
    
    console.log(`O nome do produto é ${name} e seu valor é ${value}`)

    res.sendFile(`${basePath}/addProduct.html`)
})

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/products.html`)
})




module.exports = router