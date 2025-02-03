import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Employee} from "../../types";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
})
export class ActionButtonComponent {

  @Input() someValue!:number; // decorate the property with @Input()
  @Output() showEditComponent = new EventEmitter<string>();

  showModal: boolean = false;
  constructor(private http: HttpClient) {
  }

  disableAndEnableButton() {
    this.showModal = !this.showModal;
  }

  addNewItem() {
    console.log(this.someValue)
    this.showEditComponent.emit();
  }

  async deleteEmployee() {
    await fetch(`http://localhost:8089/employees/${this.someValue}`, {
      method: "DELETE"
    })
    location.reload()
  }
}
