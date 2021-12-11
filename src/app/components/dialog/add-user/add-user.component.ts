import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { user } from 'src/app/model/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddUserComponent>) { }

  userform!: FormGroup;
  data !: user;
  ngOnInit(): void {
  
    this.userform = this.fb.group({
      firstname : [''],
      lastname : [''],
      email : [''],
      phone : [''],
      active : [false],
      password : ['']
    });
  }

  OnSubmit(){

    this.data = {
      id : this.generateRandomId() ,
      firstname : this.getValue("firstname"),
      lastname : this.getValue("lastname"),
      email : this.getValue("email"),
      phone : this.getValue("phone"),
      active : this.getValue("active"),
      password : this.getValue("password")
    };    

  }

  getValue(value:any){
    return this.userform.get(value)?.value;
  }
  
  generateRandomId(){
    return Math.random().toString(36).substr(2, 5);//36 is base and 5 is length.
  }


}
