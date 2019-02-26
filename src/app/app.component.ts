import { Component, OnInit } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  inputText = 'Initial Text';
  constructor(private svc: TestService, private http: HttpClient) {
    this.user = new User();
    this.user.name = 'yeshendra';
    this.user.designation = 'technical lead';
    this.user.address = 'Chinhat Lucknow';
    this.user.phone = [
      '9628020816',
      '9611773126'
    ];
    svc.printToConsole('Got the service');
  }
  ngOnInit() {
   let obs =  this.http.get('https://api.github.com/users/koushikkothagal');
   obs.subscribe((response) => console.log( response));
  }
}
