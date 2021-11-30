import axios from "axios";
export default axios.create({
    baseURL: 'https://covid-19-data.p.rapidapi.com/report/country/name',
    
    
  headers: {
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': '479666c791msh71a3e544e75d114p19dca1jsn7ab7f9beb7b1'
  }
})