import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Employee } from "./employee.model";
import { EmployeeService } from "./employee.service";

@Injectable({ providedIn: 'root'})
export class EmployeesResolverService implements Resolve<Employee[]> {
    constructor(private dataStorageService: DataStorageService, private employeeService: EmployeeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const employees = this.employeeService.getEmployees();

        if (employees.length === 0) {
            return this.dataStorageService.fetchEmployees();
        } else {
            return employees;
        }
    }
}