import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  destroyPlatform,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Observable, of, Subscription, timeout} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "../../types";
import {ShowDetailEmployeeComponent} from "../show-detail-employee/show-detail-employee.component";
import {CreateEmployeeComponent} from "../create-employee/create-employee.component";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent{
  currentValue = "Hey Guys"
  private _employees$: Observable<Employee[]>;
  showEditComponent: boolean = false;
  showDetailEmployee: boolean = false;
  idNumberWips!:number ;
  _assMeASD!: Employee[];
  showModal: boolean = false;

  constructor(private http: HttpClient){
    this._employees$ = of([]);
    this.fetchData();
  }

  switchShowEditValue() {
    this.showEditComponent = !this.showEditComponent
  }

  fetchData() {
    this._employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  disableAndEnableButton() {
    this.showModal = !this.showModal;
  }

  newnewFunction() {
  this.showDetailEmployee = false;
  }

  newFunction(id:number) {
    this.showDetailEmployee =false;
    setTimeout(()=>{
      this.showDetailEmployee = true;
    })
    // I hate angular :)
    this.idNumberWips = id;
  }

  get employees$(): Observable<Employee[]> {
    return this._employees$;
  }
}
