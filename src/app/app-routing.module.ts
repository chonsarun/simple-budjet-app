import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirementListComponent } from './requirement-list/requirement-list.component';
import { RequirementFormComponent } from './requirement-form/requirement-form.component';
import { RequirementApprovalComponent } from './requirement-approval/requirement-approval.component';
import { adminGuard } from './auth/admin.guard';

// map URL => Component

const routes: Routes = [
  { path: 'requirement-list', component: RequirementListComponent },
  { path: 'requirement-form', component: RequirementFormComponent },
  { path: 'requirement-form/:id', component: RequirementFormComponent },
  { path: 'requirement-approval', component: RequirementApprovalComponent, canActivate: [adminGuard] },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
