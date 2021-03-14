import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPostPayload } from './add-post/add-post-pay-load';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  url="http://localhost:8080/api/posts";

  constructor(private http:HttpClient) {

  }
  addPost(postPayLoad:AddPostPayload){
    console.log('start add post '+postPayLoad.content)
    return this.http.post("http://localhost:8080/api/posts",postPayLoad);
  }

}
