import gql from 'graphql-tag'

// query for a post by id
export const POST_BY_ID = gql`
  query findPostById($id: ID!){
    postById(id: $id){
      title
      content
    }
  }
`
