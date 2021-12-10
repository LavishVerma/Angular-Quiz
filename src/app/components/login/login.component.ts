import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { loginModel } from 'src/app/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loginform!: FormGroup;
  data !: loginModel;

  ngOnInit(): void {
  
    this.loginform = this.fb.group({
    username : [''],
    password : ['']
  });

  }

  OnSubmit(){
  this.data = {
    username : this.loginform.get("username")?.value,
    password : this.loginform.get("password")?.value
  };

  if(this.data.username == "admin" && this.data.password == "admin"){
    //Redirects to ADMIN portal 
    console.log('Admin portal');
    
  }
    console.log("Data-->",this.data);
   
    
    
  }

}
