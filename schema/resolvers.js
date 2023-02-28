const { UserList, MovieList } = require("../testData");
const _ = require("lodash");
const resolvers = {
  Query: {
    //USER RESOLVERS
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    //MOVIES RESOLVERS
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },

  //Movie Reslover
  User: {
    favoriteMovies: () => {
      return _.filter(MovieList, (movie) => {
        return movie.yearOfRelease >= 2050;
      });
    },
  },

  //Mutation Object
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
      //   console.log(user);
    },

    updateUser: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === id) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated
    },
  },
};

module.exports = { resolvers };
