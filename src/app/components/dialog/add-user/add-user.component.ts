import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { user } from 'src/app/model/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddUserComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  userform!: FormGroup;
  formdata !: user;
  isEditMode: boolean =false;
  editId!:string;
  ngOnInit(): void {
    this.isEditMode = false;
  
console.log("DATA IN ADD USER COMPONENT--",this.data);

    this.userform = this.fb.group({
      firstname : [''],
      lastname : [''],
      email : [''],
      phone : [''],
      active : [false],
      password : ['']
    });
   
    if(this.data.component == "Edit"){
      this.isEditMode= true;
      this.editId = this.data.showdata.id;
         this.userform.get("firstname")?.setValue(this.data.showdata.firstname); 
         this.userform.get("lastname")?.setValue(this.data.showdata.lastname);
         this.userform.get("email")?.setValue(this.data.showdata.email); 
         this.userform.get("phone")?.setValue(this.data.showdata.phone);
         this.userform.get("active")?.setValue(this.data.showdata.active); 
         this.userform.get("password")?.setValue(this.data.showdata.password);

        

    }
  


  }

  OnSubmit(){

    this.formdata = {
      id : this.isEditMode ? this.editId : this.generateRandomId() ,
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
