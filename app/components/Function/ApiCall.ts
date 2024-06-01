import axios from "axios";
import { error } from "console";
// const options = {
//     method: 'GET',
//     url: 'https://open-weather13.p.rapidapi.com/city/landon/EN',
//     headers: {
//       'X-RapidAPI-Key': '00c70e864fmsh295e2826a1bb966p14cb30jsne12f4f59c15c',
//       'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//     }
//   };


const BASE_URL = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = `7ac2d2618052cb3478289070ea362a16`
export async function Apicall(city: string) {
  try {
    const response1 = await axios.get(`${BASE_URL}weather?q=${city.toLowerCase()}&appid=${API_KEY}&units=metric`)
    const response2 = await axios.get(`${BASE_URL}forecast?q=${city.toLowerCase()}&appid=${API_KEY}&units=metric`)
    
       const data={
        curr:response1.data,
        forcast:response2.data
      }
   return data


  } catch (error) {
    return error

  }
}


const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
  headers: {
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    'X-RapidAPI-Key': '6a9b1a77b2msh41a05e515a3cd17p14a97ejsn933a71b5d1ff' // Make sure to uncomment and use your actual API key
  }
};

export async function SearchApi(city: string) {
  try {
    if(city){

      const response = await axios.request({
        ...options,
        params: {
          namePrefix: city
        }
      });
      return response.data.data
    }
  } catch (error) {
    console.log(error);
    
  }
}

