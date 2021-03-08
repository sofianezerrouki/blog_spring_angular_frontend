import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterPayLoad } from './register-pay-load';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  registerPayLoad: RegisterPayLoad;

  constructor(private formBuilser:FormBuilder) {
    this.formBuilser.group({
      'username':'',
      'email':'',
      'password':'',
      'confirmPassword':''
    });
    this.registerPayLoad={
     "username":"" ,
     "email":"" ,
     "password":"" ,
     "confirmPassword":"" 
    };
   }

  ngOnInit(): void {
  }

  public onSubmit():void{
    this.registerPayLoad.username = this.registerForm.get('username').value;
    this.registerPayLoad.email = this.registerForm.get('email').value;
    this.registerPayLoad.password = this.registerForm.get('password').value;
    this.registerPayLoad.confirmPassword = this.registerForm.get('confirmPassword').value;
  }
}
