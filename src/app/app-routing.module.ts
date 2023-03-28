import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Components/Customer/customer/customer.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path : 'dashboard', component : DashboardComponent},
  {path : 'customer', component : CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
