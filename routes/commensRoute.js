import express from 'express';
import Comments from '../models/Comments';

const router = express.Router();

router.post('/', (req, res) => {
   res.status(200).end();
});