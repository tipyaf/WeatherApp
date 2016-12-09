import {Component} from "angular2/src/core/metadata";
import {WeatherItemComponent} from "./weather-item.component"
import {WeatherItem} from "./weather";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {WeatherService} from "./weather.service";
import {WeatherSearchComponent} from "./weather-search.component";
@Component({
  selector: 'weather-list',
  template: `
    <section class="weather-list">
    <weather-search></weather-search>
      <weather-item *ngFor="#weatherItem of weatherItems" [item]="weatherItem"></weather-item>
      <a class="btn-floating btn-large waves-effect waves-light red remove-btn" (click)="onClearAll()"><i class="material-icons">clear</i></a>
    </section>
`,
  styles:[':host{width: 100%}'],
  directives:[WeatherItemComponent, WeatherSearchComponent],
  providers:[WeatherService]
})
export class WeatherListComponent implements OnInit{
    weatherItems: WeatherItem[];
  constructor(private _weatherService: WeatherService){}

  onClearAll(){
      this._weatherService.clearAllWeatherItems();
  }
  ngOnInit():any{
    this.weatherItems = this._weatherService.getWeatherItems();
  }

}
