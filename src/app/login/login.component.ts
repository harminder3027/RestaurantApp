import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  success: boolean = false;
  failure: boolean = false;
  userData: any;
  constructor(private service: CommonService) {
    this.user = new FormGroup({
      "username": new FormControl(''),
      "password": new FormControl('')

    })
  }

  ngOnInit(): void {
    
  }

  checkUser() {
    let x = 0;
    this.service.getAllUsers().subscribe((result) => {

      for (let key in result) {
        let userName = this.user.value.username;
        let password = this.user.value["password"];
        if (userName == result[key].username && password == result[key].password) {
          x = 1;
          console.log("USER Logged In");
          this.success = true;
          break;
        }

      }
      if (x == 0) {
        console.log("INVALID USERCREDENTAIls");
        this.failure = true;

      }



    })
    


  }

  closeAlert() {
    this.success = false;
    this.failure = false;
  }

}
