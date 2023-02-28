const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends:[User]
    favoriteMovies:[Movie]
  }

  type Movie{
    id:ID!
    name:String!
    yearOfRelease:Int!
    isInTheaters:Boolean!
  }

  type Query {
    users: [User!]!
    user(id:ID!):User!
    movies:[Movie!]!
    movie(name:String!):Movie!
  }
  
  input createUserinput{
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = Indian
  }

  input updateUsernameinput{
    id:ID!
    newUsername:String!
  }

  type Mutation{
   createUser(input:createUserinput!):User
   updateUsername(input:updateUsernameinput):User
  }

  enum Nationality{
    Indian
  }
`;

module.exports = {
  typeDefs,
};
