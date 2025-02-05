import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ActionButtonComponent} from './components/action-button/action-button.component';
import {ShowDetailEmployeeComponent} from "./components/show-detail-employee/show-detail-employee.component";
import {AppRoutingModule} from './app-routing.module';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EditEmployeeComponent} from './components/edit-employee/edit-employee.component';
import {CreateEmployeeComponent} from './components/create-employee/create-employee.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    ActionButtonComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShowDetailEmployeeComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
