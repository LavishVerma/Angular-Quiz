import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(user:user){
   return this.http.post("http://localhost:3000/users",user);
  }

  getAllUsers(){
    return this.http.get("http://localhost:3000/users");
  }
}

