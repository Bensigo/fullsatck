import gql from 'graphql-tag'

export const ALL_POST_QUERY = gql`
  query allPost{
    allPost {
        id
        title
        content
    }
  }
`
