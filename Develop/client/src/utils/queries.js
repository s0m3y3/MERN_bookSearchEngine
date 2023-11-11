import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getMe {
    user {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [bookSchema]
    }
  }
`;