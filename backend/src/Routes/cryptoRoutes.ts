import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config()
//@ts-ignore
const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

connectToDatabase();

router.get('/', (req, res) => {
    res.send('Welcome to the Crypto Data API');
  });

  router.get('/api/updateCryptoDB', async (req, res) => {
    try {
      const db = client.db('cryptoDB');
      const collection = db.collection('cryptos');
      const data = await collection.find({}).toArray();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error });
    }
  });

  export default router;