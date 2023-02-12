const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
    {
        id: 1,
        description: "Camiseta",
        value: 30,
        color: "Verde"
    },
    {
        id: 2,
        description: "Calça",
        value: 45,
        color: "Azul"
    }
]

app.get('/', (req, res) => {
    res.render('home', {products})
})

app.get('/product/:id', (req, res) => {
    
    const product = products.find(({id}) => id == req.params.id)

    res.render('product', {product} )
})

app.listen(3000, () => {
    console.log('App funcionando!')
})
