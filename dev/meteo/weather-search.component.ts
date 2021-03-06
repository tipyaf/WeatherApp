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
      <div class="search-wrapper">
            <input class="" ngControl="location" type="text" id="city" (input)="onSearchLocation(input.value, data)" minlength="1" required #input>
             <button type="submit" class="waves-effect waves-light btn search-btn" (click)="onSubmit(f); input.value = ''">
             <i class="material-icons">add</i>
             <!--{{data}}-->
             </button>
      </div> 
      </form>
    </section>
`,
})
export class WeatherSearchComponent implements OnInit {
  private searchStream = new Subject <string>();
  data: any = {};
  constructor(private _weatherService: WeatherService){}
  onSubmit(form, input){
      const weatherItem = new WeatherItem(this.data.city.name, this.data.list[0].weather[0].main, this.data.list[0].temp.day, this.data.list);
      this._weatherService.addWeatherItem(weatherItem);
      console.log(input, 'input')
  }



  onSearchLocation(cityName: string, data){
    if (cityName != ''){
      console.log('string pleine');
      this.searchStream
        .next(cityName)
    }
  else {
      console.log('string vide');
      data.name = '';
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
