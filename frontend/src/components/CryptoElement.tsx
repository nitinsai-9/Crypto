import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateCryptoInfo } from '../slices/cryptoSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCryptoData } from '../utils/fetchCryptoData';

const CryptoElement = () => {
    const {cryptoCode}=useParams()
    const dispatch = useDispatch();
    //@ts-ignore
    let cryptoInfo = useSelector((state)=> state.crypto.cryptoInfo);
    //@ts-ignore
    let ElementInfo = cryptoInfo?.find(cryptoElement => cryptoElement.code === cryptoCode);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchCryptoData();
            console.log(data);
            dispatch(updateCryptoInfo(data));
          } catch (error) {
            console.error('Error fetching crypto data:', error);
          }
        };
    
        fetchData();
        //@ts-ignore
        ElementInfo = cryptoInfo?.find(cryptoElement => cryptoElement.code === cryptoCode);
    
        const intervalId = setInterval(fetchData, 15000);
    
        return () => clearInterval(intervalId);
      }, [dispatch]);
 
  function formatNumber(num: number) {
    if (num >= 1e12) {
      return (num / 1e12).toFixed(2) + 'T';
    } else if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + 'M';
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2) + 'K';
    } else {
      return num.toString();
    }
  }
    return (
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">{ElementInfo?.name}</h1>
                <div className="flex items-center space-x-2">
                  <img src={ElementInfo?.imageLink}></img>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h2 className="text-4xl font-bold">${ElementInfo?.rate}</h2>
                  <p className="text-sm">1.00000000 {ElementInfo?.code}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg">Market Cap: ${formatNumber(ElementInfo?.cap)}</p>
                  <p className="text-lg">Volume: ${formatNumber(ElementInfo?.volume)} </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-4">
                <div>
                  <h3 className="text-sm font-bold">1H USD</h3>
                  <p className="text-green-500">{ElementInfo?.delta.hour.toFixed(2)}%▲</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">24H USD</h3>
                  <p className="text-red-500">{ElementInfo?.delta.day.toFixed(2)}%▼</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">7D USD</h3>
                  <p className="text-red-500">{ElementInfo?.delta.week.toFixed(2)}%▼</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">30D USD</h3>
                  <p className="text-green-500">{ElementInfo?.delta.month.toFixed(2)}%▲</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-4">
                <div>
                  <h3 className="text-sm font-bold">90D USD</h3>
                  <p className="text-red-500">{ElementInfo?.delta.quarter.toFixed(2)}%▼</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">1Y USD</h3>
                  <p className="text-green-500">{ElementInfo?.delta.year.toFixed(2)}%▲</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">Circ. Supply</h3>
                  <p>{formatNumber(ElementInfo?.circulatingSupply)} </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">Total Supply</h3>
                  <p>{formatNumber(ElementInfo?.totalSupply)}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-4">
                <div>
                  <h3 className="text-sm font-bold">Max Supply</h3>
                  <p>{formatNumber(ElementInfo?.totalSupply)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">Total Cap</h3>
                  <p>{formatNumber(ElementInfo?.cap)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">24 HR Range</h3>
                  <p>4.59%</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">24 HR Low</h3>
                  <p>{formatNumber(Number((ElementInfo?.rate*98/100).toFixed(2)))}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <h3 className="text-sm font-bold">Exchanges</h3>
                  <p>{ElementInfo?.exchanges}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">Markets</h3>
                  <p>{ElementInfo?.markets}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">Pairs</h3>
                  <p>{ElementInfo?.pairs}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold">Rank</h3>
                  <p>{ElementInfo?.rank}</p>
                </div>
              </div>
            </div>
          </div>
      );
}

export default CryptoElement
