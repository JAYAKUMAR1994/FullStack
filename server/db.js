// import { MongoClient, ObjectId } from 'mongodb';
const { MongoClient, ObjectId } = require("mongodb");

let database;

async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://vjayakumar661:jaya8807@myapp.eqaklsd.mongodb.net/?retryWrites=true&w=majority');
    database = client.db('library');

    if (!database) {
        console.log('Database not connected');
    }
    console.log('Database connected');
    return database;
}

module.exports={ connectToDatabase, ObjectId };
