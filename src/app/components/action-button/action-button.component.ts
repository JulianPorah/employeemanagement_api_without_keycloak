import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    });
    location.reload()
  }
}
