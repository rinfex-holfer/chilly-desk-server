import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import apiEndpoints from './api';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', apiEndpoints);

app.get('*', (req: Request, res: Response) => {
  res.status(404).send('404 Not Found');
});

export default app;
