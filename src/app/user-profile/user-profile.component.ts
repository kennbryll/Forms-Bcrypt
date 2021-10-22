import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }


  val = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    username: '',
    password: ''
  }

  salt = bcrypt.genSaltSync(10);
  pass = bcrypt.hashSync(this.val.password, this.salt);

  ngOnInit(): void {
  }

  isDisplay = false;
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  onSubmit(v: NgForm) {
    console.log(v.value, v.valid);
    console.log(this.val);


    //delete const if not working

    console.log(this.salt);
    console.log(this.pass);
  }
}