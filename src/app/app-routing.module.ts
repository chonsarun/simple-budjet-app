import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirementListComponent } from './requirement-list/requirement-list.component';

//map url => Component
const routes: Routes = [
  { path: 'requirement-list', component: RequirementListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
