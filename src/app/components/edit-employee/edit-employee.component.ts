import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "../../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeId!: number;
  employeeFirstname!: string;
  employeeLastname!: string;
  employeeStreet!: string;
  employeePostcode!: string;
  employeeCity!: string;
  employeePhonenumber!: string;

  newId!: number;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    let stringID = this.router.url.split('/')[2]
    this.newId = parseInt(stringID)
    this.fetchData(this.newId)
    const employee$ = this.fetchData(this.newId);
    employee$.subscribe((employee: Employee) => {
      this.employeeId = employee.id;
      this.employeeFirstname = employee.firstName;
      this.employeeLastname = employee.lastName;
      this.employeeStreet = employee.street;
      this.employeePostcode = employee.postcode;
      this.employeeCity = employee.city;
      this.employeePhonenumber = employee.phone;
    });

  }

  fetchData(id: number) {
    return this.http.get<Employee>(`backend/${id}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  updateEmployee() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    this.http.put<Employee>(`backend/${this.employeeId}`,
      {
        firstName: this.employeeFirstname,
        lastName: this.employeeLastname,
        phone: this.employeePhonenumber,
        city: this.employeeCity,
        street: this.employeeStreet,
        postcode: this.employeePostcode
      },
      {headers: headers}
    ).subscribe((employee: Employee) => {
      console.log(employee)
      this.router.navigate(['/employees']);
    });
  }

  cancel() {
    this.router.navigate(['/employees']);
  }
}
