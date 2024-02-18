//connect to darabase with error handling

import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    );
    console.log(
      `\n Mongodb connected !! DB host:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log('Failed to connect database', error);
    process.exit(1);
  }
};

export default dbConnection;
