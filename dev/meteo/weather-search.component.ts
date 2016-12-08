import {Component} from "angular2/src/core/metadata";
import {WeatherService} from "./weather.service"
import {WeatherItem} from "./weather";
import {Subject} from "rxjs/Subject";
import {OnInit} from "angular2/src/core/linker/interfaces";
@Component({
  selector: 'weather-search',
  template: `
    <section class="weather-search">
      <form  #f="ngForm">
      <div class="search-wrapper row">
            <input class="col s10" id="search" ngControl="location" type="text" id="city" (input)="onSearchLocation(input.value, data)" minlength="1" required #input><i class="material-icons col s2" (ngSubmit)="onSubmit(f)">search</i>
            <div class="search-results col s12">{{data.name}}</div>
      </div>
      </form>

    </section>
`,
})
export class WeatherSearchComponent implements OnInit {
  private searchStream = new Subject <string>()
  data: any = {};
  constructor(private _weatherService: WeatherService){}
  onSubmit(form){
      const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp, this.data.weather[0].icon)
      this._weatherService.addWeatherItem(weatherItem)
      console.log(WeatherItem)
  }

  onSearchLocation(cityName: string, data){
    if (cityName != ''){
      console.log('string pleine')
      this.searchStream
        .next(cityName)
    }
  else {
      console.log('string vide')
      data.name = ''
    }

  }
  ngOnInit(){
    this.searchStream
      .debounceTime(150)
      .distinctUntilChanged()
      .switchMap((input:string) => this._weatherService.searchWeatherData(input))
      .subscribe(
            data => this.data = data
          )

  }
}
