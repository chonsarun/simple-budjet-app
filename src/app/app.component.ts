import { Component } from '@angular/core';
import { RequirementListComponent } from './requirement-list/requirement-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-budget-app';

  constructor() {
  }

}
