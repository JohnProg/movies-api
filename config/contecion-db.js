import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://nzxhbkth:Pl0P5gVmRnaI5iCkqBmrEOhL2nCWZKwW@horton.elephantsql.com:5432/nzxhbkth');


sequelize
    .authenticate()
    .then(() => console.log('Success connect with DB'))
    .catch(err => console.log(err));

export default sequelize;