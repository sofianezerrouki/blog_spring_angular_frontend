import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from '../add-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router:ActivatedRoute,private postService:AddPostService) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      params['id'];
    }
    );
  }


}
