import {Component} from 'angular2/core';
import {WeatherListComponent} from "./meteo/weather-list.component";
import {WeatherSearchComponent} from "./meteo/weather-search.component";
import {SidebarComponent} from "./sidebar.component";

@Component({
    selector: 'my-app',
    template: `




<div class="main-container">
    <sidebar></sidebar>
     <weather-list></weather-list>
</div>

   
    <footer></footer>
    `,
  directives: [WeatherListComponent,  SidebarComponent]
})
export class AppComponent {

}
