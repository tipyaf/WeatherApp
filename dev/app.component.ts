import {Component} from 'angular2/core';
import {WeatherListComponent} from "./meteo/weather-list.component";
import {WeatherSearchComponent} from "./meteo/weather-search.component";
import {SidebarComponent} from "./sidebar.component";

@Component({
    selector: 'my-app',
    template: `
<header>
  <div class="title">
    <span><img src="img/umbrella.png" alt="" width="64px"></span>
    <h1>Météo</h1>
  </div>
<weather-search></weather-search>
</header>
<div class="main-container">
    <sidebar></sidebar>
     <weather-list></weather-list>
</div>

   
    <footer></footer>
    `,
  directives: [WeatherListComponent, WeatherSearchComponent, SidebarComponent]
})
export class AppComponent {

}
