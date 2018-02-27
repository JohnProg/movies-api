import express from 'express';
import Comments from '../models/Comments';
import Movies from "../models/Movies";

const router = express.Router();

router.post('/', async (req, res) => {
    const {id, text} = req.body;

    if (!id || !text) return res.status(400).send({error: 'Id and comment text body is required!'});

    try {
        const comment = await Comments.create({
            text,
            movieId: id
        });

        res.status(200).send({comment});
    } catch (err) {
        res.status(422).send({error: err});
    }
});

router.get('/', async (req, res) => {
    const id = parseInt(req.query.id);

    try {
        if (id) {
            const movie = await Movies.find({where: {id}});
            const comments = await movie.getComments();

            res.status(200).send({comments});
        } else {
            const comments = await Comments.findAll();

            res.status(200).send({comments});
        }
    } catch (err) {
        res.status(422).send({error: err});
    }
});

export default router;