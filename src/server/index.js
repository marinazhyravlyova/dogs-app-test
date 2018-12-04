import path from 'path';
import express from 'express';
import ssrMiddleware from './ssr';

const app = express();
const port = process.env.PORT || 8081;

app.get('/*', ssrMiddleware());
app.get('/client*', (req, res) => res.sendFile(path.resolve(__dirname, '../../dist/client.bundle.js')));
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, '../../dist/index.html')));

app.listen(port);

console.log('Server running of port:', port);

export default app;
