import path from 'path';
import express from 'express';
import api from './api.js';

const staticPath = path.resolve(__dirname, '../dist/static');
const indexHtmlPath = path.resolve(staticPath, 'index.html');

const app = express();

app.use('/api', api);

app.use('/', express.static(staticPath));

app.get('*', (req, res) => {
  res.sendFile(indexHtmlPath);
});

app.listen(31337);
