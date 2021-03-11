import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterPayLoad } from '../register/register-pay-load';
import { LoginPayLoad } from './login-pay-load';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  loginPayLoad:LoginPayLoad
  constructor(private authService:AuthService) {
    
    this.loginForm = new FormGroup({
      username:
      new FormControl(),
      password:
      new FormControl()
    }); 

    this.loginPayLoad = {

      username:"",
      password:""

    };

   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.loginPayLoad.username = this.loginForm.get("username").value;
    this.loginPayLoad.password = this.loginForm.get("password").value;

    this.authService.login(this.loginPayLoad).subscribe(data=>{
      if(data){
        console.log("login success :)");
      }else{
        console.log("Bad Credential :(");
      }
    }
    );
  }

}
