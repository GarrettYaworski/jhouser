require('dotenv').config()
const massive = require('massive')
const express = require('express')
const app = express()
const {json} = require('body-parser')
const port = 4000
app.use(json())
const {getListings,changeListing,removeListing,addListing} = require('./controller')

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('Database Connected');
    }).catch(err => console.log(err))

app.get('/api/listings', getListings)
app.put('/api/listings/:id', changeListing)
app.delete('/api/listings/:id', removeListing)
app.post('/api/listings', addListing)


app.listen(port, () => console.log(`Server listening on port: ${port}`))

