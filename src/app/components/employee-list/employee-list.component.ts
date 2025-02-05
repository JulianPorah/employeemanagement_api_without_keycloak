import {Component} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "../../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  private _employees$: Observable<Employee[]>;
  showEditComponent: boolean = false;
  showDetailEmployee: boolean = false;

  /**
   * This is used to transfer the id to the other components
   *
   * And we are bypassing the Observable<Employee>, because tbh they suck --Tim
   */
  employeeId!: number;

  constructor(private http: HttpClient, private router: Router) {
    this._employees$ = of([]);
    this.fetchData();
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

  hideShowDetailEmployee() {
    this.showDetailEmployee = false;
  }

  toggleFromViewToEdit(id:number) {
    this.employeeId = id;
    this.showDetailEmployee = false;
    this.showEditComponent = true;
  }

  displayEmployeeDetails(id: number) {
    this.router.navigate(['/show', id]);
  }

  get employees$(): Observable<Employee[]> {
    return this._employees$;
  }

  ngAfterViewInit(): void {
    this.fetchData()
  }
}
