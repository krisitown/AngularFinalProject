import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../../models/post.model';
import { CommentModel } from '../../../models/comment.model';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  public postId : string;
  public model : PostModel;
  public newComment : CommentModel;
  public comments : CommentModel[];
  public newCommentFail : boolean;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newComment = new CommentModel(localStorage.getItem('username'), "");
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.postId = params['id'];
      this.requestService.getPost(id).subscribe(post => {
        this.model = <PostModel>post;
      })
      this.requestService.getPostComments(id).subscribe(comments => {
        this.comments = <CommentModel[]>comments;
      })
    })
  }

  addComment(){
    let commentData = {
      postId: this.postId,
      author: this.newComment.author,
      content: this.newComment.content
    }
    this.requestService.addComment(commentData)
      .subscribe(        
        data => {
          this.newCommentFail = false;
          this.comments.splice(0, 0, <CommentModel>data)
          this.newComment = new CommentModel(localStorage.getItem('username'), "");
        },
        err => {
          this.newCommentFail = true;
        }
      )
  }

}
