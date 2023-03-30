import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Components/Customer/customer/customer.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { ProcureComponent } from './Components/Procuree/procure/procure.component';
import { SalesComponent } from './Components/Sales/sales.component';

const routes: Routes = [
  {path : 'dashboard', component : DashboardComponent},
  {path : 'customer', component : CustomerComponent},
  {path: 'procure', component:ProcureComponent},
  {path: 'selling-system', component: SalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
