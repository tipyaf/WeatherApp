import {Component} from 'angular2/core';
import {WeatherListComponent} from "./meteo/weather-list.component";
import {SidebarComponent} from "./sidebar.component";

@Component({
    selector: 'my-app',
    template: `
<div class="main-container">
    <sidebar></sidebar>
     <weather-list></weather-list>
</div>

   
    `,
  directives: [WeatherListComponent,  SidebarComponent]
})
export class AppComponent {

}
