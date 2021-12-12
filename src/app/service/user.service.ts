import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseUrl: string = "http://localhost:3000/users";
  addUser(user:user){
   return this.http.post(this.baseUrl,user);
  }

  getAllUsers(){
    return this.http.get(this.baseUrl);
  }

  editUser(user:user)
  {
    console.log("Edit-",user);
    
    return this.http.put(this.baseUrl+"/"+user.id,user);
  }

  deleteUser(id:any){
    return this.http.delete(this.baseUrl+"/"+id);
  }
}

