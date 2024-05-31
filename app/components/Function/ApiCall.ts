import axios from "axios";
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
    // const response = await axios.get(`${BASE_URL}weather?lat=21.0633&lon=86.5054&appid=${API_KEY}&units=metric`)
    // console.log(response.data);

    return response

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

const response = {
  "coord": {
    "lon": 86.5054,
    "lat": 21.0633
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 36.44,
    "feels_like": 43.44,
    "temp_min": 36.44,
    "temp_max": 36.44,
    "pressure": 1003,
    "humidity": 50,
    "sea_level": 1003,
    "grnd_level": 1001
  },
  "visibility": 10000,
  "wind": {
    "speed": 6.07,
    "deg": 203,
    "gust": 6.66
  },
  "clouds": {
    "all": 81
  },
  "dt": 1717132594,
  "sys": {
    "country": "IN",
    "sunrise": 1717111935,
    "sunset": 1717159887
  },
  "timezone": 19800,
  "id": 1276325,
  "name": "Bhadrakh",
  "cod": 200
}