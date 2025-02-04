import {Component} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "../../types";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  private _employees$: Observable<Employee[]>;
  showEditComponent: boolean = false;
  showDetailEmployee: boolean = false;
  showCreateNewEmployee: boolean = false;
  /**
   * This is used to transfer the id to the other components
   *
   * And we are bypassing the Observable<Employee>, because tbh they suck --Tim
   */
  employeeId!: number;

  constructor(private http: HttpClient) {
    this._employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this._employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  hideShowDetailEmployee() {
    this.showDetailEmployee = false;
  }

  hideCreateNewEmployee() {
    this.showCreateNewEmployee = false;
  }

  toggleFromViewToEdit(id:number) {
    this.employeeId = id;
    this.showDetailEmployee = false;
    this.showEditComponent = true;
  }

  displayEmployeeDetails(id: number) {
    this.showDetailEmployee = false;
    setTimeout(() => {
      this.showDetailEmployee = true;
    });
    this.employeeId = id;
  }

  get employees$(): Observable<Employee[]> {
    return this._employees$;
  }
}
