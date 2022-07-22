import { Component, OnInit } from '@angular/core';
import { AppData } from './AppData';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { UsersService } from './service/users.service';
import { User } from './models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user_info';
 

  //reactive form to controll fields
  form= new FormGroup({
  EntryNo:new FormControl(''),
  firstName:new FormControl('',[Validators.required]),
  lastName:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  date:new FormControl('',[Validators.required]),
  education:new FormControl('none'),
  preference:new FormControl('none'),
  })
 
  //user object to take data from form and sent to api
 user:User= {
  EntryNo:'',

    Name:'',
 
    LastName :'',

    Email:'',

    BirthDate :new Date(),

    Education: '',

    Preference: '',

 }

  
  save(){
    this.user.Name=this.form.value.firstName;
    this.user.LastName=this.form.value.lastName;
    this.user.Email=this.form.value.email;
    this.user.BirthDate=this.form.value.BirthDate;
    this.user.Education=this.form.value.education;
    this.user.Preference=this.form.value.preference;


    this.usersService.addUser(this.user).subscribe(
      response=>{
        console.log(response);

        alert("Saved.");
        this.form.reset();
      }
    )
    
    
   
  }
  get firstName(){
    return this.form.get('firstName')
  }
  get lastName(){
    return this.form.get('lastName')
  }
  get email(){
    return this.form.get('email')
  }
  get date(){
    return this.form.get('date')
  }


  constructor(private usersService: UsersService){

  }

  //console log all user data on refresh
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.usersService.getAllUsers().subscribe(
      response=>{
        console.log(response);
      }
    );
    
  }


}

export interface UserForRegistrationDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}