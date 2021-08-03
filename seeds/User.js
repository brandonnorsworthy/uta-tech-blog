const { User } = require('../models');

const userdata = [
  {
      username:"Surse1949",
      password:"Beequewiem2",
      email:"AldenADaniels@teleworm.us"
  },
  {
      username:"Againg1958",
      password:"roa0eeNah",
      email:"ReynaldoCWoods@rhyta.com"
  },
  {
      username:"Wingeres",
      password:"Ooquau4lie",
      email:"MichealWFuentes@jourrapide.com"
  },
  {
      username:"Lepaso66",
      password:"lahghoeQua0",
      email:"KathyRFierro@dayrep.com"
  },
  {
      username:"Agied1942",
      password:"Rihae1xeish",
      email:"JerryCPeck@rhyta.com"
  },
  {
      username:"Hican1962",
      password:"Oe8oecoh3wee",
      email:"MonicaHRichie@armyspy.com"
  },
  {
      username:"Soments",
      password:"Zugh8bi1ph",
      email:"LeanneDGabler@dayrep.com"
  },
  {
      username:"Tareurery63",
      password:"eGo5aehaeji",
      email:"ThomasPRansom@rhyta.com"
  },
  {
      username:"Mored1947",
      password:"iC3roopuesh",
      email:"YukikoGBond@teleworm.us"
  },
  {
      username:"Meacermir",
      password:"oSei3Eo5w",
      email:"YvonneRDavis@rhyta.com"
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
