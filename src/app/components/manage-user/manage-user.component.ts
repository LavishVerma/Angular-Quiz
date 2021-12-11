import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
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

  constructor(public dialog: MatDialog,private userService:UserService) { } 
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','phone','active','password'];
  
  dataSource = ELEMENT_DATA;
  userData!: user;

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res:any)=>{
    this.dataSource = res;
    });
  }
  
  onAddUser(){
    const dialogRef = this.dialog.open(AddUserComponent,{
      width : "50%"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.userData = dialogRef.componentInstance.data;
        this.userService.addUser(this.userData).subscribe((res:any)=>{
          
          console.log("Response is received!!",res);
          if(res)
          this.ngOnInit();
  
        });
      }
      
    });

    
    

    
  }
   
  }


