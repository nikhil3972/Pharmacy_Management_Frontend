import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Components/Customer/customer/customer.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { DiseaseComponent } from './Components/disease/disease.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { ProcureComponent } from './Components/Procuree/procure/procure.component';
import { SalesComponent } from './Components/Sales/sales.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'customer', component : CustomerComponent},
  {path: 'procure', component:ProcureComponent},
  {path: 'disease', component:DiseaseComponent},
  {path: 'selling-system', component: SalesComponent},
  {path: 'disease', component:DiseaseComponent},
  {path: 'selling-system', component: SalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
