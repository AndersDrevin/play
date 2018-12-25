import path from 'path';
import express from 'express';

const staticPath = path.resolve(__dirname, '../dist/static');
const indexHtmlPath = path.resolve(staticPath, 'index.html');

const app = express();

app.get(['/static', '/static/index.html'], (req, res) => {
  res.redirect('/');
});

app.use('/static', express.static(staticPath));

app.get('/', (req, res) => {
  res.sendFile(indexHtmlPath);
});

app.listen(1337);
