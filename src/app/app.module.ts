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
import { LoginComponent } from './Components/Login/login/login.component';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './Components/Sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CustomerComponent,
    ProcureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
