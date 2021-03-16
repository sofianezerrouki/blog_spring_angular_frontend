import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { AddPostPayload } from './add-post-pay-load';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm:FormGroup;
  addPostPayLoad:AddPostPayload;
  title = new FormControl('');
  content = new FormControl('');

  constructor(private addPostService:AddPostService,private router:Router) {
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
    
    this.addPostService.addPost(this.addPostPayLoad).subscribe(
      data => {
      this.router.navigateByUrl('/');
    },
     error => {
      console.log('Failure Response');
    });

  }
}
