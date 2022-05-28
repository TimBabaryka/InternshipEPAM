import { Injectable } from '@angular/core';
import { ContentComponent, Post } from '../content/content.component';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  dataPost!: Post;
  constructor() {}

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
