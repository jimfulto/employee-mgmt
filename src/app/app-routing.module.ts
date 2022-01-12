import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeesResolverService } from './employees/employees-resolver.service';
import { EmployeesStartComponent } from './employees/employees-start/employees-start.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: EmployeesStartComponent },
      { path: 'new', component: EmployeeEditComponent },
      { path: ':id', component: EmployeeDetailComponent, resolve: [EmployeesResolverService] },
      { path: ':id/edit', component: EmployeeEditComponent, resolve: [EmployeesResolverService] }
    ] },
    { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
