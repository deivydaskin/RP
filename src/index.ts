import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { config } from './config';
import { defaultRoute } from './routes';

const app: Express = express();
const port = config.port;
const jsonParser = bodyParser.json();

app.get('/healthcheck', (req: Request, res: Response) => {
    res.send('OK!');
});

app.use(jsonParser, defaultRoute);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
