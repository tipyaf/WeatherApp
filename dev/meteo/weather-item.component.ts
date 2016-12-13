import {Component, Input} from "angular2/src/core/metadata";
import {WeatherItem} from "./weather";
import {IconsWeather} from "./weather-description.datamap";

@Component({
  selector: 'weather-item',
  template: `
        <article class="my-panel" (click)="isOpen = !isOpen">
            <div class="col-1">
                <h3>{{weatherItem.cityName}}</h3>
                <span class="temperature"><span class="weather-icon celsius" data-icon="'"></span>{{weatherItem.temperature}}<span class="weather-icon celsius" data-icon="*"></span></span>
            </div>
            <div class="col-3" [ngClass]="{'opened': isOpen}">
                <span class="weather-icon weather-today" [attr.data-icon]="iconsDescription(weatherItem.main)"></span>
                  <div class="previsions" [ngClass]="{'opacity': isOpen}">
                    <div class="prevision-box" *ngFor="#day of weatherItem.dayList; #i=index;">
                        <span class="weather-icon" [attr.data-icon]="iconsDescription(day.weather[0].main)" *ngIf="i > 0"></span>
                        <p *ngIf="i > 0">{{day.temp.day}}<span class="weather-icon celsius" data-icon="*"></span></p>
                        <div *ngIf="i > 0">J+{{i+1}}</div>
                  </div>
              
            </div>
            </div>
          
            <!--{{weatherItem.dayList[1].weather[0].description }}-->
        </article>
`,
  styleUrls: ['src/css/weather-item.css'],
  // inputs: ['weatherItem']
})
export class WeatherItemComponent {
  @Input('item') weatherItem: WeatherItem;
  iconWeather = new IconsWeather();

  iconsDescription(key){
    this.iconWeather["Clear sky"] = '1';
    this.iconWeather["Clear"] = '1';
    this.iconWeather["Few clouds"] = 'H';
    this.iconWeather["Scattered clouds"] = 'H';
    // this.iconWeather["Overcast clouds"] = 'Y';
    this.iconWeather["Clouds"] = 'N';
    this.iconWeather["Broken clouds"] = 'N';
    this.iconWeather["Shower rain"] = 'Q';
    // this.iconWeather["light rain"] = 'Q';
    this.iconWeather["Rain"] = 'R';
    this.iconWeather["Thunderstorm"] = 'P';
    this.iconWeather["Snow"] = 'V';
    this.iconWeather["Mist"] = 'M';
      // this.iconWeather["fog"] = 'M';
  return this.iconWeather[key]
  }

}
