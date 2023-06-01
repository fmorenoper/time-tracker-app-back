import express from 'express';
import bodyParser from 'body-parser';
import logger from './utils/logger.js';
import cors from 'cors';
import { db } from './db/index.js';
import { routes } from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const start = async () => {
    db.init();
    await app.listen(8080);
    logger.info("Listening on port 8080");
}

start();
