import axios from 'axios';

export async function fetchCryptoData() {
  try{
    const response = await axios.get(`http://localhost:5000/api/updateCryptoDB`);
  return response.data;
  }
  catch (error){
    return error;
  }
}