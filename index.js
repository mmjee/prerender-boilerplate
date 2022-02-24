const path = require('path')
const express = require('express')
const morgan = require('morgan')
const prerender = require('prerender-node')

const app = express()

if (process.env.RBP_DISABLE_LOGGING !== 'true') {
  app.use(morgan('combined'))
}
app.set('trust proxy', 1)

const STATIC = path.resolve(__dirname, '/app/frontend')
const INDEX = path.resolve(STATIC, 'index.html')
const port = process.env.HTTP_PORT ? Number(process.env.HTTP_PORT) : 80

// Let index be handled at line 24
app.use(express.static(STATIC, {
  index: false
}))
app.use(prerender)
app.get('*', function (req, res) {
  res.sendFile(INDEX)
})

app.listen(port)
