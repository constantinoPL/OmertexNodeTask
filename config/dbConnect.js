require('dotenv').config();
const mongoose = require('mongoose');

const { DB_URL } = process.env;

const dbConnect = () => {
  try {
    mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.log(`Check DB_URL, or read the error message: \n${err.message}`);
  }

  mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${process.env.DB_URL}`);
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err.message}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(
        'Mongoose default connection disconnected through app termination'
      );
      process.exit(0);
    });
  });
};

module.exports = dbConnect;
