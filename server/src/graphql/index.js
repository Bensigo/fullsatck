const {makeExecutableSchema} = require('graphql-tools')
// app modules 
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema
