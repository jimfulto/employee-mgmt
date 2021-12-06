import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private _listFilter = '';
  filteredEmployees: Employee[] = [];
  employees: Employee[] = [
    new Employee(741569, 
                'Matthew Murdock', 
                'Hard working!', 
                'https://tse2.mm.bing.net/th?id=OIP.gWjXX5DUCl1PDAU9uI0a2QHaJ5&pid=Api&P=0&w=300&h=300', 
                32,
                'male',
                3.8),
    new Employee(238457, 
                'Jim Butler', 
                'Lazy!', 
                'https://aestheticblasphemy.com/static/media/images/Blasphemous/2017/10/04/overworkkk.jpg', 
                30,
                'male',
                2.6)
  ];

  // employees: Employee[] = [
  //   {
  //     id: 741569, 
  //     name:'Matthew Murdock', 
  //     description: 'Hard working!', 
  //     imagePath: 'https://tse2.mm.bing.net/th?id=OIP.gWjXX5DUCl1PDAU9uI0a2QHaJ5&pid=Api&P=0&w=300&h=300', 
  //     age: 32,
  //     gender: 'male',
  //     rating: 3.8
  //   },
  //   {
  //     id: 121354, 
  //     name:'Jim Butler', 
  //     description: 'Lazy!', 
  //     imagePath: 'https://aestheticblasphemy.com/static/media/images/Blasphemous/2017/10/04/overworkkk.jpg', 
  //     age: 30,
  //     gender: 'male',
  //     rating: 2.6
  //   }
  // ]

  constructor() { }

  ngOnInit(): void {
    this.filteredEmployees = this.employees;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEmployees = this.performFilter(value);
  }

  performFilter(filterBy: string): Employee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: Employee) =>
      employee.name.toLocaleLowerCase().includes(filterBy));
  }

}

// constructor(id: number, 
//   name: string, 
//   desc: string, 
//   imagePath: string,
//   age: number,
//   gender: boolean,
//   rating: number) {
//       this.id = id;
//       this.name =name;
//       this.description = desc;
//       this.imagePath = imagePath;
//       this.age = age;
//       this.gender = gender;
//       this.rating = rating;
// }
