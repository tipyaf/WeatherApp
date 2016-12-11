import {Component, Input} from "angular2/src/core/metadata";
import {WeatherItem} from "./weather";
import {IconsWeather} from "./weather-description.datamap";

@Component({
  selector: 'weather-item',
  template: `
        <article class="my-panel">
            <div class="col-1">
                <h3>{{weatherItem.cityName}}</h3>
                <span class="temperature">{{weatherItem.temperature}}<span class="weather-icon celsius" data-icon="*"></span></span>
            </div>
            <div class="col-3">
              <span class="weather-icon" [attr.data-icon]="iconsDescription(weatherItem.description)"></span>
            </div>
        </article>
`,
  styleUrls: ['src/css/weather-item.css'],
  // inputs: ['weatherItem']
})
export class WeatherItemComponent {
  @Input('item') weatherItem: WeatherItem;
  iconWeather = new IconsWeather();


  iconsDescription(key){
    this.iconWeather["clear sky"] = 'B';
    this.iconWeather["few clouds"] = 'A';
    this.iconWeather["scattered clouds"] = 'H';
    this.iconWeather["broken clouds"] = 'N';
    this.iconWeather["shower rain"] = 'Q';
    this.iconWeather["rain"] = 'R';
    this.iconWeather["thunderstorm"] = 'P';
    this.iconWeather["snow"] = 'V';
    this.iconWeather["mist"] = 'M';
    this.iconWeather["fog"] = 'M';
  return this.iconWeather[key]
  }



}
