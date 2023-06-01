import express from 'express';
import bodyParser from 'body-parser';
import logger from './utils/logger';
import { db } from './db';
import { routes } from './routes';

const app = express();
app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const start =  () => {
    db.init();
    app.listen(8080,() => {
        logger.info('Server is listening on port 8080');
    });
}

start();