import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayLoad } from './login/login-pay-load';
import { JwtAuthResponse } from './register-success/jwt-auth-response';
import { RegisterPayLoad } from './register/register-pay-load';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:8080/api/auth/";

  constructor(private http : HttpClient,private localStorageService:LocalStorageService) {
   }
   registerd(register:RegisterPayLoad):Observable<any> {
    return this.http.post(this.url+"signup",register);
   }

   login(register:LoginPayLoad):any{
      return this.http.post<JwtAuthResponse>(this.url+"login",register).pipe(map(data=>{
        this.localStorageService.store("authontificationToken",data.authontificationToken);
        this.localStorageService.store("username",data.username);
      }));
   }
}
