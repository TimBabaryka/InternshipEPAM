import { Component, OnInit, Input } from '@angular/core';

export interface Post {
  title: string;
  description: string;
  source: string;
  date: string;
  author: string;
  id: number;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
