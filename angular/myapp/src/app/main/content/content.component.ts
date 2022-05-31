import { Component, OnInit, Input } from '@angular/core';

import { CommonService } from '../service/common.service';
import { LoaderService } from 'src/app/spinner/loader.service';

export interface Post {
  title: string;
  description: string;
  source: string;
  date: string;
  author: string;
  _id: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  // message!: Post;
  user!: any;
  posts: Post[] = [];

  constructor(
    private serviceFunct: CommonService // public loaderService: LoaderService
  ) {}

  // deletePost(id: number) {
  //   this.posts = this.posts.filter((el: Post) => el.id !== id);
  // }

  getDataArticle() {
    this.serviceFunct.getData().subscribe((data) => {
      this.user = data;
      this.posts = this.user.user.articles;
    });
  }

  ngOnInit(): void {
    this.getDataArticle();
    this.serviceFunct.addArticle$.subscribe(() => {
      this.getDataArticle();
    });
    this.serviceFunct.deletePost$.subscribe(() => {
      this.getDataArticle();
    });

    // this.message = this.serviceFunct.getPost();
    // if (this.message === undefined) {
    // } else {
    //   this.posts.push(this.message);
    // }
    // this.posts.forEach(this.serviceFunct.addId(1));
  }
}
