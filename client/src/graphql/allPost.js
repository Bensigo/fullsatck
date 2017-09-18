import gql from 'graphql-tag'

export const ALL_POST_QUERY = gql`
  {
    allPost {
      id
      title
      content
    }
  }
`
