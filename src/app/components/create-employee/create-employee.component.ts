import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateEmployee} from "../../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent {

  firstName = '';
  lastName = '';
  phone = '';
  city = '';
  street = '';
  postcode = '';

  get buttonDisabled(): boolean {
    return this.firstName !== "" &&
      this.lastName !== "" &&
      this.phone !== "" &&
      this.city !== "" &&
      this.street !== "" &&
      this.postcode !== ""
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  resetFields(): void {
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.city = '';
    this.street = '';
    this.postcode = '';

    this.changeToHomepage();
  }

  changeToHomepage() {
    this.router.navigate(['/employees']);
  }

  async fetchCreate() {

    const employee: CreateEmployee = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      city: this.city,
      street: this.street,
      postcode: this.postcode,
    };

    if (this.checkEmployeeInputs(employee)) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      this.http.post<CreateEmployee>(
        '/backend',
        {
          firstName: employee.firstName,
          lastName: employee.lastName,
          phone: employee.phone,
          city: employee.city,
          street: employee.street,
          postcode: employee.postcode,
          skillSet: []
        },
        {headers: headers}
      ).subscribe(
        response => {
          console.log('Employee created successfully', response);
        },
        error => {
          console.error('Error creating employee', error);
        }
      );
    }
    this.resetFields()
  }

  checkEmployeeInputs(employeeData: CreateEmployee) {
    const phoneValidation = /^\+?[0-9]{10,}$/;

    if (
      !employeeData.firstName ||
      !employeeData.lastName ||
      !employeeData.phone ||
      !employeeData.city ||
      !employeeData.street ||
      !employeeData.postcode
    ) {
      console.error('Error in creating employee, All fields are required');
      return false;
    }

    if (!phoneValidation.test(employeeData.phone)) {
      console.error('Invalid phone format');
      return false;
    }

    if (employeeData.postcode.length != 5) {
      console.error('Invalid postcode format');
      return false;
    }
    return true;
  }
}
