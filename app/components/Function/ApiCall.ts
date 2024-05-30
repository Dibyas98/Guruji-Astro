import axios from "axios";
const options = {
    method: 'GET',
    url: 'https://open-weather13.p.rapidapi.com/city/landon/EN',
    headers: {
      'X-RapidAPI-Key': '00c70e864fmsh295e2826a1bb966p14cb30jsne12f4f59c15c',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };
export async function Apicall(city:string) {
    try {
        // const response = await axios.request(options)
        return response
        
    } catch (error) {
        console.log(error);
        
    }
}

const response = {
    "coord": {
      "lon": 86.5054,
      "lat": 21.0633
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 86.97,
      "feels_like": 99.57,
      "temp_min": 86.97,
      "temp_max": 86.97,
      "pressure": 1001,
      "humidity": 75,
      "sea_level": 1001,
      "grnd_level": 999
    },
    "visibility": 10000,
    "wind": {
      "speed": 11.48,
      "deg": 206,
      "gust": 22.46
    },
    "clouds": {
      "all": 42
    },
    "dt": 1717091878,
    "sys": {
      "country": "IN",
      "sunrise": 1717025543,
      "sunset": 1717073462
    },
    "timezone": 19800,
    "id": 1276325,
    "name": "Bhadrak",
    "cod": 200
  }