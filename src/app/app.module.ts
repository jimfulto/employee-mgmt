import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeItemComponent } from './employees/employee-list/employee-item/employee-item.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { StarComponent } from '../app/shared/star.component';
import { EmployeesStartComponent } from './employees/employees-start/employees-start.component';
import { EmployeeService } from './employees/employee.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    StarComponent,
    EmployeesStartComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
