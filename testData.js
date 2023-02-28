const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "Indian",
    friends: [
      {
        id: 2,
        name: "Johnny",
        username: "johnny",
        age: 24,
        nationality: "Indian",
      },
    ],
  },
];

const MovieList = [
  { id: 1, name: "HERO", yearOfRelease: 2050, isInTheaters: true },
  {
    id: 2,
    name: "HERO 2",
    yearOfRelease: 2052,
    isInTheaters: true,
  },
];
module.exports = {
  UserList,
  MovieList,
};
