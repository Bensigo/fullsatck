module.exports = `
  type List {
    id: ID!
    title: String!
    owner: String!   
  }
  type Query {
    allList: [List]!
    listById(id: ID!): List!
  }
`
