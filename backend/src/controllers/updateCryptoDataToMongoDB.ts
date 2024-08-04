import axios from 'axios';
import Crypto from '../models/cryptoModel';

const updateCryptoDataToMongoDB = async ()=>{
    try {
        const response = await axios.post('https://api.livecoinwatch.com/coins/list', 
          {
            currency: "USD",
            sort: "rank",
            order: "ascending",
            offset: 0,
            limit: 5,
            meta: true,
          }, {
          headers: {
            'x-api-key': process.env.LIVECOINWATCH_API_KEY,
            'Content-Type': 'application/json'
          }
        });
        response.data.forEach(async (crypto: any)=>{
          const cryptoEntry = {
            code: crypto.code,
            name: crypto.name,
            symbol: crypto.symbol,
            rate: crypto.rate,
            rank: crypto.rank,
            age: crypto.age,
            volume: crypto.volume,
            cap: crypto.cap,
            imageLink : crypto.png32,
            exchanges: crypto.exchanges,
            markets: crypto.markets,
            pairs: crypto.pairs,
            allTimeHighUSD: crypto.allTimeHighUSD,
            circulatingSupply: crypto.circulatingSupply,
            totalSupply: crypto.totalSupply,
            delta: crypto.delta
          }
          if (cryptoEntry) {
            const existingEntry = await Crypto.findOne({ code: cryptoEntry.code });
            if(existingEntry){
                await Crypto.updateOne({ code: cryptoEntry.code }, cryptoEntry);
            }
            else {
                const newCrypto = new Crypto(cryptoEntry);
                await newCrypto.save();
            }
          }
        });
        console.log("cryptoDB updated");
    } catch (error) {
      console.error(error);
    }
}

export default updateCryptoDataToMongoDB;