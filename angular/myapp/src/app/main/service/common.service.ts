import { Injectable } from '@angular/core';
import { ContentComponent, Post } from '../content/content.component';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  user!: any;
  dataPost!: Post;
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:3223/app/getUser', {});
  }

  getUserData() {
    this.getData().subscribe((data) => {
      this.user = data;
      // console.log(this.user);
    });
  }

  getUser() {
    return this.user;
  }

  setPost(data: Post) {
    this.dataPost = data;
  }

  getPost() {
    return this.dataPost;
  }
  addId(id: number) {
    return function iter(o: any) {
      if ('title' in o) {
        o.id = id++;
      }
      Object.keys(o).forEach(function (k) {
        Array.isArray(o[k]) && o[k].forEach(iter);
      });
    };
  }
}
