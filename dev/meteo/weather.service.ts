import {Injectable} from "angular2/src/core/di/decorators";
import {WEATHER_ITEMS} from "./weather.data";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import 'rxjs/Rx'
import {WeatherItem} from "./weather";
@Injectable()
export class WeatherService {
  constructor(private _http: Http){}

    getWeatherItems(){
      return WEATHER_ITEMS;
    }
    addWeatherItem(weatherItem: WeatherItem){
      WEATHER_ITEMS.push(weatherItem)
    }
    clearWeatherItems() {
      WEATHER_ITEMS.splice(0);
    }
    searchWeatherData(cityName: string): Observable<any>{
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=bf24d4ebdd1fd36ff8a1a73369906a37&units=metric')
          .map(response => response.json())
          .catch(error => {
            console.error('error', 'données météo non reçues')
            return Observable.throw(error.json())
          })
    }
}
