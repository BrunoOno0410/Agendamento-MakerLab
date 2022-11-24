import express from 'express';
import cors from 'cors';
import { router } from './router.js';

const app = express();

app.use(express.json());

app.use(router);

app.use(cors());

app.listen('9001');
