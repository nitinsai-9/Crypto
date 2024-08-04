import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import router from './Routes/cryptoRoutes';
import updateCryptoDataToMongoDB from "./controllers/updateCryptoDataToMongoDB";
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
connectDB();

app.use('/', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  setInterval(()=>{
    updateCryptoDataToMongoDB();
  }, 15000);
});
