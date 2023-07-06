import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';

import indexRouter from './routes/index.js';
// ======================================================================================
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
// ======================================================================================
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../spa')));
// ======================================================================================
app.use('/', indexRouter);
// ======================================================================================
export default app;
