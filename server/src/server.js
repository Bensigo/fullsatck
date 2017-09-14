const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {
  graphiqlExpress,
  graphqlExpress} = require('apollo-server-express')
const mongoose = require('mongoose')

const port = 10101
const app = express()

// app modules
const schema = require('./graphql')
const DB = require('./models')

// setting up middleware for the app
app.use(cors())
app.use(morgan('dev'))

// setting up graphql 
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    DB
  }
}))

// setting up a graphiql a ui for testing our query
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

// connecting to a mongodb database with name of db fullstack
mongoose.connect('mongodb://localhost:27017/fullstack', () => {
  console.log('connected to database successfully')
})

// starting the server
app.listen(port, () => {
  console.log(`starting grapql serevr on localhost:${port}`)
})
