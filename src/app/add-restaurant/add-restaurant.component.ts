import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  addRestaurant: FormGroup;
  alert: boolean = false;
  constructor(private service: CommonService) {
  }

  ngOnInit(): void {
    this.addRestaurant = new FormGroup({
      title: new FormControl(''),
      address: new FormControl(''),
      mobile: new FormControl(''),
      emailId: new FormControl('')
    })
    
  }

  createRestaurant() {
    console.log(this.addRestaurant.value);
    console.log("heyya");
    
    this.service.addRestaurant(this.addRestaurant.value).subscribe((result) => {
      this.alert = true;
      console.log("GET DATA FROM SERVICE", result);
      this.addRestaurant.reset({});
    });
   
  }
    closeAlert(){
      this.alert = false;
    }
  

}
