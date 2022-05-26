import { Component, OnInit, Input } from '@angular/core';
import { NewsAPIService } from '../service/news-api.service';

export interface Post {
  title: string;
  description: string;
  source: string;
  date: string;
  author: string;
  id: number;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  articlesData: any = [];
  posts: Post[] = [
    {
      title: 'New Post',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      source: 'Star Wars',
      date: '20/13/16',
      author: 'Mando',
      id: 0,
    },
    {
      title: 'New Post1',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      source: 'Star Wars1',
      date: '20/13/17',
      author: 'Mando1',
      id: 1,
    },
    {
      title: 'New Post2',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      source: 'Star Wars2',
      date: '20/13/18',
      author: 'Mando2',
      id: 2,
    },
  ];
  constructor(private _services: NewsAPIService) {}

  deletePost(name: string) {
    this.posts = this.articlesData.filter(
      (el: Article) => el.source.name !== name
    );
  }

  ngOnInit(): void {
    this._services.ContentComponent().subscribe((result) => {
      this.articlesData = result.articles;
      console.log(this.articlesData);
    });
  }
}
