import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText = 'Initial Text';
  constructor() {
    this.user = new User();
    this.user.name = 'yeshendra';
    this.user.designation = 'technical lead';
    this.user.address = 'Chinhat Lucknow';
    this.user.phone = [
      '9628020816',
      '9611773126'
    ];
  }
}
