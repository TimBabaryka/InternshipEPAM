import { Injectable } from '@angular/core';
import { ContentComponent, Post } from '../content/content.component';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  activeId!: string;
  addArticle$ = new Subject();
  deletePost$ = new Subject();
  editPost$ = new Subject();
  user!: User;
  dataPost!: Post;
  constructor(private http: HttpClient) {}

  sendArticleEdit(id: string, post: User) {
    return this.http.post(`http://localhost:3223/app/editPost/${id}`, {
      post,
    });
  }

  setActiveId(data: string) {
    this.activeId = data;
  }

  getActiveId() {
    return this.activeId;
  }

  addPost(
    title: string,
    description: string,
    source: string,
    author: string,
    date: string
  ) {
    return this.http.post('http://localhost:3223/app/addPost', {
      title,
      description,
      source,
      author,
      date,
    });
  }

  getData(): Observable<User> {
    return this.http
      .get<{ user: User }>('http://localhost:3223/app/getUser', {})
      .pipe(map((res) => res.user));
  }

  deletePost(id: string) {
    return this.http
      .delete(`http://localhost:3223/app/deleteArticle/${id}`)
      .subscribe(() => {
        this.deletePost$.next(null);
      });
  }

  getUserData() {
    this.getData().subscribe((data) => {
      this.user = data;
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
