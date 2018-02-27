import express from 'express';
//http://www.omdbapi.com/?t=Guardians+of+the+Galaxy+Vol.+2&y=2017&plot=full&apikey=cbf6669e

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
    res.json({
        title: 'Express'
    });
});

export default router;
