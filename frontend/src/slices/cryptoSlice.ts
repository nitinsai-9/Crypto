import {createSlice } from '@reduxjs/toolkit';

const cryptoSlice = createSlice({
    name : 'crypto',
    initialState : {
        //    cryptoInfo : [
        //     {
        //         "_id": "66ae51481956455009bf2bc5",
        //         "code": "BTC",
        //         "name": "Bitcoin",
        //         "symbol": "₿",
        //         "rate": 61051.61766413072,
        //         "rank": 1,
        //         "age": 5691,
        //         "volume": 27238960237,
        //         "cap": 1204856299821,
        //         "imageLink": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png",
        //         "exchanges": 186,
        //         "markets": 2687,
        //         "pairs": 815,
        //         "allTimeHighUSD": 73781.24185982272,
        //         "circulatingSupply": 19735043,
        //         "totalSupply": 19735043,
        //         "delta": {
        //             "hour": 0.9836,
        //             "day": 0.9628,
        //             "week": 0.8862,
        //             "month": 1.0508,
        //             "quarter": 0.9454,
        //             "year": 2.0878
        //         },
        //         "createdAt": "2024-08-03T15:48:24.234Z",
        //         "updatedAt": "2024-08-03T16:03:52.295Z",
        //         "__v": 0
        //     },
        //     {
        //         "_id": "66ae51481956455009bf2bc8",
        //         "code": "BNB",
        //         "name": "BNB",
        //         "rate": 535.0408067879948,
        //         "rank": 4,
        //         "age": 2565,
        //         "volume": 1016681472,
        //         "cap": 79683751484,
        //         "imageLink": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/bnb.png",
        //         "exchanges": 125,
        //         "markets": 3739,
        //         "pairs": 2836,
        //         "allTimeHighUSD": 719.9338032081794,
        //         "circulatingSupply": 148930232,
        //         "totalSupply": 148930232,
        //         "delta": {
        //             "hour": 0.9789,
        //             "day": 0.9634,
        //             "week": 0.9118,
        //             "month": 1.0222,
        //             "quarter": 0.9003,
        //             "year": 2.1959
        //         },
        //         "createdAt": "2024-08-03T15:48:24.249Z",
        //         "updatedAt": "2024-08-03T16:03:52.297Z",
        //         "__v": 0
        //     },
        //     {
        //         "_id": "66ae51481956455009bf2bc6",
        //         "code": "ETH",
        //         "name": "Ethereum",
        //         "symbol": "Ξ",
        //         "rate": 2945.01851967947,
        //         "rank": 2,
        //         "age": 3283,
        //         "volume": 15131639020,
        //         "cap": 347571171098,
        //         "imageLink": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/eth.png",
        //         "exchanges": 335,
        //         "markets": 6362,
        //         "pairs": 3657,
        //         "allTimeHighUSD": 4861.28870081089,
        //         "circulatingSupply": 118020029,
        //         "totalSupply": 118020029,
        //         "delta": {
        //             "hour": 0.9806,
        //             "day": 0.97,
        //             "week": 0.897,
        //             "month": 0.9388,
        //             "quarter": 0.9305,
        //             "year": 1.5946
        //         },
        //         "createdAt": "2024-08-03T15:48:24.255Z",
        //         "updatedAt": "2024-08-03T16:03:52.299Z",
        //         "__v": 0
        //     },
        //     {
        //         "_id": "66ae51481956455009bf2bc7",
        //         "code": "USDT",
        //         "name": "Tether",
        //         "rate": 1.0019309901546836,
        //         "rank": 3,
        //         "age": 3446,
        //         "volume": 51083336461,
        //         "cap": 114763847062,
        //         "imageLink": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/usdt.png",
        //         "exchanges": 320,
        //         "markets": 18716,
        //         "pairs": 4934,
        //         "allTimeHighUSD": 1.08372533074166,
        //         "circulatingSupply": 114542666302,
        //         "totalSupply": 114542666302,
        //         "delta": {
        //             "hour": 1,
        //             "day": 1.0076,
        //             "week": 1.0008,
        //             "month": 1.0025,
        //             "quarter": 1.0011,
        //             "year": 1.0059
        //         },
        //         "createdAt": "2024-08-03T15:48:24.266Z",
        //         "updatedAt": "2024-08-03T16:03:52.301Z",
        //         "__v": 0
        //     },
        //     {
        //         "_id": "66ae51481956455009bf2bc9",
        //         "code": "SOL",
        //         "name": "Solana",
        //         "rate": 146.59822104529096,
        //         "rank": 5,
        //         "age": 1574,
        //         "volume": 4987016690,
        //         "cap": 68224915826,
        //         "imageLink": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/sol.png",
        //         "exchanges": 94,
        //         "markets": 1913,
        //         "pairs": 1337,
        //         "allTimeHighUSD": 259.8360337991446,
        //         "circulatingSupply": 465387065,
        //         "totalSupply": 581499688,
        //         "delta": {
        //             "hour": 0.9671,
        //             "day": 0.9394,
        //             "week": 0.8024,
        //             "month": 1.0841,
        //             "quarter": 0.9943,
        //             "year": 6.3076
        //         },
        //         "createdAt": "2024-08-03T15:48:24.270Z",
        //         "updatedAt": "2024-08-03T16:03:52.293Z",
        //         "__v": 0
        //     }
        // ]
        cryptoInfo:[]
    },
    reducers :{
            updateCryptoInfo(state, action){
                state.cryptoInfo =  action.payload
            }
    }
});

export const {updateCryptoInfo} = cryptoSlice.actions;

export default cryptoSlice.reducer;