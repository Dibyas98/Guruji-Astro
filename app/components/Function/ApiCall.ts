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
    const response1 = await axios.get(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`)
    const response2 = await axios.get(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`)
    
       const data={
        curr:response1.data,
        forcast:response2.data
      }
   return data

  } catch (error) {
    console.log(error);

  }
}


const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
  params: {
    namePrefix: 'bhadra'
  },
  headers: {
    // 'X-RapidAPI-Key': '00c70e864fmsh295e2826a1bb966p14cb30jsne12f4f59c15c',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

export async function SearchApi() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

