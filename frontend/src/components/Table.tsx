import React from 'react'
import {fetchCryptoData} from '../utils/fetchCryptoData';
import { useSelector, useDispatch } from 'react-redux';
import { updateCryptoInfo } from '../slices/cryptoSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Table = () => {
  
  const dispatch = useDispatch();
  //@ts-ignore
  let cryptoInfo = useSelector((state)=> state.crypto.cryptoInfo)
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

    const intervalId = setInterval(fetchData, 15000);

    return () => clearInterval(intervalId);
  }, [dispatch]);
  return (
      <div className="container mx-auto px-4 m-10">
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200 text-left">
      <thead>
        <tr>
          <th className=" px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
          <th className=" px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price {"($)"}</th>
        </tr>
      </thead>
      <tbody>
        {cryptoInfo.map((cryptoEntry: any)=>{ 
          return (
            <tr className="bg-gray-50">
            <Link to={`/cryptoElement/${cryptoEntry.code}`}><td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-left ">{cryptoEntry.name}</td></Link>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-left">{cryptoEntry.rate}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
  </div>
</div>
  )
}

export default Table
