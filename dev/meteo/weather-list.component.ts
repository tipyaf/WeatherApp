import {Component} from "angular2/src/core/metadata";
import {WeatherItemComponent} from "./weather-item.component"
import {WeatherItem} from "./weather";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {WeatherService} from "./weather.service";
@Component({
  selector: 'weather-list',
  template: `
    <section class="weather-list">
      <weather-item *ngFor="#weatherItem of weatherItems" [item]="weatherItem"></weather-item>
    </section>
`,
  directives:[WeatherItemComponent],
  providers:[WeatherService]
})
export class WeatherListComponent implements OnInit{
    weatherItems: WeatherItem[];
  constructor(private _weatherService: WeatherService){}

  ngOnInit():any{
    this.weatherItems = this._weatherService.getWeatherItems();
  }

}
