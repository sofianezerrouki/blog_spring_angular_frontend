import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterPayLoad } from './register-pay-load';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  registerPayLoad: RegisterPayLoad;
  
  msg: string;

  constructor(private formBuilser:FormBuilder,private authService:AuthService,private router:Router) {

    this.registerForm = this.formBuilser.group({
      username:'',
      email:'',
      password:'',
      confirmPassword:''
    });
    this.registerPayLoad={
      username:'',
      email:'',
      password:'',
      confirmPassword:'' 
    };
   }

  ngOnInit(): void {
  }

  public onSubmit():void{
    this.registerPayLoad.username = this.registerForm.get('username').value;
    this.registerPayLoad.email = this.registerForm.get('email').value;
    this.registerPayLoad.password = this.registerForm.get('password').value;
    this.registerPayLoad.confirmPassword = this.registerForm.get('confirmPassword').value;

    this.authService.registerd(this.registerPayLoad).subscribe(
      data=>
      {
        console.log('register success');
        this.router.navigateByUrl('/register-success')
      },
      error=>
      {
        console.log('register Faild');
        this.msg ="Register Faild";
      }
      );
  }
}
