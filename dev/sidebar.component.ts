import {Component} from "angular2/src/core/metadata";
import {Profile} from "./profile";
import {ProfileService} from "./profile.service";
import {WeatherService} from "./meteo/weather.service";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {WeatherItem} from "./meteo/weather";
@Component({
  selector: 'sidebar',
  template: `
    <div class="sidebar">
    <div class="sidebar-container" [ngClass]="{'none': !sideBarOpen}">
        <h3>Mes villes</h3>
        <button class="waves-effect waves-light btn" (click)="onSaveNew()">Enregistrer</button>
        <article class="my-profile" *ngFor="#profile of profiles" (click)="onLoadProfile(profile)" >
          <h4>{{profile.profileName}}</h4>
          <p>Villes : {{profile.cities.join(', ')}}</p>
          <i class="delete material-icons" (click)="onDeleteProfile($event, profile)">remove</i>
        </article>
    </div>
    </div>
    <div class="icon-settings" (click)="sideBarOpen = !sideBarOpen">
     <i class="material-icons">settings</i>
  </div>


`,
  host: {
    '[class.sidebar-closed]': '!sideBarOpen'
  },

  styleUrls: ['src/css/sidebar.css'],
  providers:[ProfileService],

})
export class SidebarComponent implements OnInit{

  profiles: Profile[];
  constructor(private _profileService: ProfileService, private _weatherService: WeatherService){}
  sideBarOpen: boolean;
  onSaveNew(){
    const cities = this._weatherService.getWeatherItems().map(function (element: WeatherItem) {
      return element.cityName;
    });
    this._profileService.saveNewProfile(cities);
  }
  onLoadProfile(profile: Profile) {
    this._weatherService.clearWeatherItems();
    for (let i = 0; i < profile.cities.length; i++) {
      this._weatherService.searchWeatherData(profile.cities[i])
        .retry()
        .subscribe(
          data => {
            const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp, data.weather[0].icon);
            this._weatherService.addWeatherItem(weatherItem);
          }
        );
    }
  }
  onDeleteProfile(event: Event, profile: Profile){
    event.stopPropagation()
    this._profileService.deleteProfile(profile);
  }
  ngOnInit(){
    this.sideBarOpen = false;
    this.profiles = this._profileService.getProfiles();
  }
}
