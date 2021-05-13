import http from 'axios';
import Config from '../utils/config';

export default class CountriesService{
  static getCountriesByName = async (countryName, region) => {
    let response = { status: true };
    const urlBack = await Config.getUrlBack();
    console.log(`urlBack`, urlBack)
    await http.get(`${urlBack}/getCountriesByName?countryName=${countryName}&region=${region}`)
      .then(res => {
        response.data = res.data;
      })
      .catch(error => {
        response.status = false;
      });
    return response;
  }
}