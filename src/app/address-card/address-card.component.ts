import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: User;
  isCollapsed: Boolean = false;
  buttonText = 'Expand';
  constructor() {
   }

  ngOnInit() {
    // this.user = {
    //   name: this.userObj.name,
    //   designation: this.userObj.designation,
    //   age: 29,
    //   address: this.userObj.address,
    //   phone: this.userObj.phone
    // };
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed === false) {
      this.buttonText = 'Expand';
    } else {
      this.buttonText = 'Collapse';
    }
  }

}
