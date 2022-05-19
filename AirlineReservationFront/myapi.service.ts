import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {
  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:8008/Login";
  addNewUser(user: User) {
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}` + '/passanger', user);
  }

}
