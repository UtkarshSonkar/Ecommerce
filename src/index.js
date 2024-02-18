import dotenv from 'dotenv';
import express from 'express';
import dbConnection from './db/index.js';

const app = express();

dotenv.config({
  path: './env',
});

dbConnection();
