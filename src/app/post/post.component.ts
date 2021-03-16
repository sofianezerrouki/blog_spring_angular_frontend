import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { AddPostPayload } from '../add-post/add-post-pay-load';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  permaLink:number;
  post:AddPostPayload;

  constructor(private router:ActivatedRoute,private postService:AddPostService) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.permaLink= params['id'];
    }
    );
    this.postService.getPost(this.permaLink).subscribe( (data:AddPostPayload) =>{
      
      this.post = data

    },(error:any)=>{
      console.log('Post wwith id '+this.permaLink+" Not found :(")
    });
  }


}
