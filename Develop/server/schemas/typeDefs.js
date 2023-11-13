const typeDefs = `
  type user {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]
  }

  type Query {
    username: [User]
  }
`;

module.exports = typeDefs;