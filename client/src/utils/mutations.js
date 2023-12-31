import { gql } from '@apollo/client';

// Important for useMutation
export const LOGIN_USER = gql`
  mutation loginuser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
          _id
          username
          email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      _id
      username
      email
      savedBooks {
        _id
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput!) {
    saveBook(book: $book) {
      _id
      authors
      description
      title
      image
      link
    }
  }
`;

// # Define the book fields you want to receive after the mutation
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        _id
        authors
        description
        title
        image
        link
      }
    }
  }
`;