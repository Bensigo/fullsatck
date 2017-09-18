import gql from 'graphql-tag'

// creating a mutation to add new post
export const ADD_POST = gql`
 mutation addPost($title: String!, $content: String!){
   createPost(title: $title, content: $content){
     id
     title
     content
   }
 } 
`
