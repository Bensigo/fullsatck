module.exports = `
  type Post {
    id: ID!
    title: String!
    content: String!  
    createdAt: String! 
  }
  type Query {
    allPost: [Post]!
    postById(id: ID!): Post!
  }
  type Mutation {
    createPost(title: String!, content: String!): Post
  }
`
