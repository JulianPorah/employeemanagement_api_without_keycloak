import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../../types";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-show-detail-employee',
  templateUrl: './show-detail-employee.component.html',
  standalone: true,
  styleUrls: ['./show-detail-employee.component.css']
})
export class ShowDetailEmployeeComponent {
  employeeId!: number;
  employeeFirstname!: string;
  employeeLastname!: string;
  employeeStreet!: string;
  employeePostcode!: string;
  employeeCity!: string;
  employeePhonenumber!: string;

  employee$: Observable<Employee>;

  constructor(private http: HttpClient) {
    this.employee$ = this.fetchData(1);
    this.employee$.subscribe((employee: Employee) => {
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
}
