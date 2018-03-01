import Sequelize from 'sequelize';
import './config';

const sequelize = new Sequelize(process.env.POSTGREDB);

sequelize
    .authenticate()
    .then(() => console.log('Success connect with DB'))
    .catch(err => console.log(err));

export default sequelize;
