import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { AddUserComponent } from '../dialog/add-user/add-user.component';
import { DeleteUserComponent } from '../dialog/delete-user/delete-user.component';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  constructor(public dialog: MatDialog,private userService:UserService) { } 
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','phone','active','password','actions'];
  
  dataSource!: user[];
  userData!: user;

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res:any)=>{
    this.dataSource = res;
    });
  }
  
  onAddUser(){
    const dialogRef = this.dialog.open(AddUserComponent,{
      width : "50%",
      data : {
        component: "Add",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.userData = dialogRef.componentInstance.formdata;
        this.userService.addUser(this.userData).subscribe((res:any)=>{
          
          console.log("Response is received!!",res);
          if(res)
          this.ngOnInit();
  
        });
      }
      
    });

    
    

    
  }
  onEditClick(data:user){

    const editdialogRef = this.dialog.open(AddUserComponent,{
      width : "50%",
      data : {
        component: "Edit",
        showdata : data
      },
    });

    editdialogRef.afterClosed().subscribe(result => {
      if(result){
        this.userData = editdialogRef.componentInstance.formdata;
         this.userService.editUser(this.userData).subscribe((res:any)=>{
          
          console.log("Response is received!!",res);
          if(res)
          this.ngOnInit();
  
        });
      }
      
    });


  }
  onDeleteClick(id:any){
    const deleltDialogRef = this.dialog.open(DeleteUserComponent);
    deleltDialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.userService.deleteUser(id).subscribe((res:any)=>{
          if(res){
            this.ngOnInit();
          }
        });
      }
    });

    
    console.log("Delete id -",id);
    
  }
   
  }


