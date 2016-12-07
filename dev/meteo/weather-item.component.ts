import {Component, Input} from "angular2/src/core/metadata";
import {WeatherItem} from "./weather";

@Component({
  selector: 'weather-item',
  template: `
        <article class="my-panel">
            <div class="col-1">
                <h3>{{weatherItem.cityName}}</h3>
                <span class="temperature">{{weatherItem.temperature}}°C</span>
            </div>
            <div class="col-3">
            <!--{{weatherItem.description}}-->
                <img src="http://openweathermap.org/img/w/{{weatherItem.icon}}" alt="weatherItem.description">
            </div>
        </article>
`,
  styleUrls: ['src/css/weather-item.css'],
  // inputs: ['weatherItem']
})
export class WeatherItemComponent {
  @Input('item') weatherItem: WeatherItem
}
