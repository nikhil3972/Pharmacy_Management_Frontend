import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './Components/Customer/customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { ProcureComponent } from './Components/Procuree/procure/procure.component';
import { DiseaseComponent } from './Components/disease/disease.component';
import { SalesComponent } from './Components/Sales/sales.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CustomerComponent,
    ProcureComponent,
    DiseaseComponent,
    SalesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
