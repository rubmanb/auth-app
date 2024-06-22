import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadLayoutComponent } from './layout/dashboad-layout/dashboad-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboadLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
