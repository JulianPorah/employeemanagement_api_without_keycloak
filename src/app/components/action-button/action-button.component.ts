import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
})
export class ActionButtonComponent {

  @Input() id!:number;

  showModal: boolean = false;
  constructor(private http: HttpClient, private router: Router) {
  }

  disableAndEnableButton() {
    this.showModal = !this.showModal;
  }

  editEmployee() {
    this.router.navigate(['/edit', this.id]);
  }

  async deleteEmployee() {
    this.http.delete(`/backend/${this.id}`)
      .subscribe(() => {
          console.log("deleted");
          location.reload();
        }
      )
  }
}
