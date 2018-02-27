import Sequelize from 'sequelize';
import sequelize from '../config/contecion-db';

const Comments = sequelize.define('comments', {
   content: Sequelize.TEXT,
   author: Sequelize.STRING
});

export default Comments;