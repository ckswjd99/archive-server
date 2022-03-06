const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.redirect('/index.html'))
app.get('/portfolio', (req, res) => res.redirect('/portfolio/index.html'))

app.listen(port, () => {
  console.log(`Server listening in port ${port}!`)
})

