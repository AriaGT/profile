const express = require('express')

const port = 9000

const app = express()

app.get('/profile', (req, res) => {
  res.json({
    name: 'Alessandro',
    age: 18,
    country: 'Perú'
  })
})

app.post('/companies', (req, res) => {
  res.json([
    'Mercado Libre',
    'BBVA',
    'Ecomsur'
  ])
})

app.patch('/hobbies', (req, res) => {
  res.json([
    'Jugar videojuegos',
    'Ver videos cortos',
    'Salir con amigos'
  ])
})

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})