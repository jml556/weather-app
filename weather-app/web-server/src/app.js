const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

const html = `
<h1>About Page using htnml</h1>
`

const obj = {
  location: 'Maryland',
  name: 'Tim'
}
//about title
app.get('/about', (req, res) => {
  res.send(html)
})

app.get('/help', (req, res) => {
  res.send('Help Page')
})


//json response - send back object
app.get('/weather', (req, res) => {
  res.send(obj)
})

app.listen(3000, () => {
  console.log('listening on PORT ' + 3000)
})