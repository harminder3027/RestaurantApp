import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  public data: any;
  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.commonService.listAllRestaurants().subscribe((result) => {
      this.data = result;
      console.log(this.data);
    });
    
  }

  deleteById(id) {
    this.commonService.deleteById(id).subscribe((result) => {
      console.log("deleted", id);
    })
  }
}
