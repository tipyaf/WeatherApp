import {Injectable} from "angular2/src/core/di/decorators";
import {WEATHER_ITEMS} from "./weather.data";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import 'rxjs/Rx'
import {WeatherItem} from "./weather";
@Injectable()
 export class WeatherService {
  apiKey = '&APPID=bf24d4ebdd1fd36ff8a1a73369906a37';
  constructor(private _http: Http){}

    getWeatherItems(){
      return WEATHER_ITEMS;
    }
    addWeatherItem(weatherItem: WeatherItem){
      WEATHER_ITEMS.push(weatherItem);
      console.log(WEATHER_ITEMS, 'ITEMS');
    }
    clearWeatherItems() {
      WEATHER_ITEMS.splice(0);
    }
    clearAllWeatherItems() {
      while (WEATHER_ITEMS.length > 0 ){
        WEATHER_ITEMS.pop()
      }
    }


    searchWeatherData(cityName: string): Observable<any>{
        return this._http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&units=metric&cnt=7' + this.apiKey)
          .map(function (response) {
            console.info(response.json(), 'data');
             return response.json()
          })
          .catch(error => {
            console.error(error, 'données météo non reçues');
            return Observable.throw(error.json())
          })

    }
    searchForecastData(cityName: string): Observable<any>{
      console.info(cityName, 'request forecast');
      return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ cityName + this.apiKey)
        .map(function (data) {
          console.info(data.json() , 'forecastData');
          return data.json()
        })
        .catch(error => {
          console.error(error,  'forecast non reçu');
          return Observable.throw(error.json())
        })

    }

}
