import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL = "http://localhost:3000/restaurants"
  UserURL = "http://localhost:3000/users"
  result: any;
  constructor(private _http: HttpClient) { }

  listAllRestaurants() {
    console.log("IN SERVICE");
    return this._http.get(this.URL);
  }

  addRestaurant(data) {
    return this._http.post(this.URL, data);
  }

  getRestaurantById(id) {
    console.log(this.URL,id);
    return this._http.get(`${this.URL}/${id}`);
  }

  updateRestaurant(id, data) {
    return this._http.put(`${this.URL}/${id}`, data);
  }

  getAllUsers() {
    return this._http.get(this.UserURL);
  }

  addNewUser(data) {
    return this._http.post(this.UserURL, data);

  }


}
