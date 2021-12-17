import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Employee } from "./employee.model";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    employeesChanged = new Subject<Employee[]>();
    private employees: Employee[] = [];
    // private employees: Employee[] = [
    //     new Employee(741569, 
    //         'Matthew Murdock', 
    //         'Hard working!', 
    //         'https://tse2.mm.bing.net/th?id=OIP.gWjXX5DUCl1PDAU9uI0a2QHaJ5&pid=Api&P=0&w=300&h=300', 
    //         32,
    //         'male',
    //         4),
    //     new Employee(238457, 
    //         'Jim Butler', 
    //         'Lazy!', 
    //         'https://aestheticblasphemy.com/static/media/images/Blasphemous/2017/10/04/overworkkk.jpg', 
    //         30,
    //         'male',
    //         3)
    // ];

    constructor() {}

    setEmployees(employees: Employee[]) {
        this.employees = employees;
        this.employeesChanged.next(this.employees.slice());
    }

    getEmployees() {
        //get copy of hashiras
        return this.employees.slice();
    }

    getEmployee(index: number) {
        return this.employees[index];
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
        this.employeesChanged.next(this.employees.slice());
    }

    updateEmployee(index: number, newEmployee: Employee) {
        this.employees[index] = newEmployee;
        this.employeesChanged.next(this.employees.slice());
    }

    deleteEmployee(index: number) {
        this.employees.splice(index, 1);
        this.employeesChanged.next(this.employees.slice());
    }

}