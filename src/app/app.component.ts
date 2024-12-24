import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: any;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('Pavan Nagadiya', Validators.required),
        email: new FormControl('nagadiyap@gmail.com', [
          Validators.required,
          Validators.email,
        ]),
      }),
      gender: new FormControl('male'),
      mobilenos: new FormArray([new FormControl()]),
    });
  }
  deletemobNo(index: number) {
    this.signupForm.get('mobilenos').removeAt(index);
  }
  addmobileno() {
    this.signupForm.get('mobilenos').push(new FormControl());
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
