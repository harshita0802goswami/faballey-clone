const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

mongoose.set('strictQuery', false);

const Connection = () => {

    const MONGODB_URI = process.env.MONGODB_URI

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ');
    })
}

module.exports = Connection;