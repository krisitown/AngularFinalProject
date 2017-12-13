import { Component } from '@angular/core';
import { PostModel } from '../../../models/post.model';
import { RequestService } from '../../../services/request.service';
import { Router } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  public model : PostModel;
  public creationFail : boolean;

  constructor(
    private requestService : RequestService,
    private router : Router
  ) { 
    if(localStorage.getItem('authtoken') == null){
      this.router.navigate(['login'])
    }
    this.model = new PostModel(localStorage.getItem('username'), "", "", "", "");
  }

  createPost() : void {
    this.requestService.createPost(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/posts']);
        },
        err => {
          this.creationFail = true;
        }
      )
  }

}
