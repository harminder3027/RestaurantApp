import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser: FormGroup;
  alert: boolean = false;
  constructor(private service: CommonService) {
  }

  ngOnInit(): void {
    this.registerUser = new FormGroup({
      "username": new FormControl(''),
      "name": new FormControl(''),
      "password": new FormControl(''),
      "email": new FormControl('')
    })
  }

  registration() {
    console.log(this.registerUser.value);
    this.service.addNewUser(this.registerUser.value).subscribe((result) => {
      this.alert = true;
      this.registerUser.reset({});
      console.log("User Added Succesfully");

    });
  }

}
