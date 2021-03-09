import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPayLoad } from './register/register-pay-load';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:8080/api/auth";

  constructor(private http : HttpClient) {
   }
   registerd(register:RegisterPayLoad):Observable<any> {
    
    return this.http.post(this.url+"/signup",register);

   }
}
