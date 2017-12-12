import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Models
import { PostModel } from '../models/post.model';

const appKey = 'kid_SkqK9WDdZ';
const appSecret = '3839328876b54268b827362cf5ecf5e7';
const postsIndexUrl = `https://baas.kinvey.com/appdata/${appKey}/posts?query={}&sort={"_kmd.ect": -1}`
const createPostUrl = `https://baas.kinvey.com/appdata/${appKey}/posts`

@Injectable()
export class RequestService {
  private currentAuthtoken : string;

  constructor(
    private http : HttpClient
  ) { }

  public createPost(postData){
    return this.http.post(
      createPostUrl,
      JSON.stringify(postData),
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }

  public getAllPosts(){
    return this.http.get(
      postsIndexUrl,
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }

  //helper methods
  isLoggedIn() {
    let authtoken : string = localStorage.getItem('authtoken');

    return authtoken === this.currentAuthtoken;
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value : string) {
    this.currentAuthtoken = value;
  }

  private createAuthHeaders(type : string) : HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }

}
