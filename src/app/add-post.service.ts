import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AddPostPayload } from './add-post/add-post-pay-load';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  baseUrl="http://localhost:8080/api/posts";

  constructor(private http:HttpClient) {

  }
  addPost(postPayLoad:AddPostPayload){
    console.log('start add post '+postPayLoad.content)
    return this.http.post(this.baseUrl,postPayLoad);
  }

  getAllPosts():Observable<Array<AddPostPayload>>{
   
    return this.http.get<Array<AddPostPayload>>(this.baseUrl+"/all");
  
  }

}
