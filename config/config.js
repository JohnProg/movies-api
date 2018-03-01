const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.POSTGREDB = 'postgres://nzxhbkth:Pl0P5gVmRnaI5iCkqBmrEOhL2nCWZKwW@horton.elephantsql.com:5432/nzxhbkth';
} else {
    process.env.POSTGREDB = 'postgres://xvqwyyti:BhC6doGtUd3wKmYGcAuqmA9JwckH-6PI@baasu.db.elephantsql.com:5432/xvqwyyti';
}