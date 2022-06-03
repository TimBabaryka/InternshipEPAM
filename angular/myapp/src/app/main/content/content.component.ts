import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../service/common.service';
import { LoaderService } from 'src/app/spinner/loader.service';
import { User } from '../models/model';

export interface Post {
  title: string;
  description: string;
  source: string;
  date: string;
  author: string;
  _id: string;
  image?: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  user!: User;
  posts: Post[] = [];

  constructor(private serviceFunct: CommonService) {}

  getDataArticle() {
    this.serviceFunct.getData().subscribe((data) => {
      this.user = data;
      this.posts = this.user.articles;
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
    this.serviceFunct.editPost$.subscribe(() => {
      this.getDataArticle();
    });
  }
}
