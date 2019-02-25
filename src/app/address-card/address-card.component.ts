import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  constructor() {
    this.user = {
      name: 'Yeshendra',
      age: 29,
      address: 'Chinhat Lucknow',
      phone: [
        9628020816,
        9611773126
      ]
    };
   }

  ngOnInit() {
  }

}
