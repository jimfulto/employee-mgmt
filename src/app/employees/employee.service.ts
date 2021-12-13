import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Employee } from "./employee.model";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    employeesChanged = new Subject<Employee[]>();
    private employees: Employee[] = [
        new Employee(741569, 
            'Matthew Murdock', 
            'Hard working!', 
            'https://tse2.mm.bing.net/th?id=OIP.gWjXX5DUCl1PDAU9uI0a2QHaJ5&pid=Api&P=0&w=300&h=300', 
            32,
            'Male',
            3.8),
        new Employee(238457, 
            'Jim Butler', 
            'Lazy!', 
            'https://aestheticblasphemy.com/static/media/images/Blasphemous/2017/10/04/overworkkk.jpg', 
            30,
            'Male',
            2.6)
    ];

    constructor() {}

    getEmployees() {
        //get copy of hashiras
        return this.employees.slice();
    }

    getEmployee(index: number) {
        return this.employees[index];
    }
}