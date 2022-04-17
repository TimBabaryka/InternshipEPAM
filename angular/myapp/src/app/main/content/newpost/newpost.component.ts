import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../content.component';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss'],
})
export class NewpostComponent implements OnInit {
  @Input() post!: Post;
  constructor() {}

  ngOnInit(): void {}
}
