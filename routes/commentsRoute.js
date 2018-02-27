import express from 'express';
import Comments from '../models/Comments';

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

export default router;