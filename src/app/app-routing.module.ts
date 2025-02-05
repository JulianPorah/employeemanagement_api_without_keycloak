import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {EditEmployeeComponent} from "./components/edit-employee/edit-employee.component";
import {ShowDetailEmployeeComponent} from "./components/show-detail-employee/show-detail-employee.component";

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent},
  { path: 'create', component: CreateEmployeeComponent},
  { path: 'edit/:id', component: EditEmployeeComponent},
  { path: 'show/:id', component: ShowDetailEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
