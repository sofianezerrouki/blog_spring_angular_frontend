import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddPostService } from '../add-post.service';
import { AddPostPayload } from '../add-post/add-post-pay-load';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  posts:Observable<Array<AddPostPayload>>;

  constructor(private addPostService:AddPostService) { }

  ngOnInit(): void {
    this.posts = this.addPostService.getAllPosts();
  }


}
