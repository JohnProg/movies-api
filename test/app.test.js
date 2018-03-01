import chai from 'chai';
import chaiHttp from 'chai-http';
import 'babel-polyfill';

import app from '../app';

chai.should();
chai.use(chaiHttp);

/* Test the /GET route */
describe('Test app endpoint', () => {
    describe('POST /movies', () => {
        it('should add movie to db',  (done) => {
            const response = {
                title: 'Guardians of the Galaxy Vol. 2'
            };

            chai
                .request(app)
                .post('/movies')
                .send(response)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    res.should.have.status(200);
                    res.body.should.have.property('movie');
                    res.body.movie.should.have.property('title');
                    done();
                })
        });
    });

    describe('GET /movies', () => {
        it('should fetch all movies', (done) => {
            chai
                .request(app)
                .get('/movies')
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    res.should.have.status(200);
                    res.body.should.have.property('movies');
                    done();
                });
        });

        it('should fetch movie filtering by year', (done) => {
            chai
                .request(app)
                .get('/movies?year=2017')
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    res.should.have.status(200);
                    res.body.should.have.property('movies');
                    if (res.body.movies.length) {
                        res.body.movies[0].should.have.property('year');
                        res.body.movies[0].year.should.equal('2017');
                    }
                    done();
                });
        });
    });

    describe('POST /comments', () => {
        it('should add comment to movie', (done) => {
           const comment = {
               id: 1,
               text: "Very good movie. 5/5"
           };

           chai
               .request(app)
               .post('/comments')
               .send(comment)
               .end((err, res) => {
                   if (err) {
                       return done(err);
                   }

                   res.should.have.status(200);
                   res.body.should.have.property('comment');

                   done();
               })
        });
    });

    describe('GET /comments', () => {
        it('should fetch all comments', (done) => {
             chai
                .request(app)
                .get('/comments')
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    res.should.have.status(200);
                    res.body.should.have.property('comments');

                    done();
                })
        });

        it('should fetch all comments to the movie', (done) => {
            chai
                .request(app)
                .get('/comments?id=1')
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    res.should.have.status(200);
                    res.body.should.have.property('comments');

                    if(res.body.comments) {
                        res.body.comments[0].should.have.property('id');
                        res.body.comments[0].id.should.equal(1);
                    }

                    done();
                })
        });
    });
});
