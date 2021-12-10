import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { user } from 'src/app/model/user.model';
import { AddUserComponent } from '../dialog/add-user/add-user.component';



const ELEMENT_DATA: user[] = [
  {id: 1, firstname: 'Hydrogen', lastname: '', email: 'H',phone : '',active : false,password:"password"},
  {id: 2, firstname: 'Hydrogen', lastname: '', email: 'H',phone : '',active : false,password:"password"},
  {id: 3, firstname: 'Hydrogen', lastname: '', email: 'H',phone : '',active : false,password:"password"} ,
  {id: 4, firstname: 'Hydrogen', lastname: '', email: 'H',phone : '',active : false,password:"password"}
];
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  constructor(public dialog: MatDialog) { } 
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','phone','active','password'];
  
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }
  onAddUser(){
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
   
  }


