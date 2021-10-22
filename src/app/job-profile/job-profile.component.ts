import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {

  form = this.fb.group({
    companyName: ['', {
      validators: [Validators.required, Validators.minLength(3)],
    }],
    companyAddress: ['', {
      validators: [Validators.required, Validators.minLength(3)],
    }],
    jobTitle: ['', {
      validators: [Validators.required, Validators.minLength(3)],
    }],
    salary: ['', {
      validators: [Validators.required, Validators.minLength(3)],
    }],
    position: ['', {
      validators: [Validators.required, Validators.minLength(3)],
    }],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.controls.companyName.value);
    console.log(this.form.controls.companyAddress.value);
    console.log(this.form.controls.jobTitle.value);
    console.log(this.form.controls.salary.value);
    console.log(this.form.controls.position.value);
  }

  get companyName() {
    return this.form.controls['companyName'];
  }
  get companyAddress() {
    return this.form.controls['companyAddress'];
  }
  get jobTitle() {
    return this.form.controls['jobTitle'];
  }
  get salary() {
    return this.form.controls['salary'];
  }
  get position() {
    return this.form.controls['position'];
  }

  get valid() {
    return this.form.controls;
  }

  isDisplay2 = false;
  toggleDisplay2() {
    this.isDisplay2 = !this.isDisplay2;
  }

}