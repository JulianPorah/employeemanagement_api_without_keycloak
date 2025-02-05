import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "../../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  private _employees$!: Observable<Employee[]>;

  constructor(private http: HttpClient, private router: Router) {
    this.fetchData()
  }

  fetchData() {
    this._employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  showCreateNewEmployee() {
    this.router.navigate(['/create']);
  }

  displayEmployeeDetails(id: number) {
    this.router.navigate(['/show', id]);
  }

  get employees$(): Observable<Employee[]> {
    return this._employees$;
  }
}
