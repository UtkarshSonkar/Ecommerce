import dotenv from 'dotenv';
import dbConnection from './db/index.js';
import app from './app.js';

dotenv.config({
  path: './env',
});

const PORT = process.env.PORT || 3000;
// dbConnection is an async function i.e returns promise
dbConnection()
  .then(() => {
    app.on('error', (error) => {
      console.log(`error occured before server running`, error);
      throw error;
    }),
      app.listen(PORT, () => {
        console.log(`Server is up and running on ${PORT} port`);
      });
  })
  .catch((error) => {
    console.log('DB connection failed', error);
  });
