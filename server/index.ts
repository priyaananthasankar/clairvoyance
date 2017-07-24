import * as express from 'express'
import * as winston from 'winston'

const app = express()

app.set('port', process.env.PORT || 3000)

app.get('*', (req, res) => {
  res.send('Hello, world!')
})

const server = app.listen(app.get('port'), () => {
  winston.info(`Server listening on port ${server.address().port}`)
})