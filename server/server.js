const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
// import morgan from 'morgan';
import cors from 'cors';
const handle = app.getRequestHandler();
import allRoutes from './routes/index';

// const options = {
//   ...
// };
const port =process.env.PORT

app.prepare().then(() => {
  const server = express();
  server.use(cors());
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(`${port}`, err => {
    if (err) throw err;
    console.log(`> Ready on Port ${port}`);
  });

server.use('/', allRoutes);

server.use('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Sorry this route does not exist !',
  });
});
});