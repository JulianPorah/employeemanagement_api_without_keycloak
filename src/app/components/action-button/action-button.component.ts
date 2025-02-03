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

  @Input() id!:number;
  @Output() toggleFromDetailToEdit = new EventEmitter<string>();

  showModal: boolean = false;
  constructor(private http: HttpClient) {
  }

  disableAndEnableButton() {
    this.showModal = !this.showModal;
  }

  editEmployee() {
    this.toggleFromDetailToEdit.emit();
  }

  async deleteEmployee() {
    await fetch(`http://localhost:8089/employees/${this.id}`, {
      method: "DELETE"
    })
    //GEKAUFT
    location.reload()
  }
}
