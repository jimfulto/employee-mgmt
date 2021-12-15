import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;
  id: number;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.employee = this.employeeService.getEmployee(this.id);
        });
  }

  onEditEmployee() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteEmployee() {
    this.employeeService.deleteEmployee(this.id);
    this.router.navigate(['/employees']);
  }

}
