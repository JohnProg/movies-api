import Sequelize from 'sequelize';
import sequelize from '../config/contecion-db';

const Comments = sequelize.define('comments', {
   text: Sequelize.TEXT,
});

export default Comments;