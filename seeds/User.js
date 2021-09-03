const { User } = require('../models');

const userdata = [
  {
      username:"Surse1949",
      password:"Beequewiem2",
  },
  {
      username:"Againg1958",
      password:"roa0eeNah",
  },
  {
      username:"Wingeres",
      password:"Ooquau4lie",
  },
  {
      username:"Lepaso66",
      password:"lahghoeQua0",
  },
  {
      username:"Agied1942",
      password:"Rihae1xeish",
  },
  {
      username:"Hican1962",
      password:"Oe8oecoh3wee",
  },
  {
      username:"Soments",
      password:"Zugh8bi1ph",
  },
  {
      username:"Tareurery63",
      password:"eGo5aehaeji",
  },
  {
      username:"Mored1947",
      password:"iC3roopuesh",
  },
  {
      username:"Meacermir",
      password:"oSei3Eo5w",
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
