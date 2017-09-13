const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {
  graphiqlExpress,
  graphqlExpress} = require('apollo-server-express')

const port = 10101
const app = express()

// app modules
const schema = require('./graphql')

// setting up middleware for the app
app.use(cors())
app.use(morgan('dev'))

// setting up graphql 
app.use('/graphql', bodyParser.json(), graphqlExpress({
  // TODO: context
  schema
}))

// setting up a graphiql a ui for testing our query
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

// TODO: connect to mongodb with mongoose 

// starting the server
app.listen(port, () => {
  console.log(`starting grapql serevr on localhost:${port}`)
})
