import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../../types";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-detail-employee',
  templateUrl: './show-detail-employee.component.html',
  standalone: true,
  styleUrls: ['./show-detail-employee.component.css']
})
export class ShowDetailEmployeeComponent implements OnInit {
  employeeId!: number;
  employeeFirstname!: string;
  employeeLastname!: string;
  employeeStreet!: string;
  employeePostcode!: string;
  employeeCity!: string;
  employeePhonenumber!: string;

  id!: number;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    let stringID = this.router.url.split('/')[2]
    this.id = parseInt(stringID)
    const employee$ = this.fetchData(this.id)
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

  closeEmployeeDetail(){
    this.router.navigate(['/employees']);
  }

  toEdit() {
    this.router.navigate(['/edit', this.id]);
  }

  fetchData(id: number) {
    return this.http.get<Employee>(`backend/${id}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }
}
