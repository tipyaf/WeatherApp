import {Component} from "angular2/src/core/metadata";
@Component({
  selector: 'sidebar',
  template: `
    <h3>Enregistrement de profiles</h3>
    <button (click)="onSaveNew()">Enregistrer</button>
    <article>
    <h4>Profile Name</h4>
    <p>Villes: NY, Berlin, Montpellier</p>
    <span class="delete" (click)="onDeleteProfile($event)">X</span>
</article>
`
})
export class SidebarComponent{

}
