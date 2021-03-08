import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPayLoad } from './register/register-pay-load';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:8080/";

  constructor(private http : HttpClient,register : RegisterPayLoad) {
    this.http.post(this.url+"auth/",register)

   }
}
