const { gql } = require("apollo-server");

const typeDefs = gql`
  type Country {
    code: ID!
    name: String!
    native: String!
    phone: String!
    capital: String
    currency: String
    emoji: String!
  }
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
  }
  type Query {
    countries: [Country!]!
    country(code: ID!): Country!
    users: [User!]!
    user(id: ID!): User!    
  }
  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
  }
  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
  }  
`;

module.exports = { typeDefs };