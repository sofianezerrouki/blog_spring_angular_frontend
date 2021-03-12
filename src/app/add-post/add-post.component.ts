import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddPostPayLoad } from './add-post-pay-load';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm:FormGroup;
  addPostPayLoad:AddPostPayLoad;
  title = new FormControl();
  content = new FormControl();

  constructor() {
    this.addPostForm = new FormGroup({
      title : this.title,
      content : this.content
    });
    this.addPostPayLoad = {
      id:"",
      title:"",
      content:"",
      username:""
    }

   }

  ngOnInit(): void {
  }

  addPost(){
    this.addPostPayLoad.title = this.addPostForm.get("title").value;
    this.addPostPayLoad.content = this.addPostForm.get("content").value;

    
  }
}
