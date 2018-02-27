import express from 'express';
import {fetchMovies} from '../utils/fetachMovies';
import Movies from '../models/Movies';

const router = express.Router();

router.post('/', async (req, res) => {
    const title = req.body.title;

    if (!title) return res.status(400).send({status: 'Title is required!!!'});

    try {
        const {data} = await fetchMovies(title);

        const detailsMovie = {};
        Object.keys(data).map(key => {
            const oldKey = key;
            const newKey = key.toLowerCase();
            detailsMovie[newKey] = data[oldKey];
        });

        const allDetailsAboutMovie = await Movies.create(detailsMovie);

        res.status(200).send(allDetailsAboutMovie);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', async (req, res) => {
    const year = req.query.year;

    try {
        if (year) {
            const allMoviesByYear = await Movies.findAll({where: {year}});
            res.status(200).send({movies: allMoviesByYear});
        } else {
            const allMovies = await Movies.findAll();
            res.status(200).send({movies: allMovies});
        }
    } catch (err) {
        res.status(422).send({error: err});
    }
});

export default router;