import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id: number;
  genders = ['male', 'female'];
  employeeEditForm: FormGroup;
  editMode = false;


  constructor(private route: ActivatedRoute, 
              private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.employeeEditForm);
    if(this.editMode) {
      this.employeeService.updateEmployee(this.id, this.employeeEditForm.value);
    } else {
      this.employeeService.addEmployee(this.employeeEditForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let employeeId = null;
    let employeeName = '';
    let employeeImagePath = '';
    let employeeDescription = '';
    let employeeAge = null;
    let employeeRating = null;
    let employeeGender = 'male';

    if(this.editMode) {
      const employee = this.employeeService.getEmployee(this.id);
      employeeId = employee.id;
      employeeName = employee.name;
      employeeImagePath = employee.imagePath;
      employeeDescription = employee.description;
      employeeAge = employee.age;
      employeeRating = employee.rating;
      employeeGender = employee.gender;
    }

    this.employeeEditForm = new FormGroup({
      'id': new FormControl(employeeId, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'name': new FormControl(employeeName, [Validators.required]),
      'imagePath': new FormControl(employeeImagePath, [Validators.required]),
      'description': new FormControl(employeeDescription, [Validators.required]),
      'age': new FormControl(employeeAge, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'rating': new FormControl(employeeRating, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'gender': new FormControl(employeeGender, [Validators.required])
    })
  }

}
