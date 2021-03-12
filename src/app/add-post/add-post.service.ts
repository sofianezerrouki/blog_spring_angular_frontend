import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPostPayLoad } from './add-post-pay-load';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  url="http://localhost:8080/api/posts/";

  constructor(private http:HttpClient) {

  }
  addPost(postPayLoad:AddPostPayLoad){
    return this.http.post(this.url,postPayLoad);
  }

}
