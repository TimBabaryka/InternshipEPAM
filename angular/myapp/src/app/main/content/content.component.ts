import { Component, OnInit, Input } from '@angular/core';

import { CommonService } from '../service/common.service';
import { LoaderService } from 'src/app/spinner/loader.service';

export interface Post {
  title: string;
  description: string;
  source: string;
  date: string;
  author: string;
  id: number | undefined;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  message!: Post;

  posts: Post[] = [
    {
      title: 'New Post',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      source: 'Star Wars',
      date: '2022-13-16',
      author: 'Mando',
      id: 0,
    },
    {
      title: 'New Post1',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      source: 'Star Wars1',
      date: '2022-13-17',
      author: 'Mando1',
      id: 0,
    },
    {
      title: 'New Post2',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      source: 'Star Wars2',
      date: '2022-13-18',
      author: 'Mando2',
      id: 0,
    },
  ];
  constructor(
    private serviceFunct: CommonService,
    public loaderService: LoaderService
  ) {}

  deletePost(id: number) {
    this.posts = this.posts.filter((el: Post) => el.id !== id);
  }

  ngOnInit(): void {
    this.message = this.serviceFunct.getPost();
    if (this.message === undefined) {
    } else {
      this.posts.push(this.message);
    }
    this.posts.forEach(this.serviceFunct.addId(1));
  }
}
