import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema({
  code: { type: String, required: false, unique: true },
  name: { type: String, required: false },
  symbol: { type: String, required: false },
  rate: { type: Number, required: false },
  rank: { type: Number, required: false },
  age: { type: Number, required: false },
  volume: { type: Number, required: false },
  cap: { type: Number, required: false },
  imageLink : { type: String, required: false },
  exchanges: { type: Number, required: false },
  markets: { type: Number, required: false },
  pairs: { type: Number, required: false },
  allTimeHighUSD: { type: Number, required: false },
  circulatingSupply: { type: Number, required: false },
  totalSupply: { type: Number, required: false },
  delta: {type: Object, required: false}

}, {
  timestamps: true,
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

export default Crypto;