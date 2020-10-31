import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import {  ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert: boolean = false;
  updateResto: FormGroup;
  constructor(private service: CommonService, private router: ActivatedRoute) {
    this.updateResto = new FormGroup({
      title: new FormControl(''),
      address: new FormControl(''),
      mobile: new FormControl(''),
      emailId: new FormControl('')
    })
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.service.getRestaurantById(this.router.snapshot.params.id).subscribe((result) => {
      this.updateResto = new FormGroup({
        title: new FormControl(result["title"]),
        address: new FormControl(result["address"]),
        mobile: new FormControl(result["mobile"]),
        emailId: new FormControl(result["emailId"])
      })
      
      console.log("Heyaaa");
    })
    
    
  }
  updateRestaurant() {
    this.service.updateRestaurant(this.router.snapshot.params.id, this.updateResto.value).subscribe((result) => {
      this.alert = true;
      this.updateResto.reset({});
   
    })
    
 
  }

  closeAlert() {
    this.alert = false;
  }


}
