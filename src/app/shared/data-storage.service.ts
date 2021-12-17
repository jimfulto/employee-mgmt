import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../employees/employee.model";
import { EmployeeService } from "../employees/employee.service";
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private employeeService: EmployeeService) {}

    storeEmployees() {
        const employees = this.employeeService.getEmployees();
        return this.http.put('https://ng-emmt-default-rtdb.firebaseio.com/employees.json', employees)
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchEmployees() {
        return this.http.get<Employee[]>('https://ng-emmt-default-rtdb.firebaseio.com/employees.json')
            .pipe(
                tap(employees => {
                    this.employeeService.setEmployees(employees);
                })
            )
    }
}