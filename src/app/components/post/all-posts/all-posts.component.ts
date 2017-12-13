import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../../models/post.model';
import { RequestService } from '../../../services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  public posts : PostModel[];

  constructor(
    private requestService : RequestService,
    private router: Router
  ) { 
    this.posts = [];
  }

  ngOnInit() {
      if(localStorage.getItem('authtoken') == null){
        this.router.navigate(['login'])
      }
     this.requestService.getAllPosts()
      .subscribe(data => {
        this.posts = <PostModel[]> data;
      })
  }

}
