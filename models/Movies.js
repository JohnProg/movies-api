import Sequelize from 'sequelize';
import sequelize from '../config/contecion-db';

const Movies = sequelize.define('movies', {
    title: Sequelize.STRING,
    year: Sequelize.STRING,
    rated: Sequelize.STRING,
    runtime: Sequelize.STRING,
    genre: Sequelize.STRING,
    director: Sequelize.STRING,
    writer: Sequelize.TEXT,
    actors: Sequelize.STRING,
    plot: Sequelize.STRING,
    language: Sequelize.STRING,
    country: Sequelize.STRING,
    awards: Sequelize.STRING,
    poster: Sequelize.STRING,
    ratings: Sequelize.ARRAY(Sequelize.JSON),
    metascore: Sequelize.STRING,
    imdbrating: Sequelize.STRING,
    imdbvotes: Sequelize.STRING,
    imdbid: Sequelize.STRING,
    type: Sequelize.STRING,
    dvd: Sequelize.STRING,
    boxoffice: Sequelize.STRING,
    production: Sequelize.STRING,
    website: Sequelize.STRING
});

export default Movies;