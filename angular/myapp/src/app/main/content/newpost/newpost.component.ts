import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from '../content.component';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss'],
})
export class NewpostComponent implements OnInit {
  @Input() child!: Post;
  @Output() deletePost = new EventEmitter<number>();
  constructor() {}

  checkID(i: any) {
    console.log(i);
  }

  onDeletePost() {
    this.deletePost.emit(this.child.id);
    console.log(123);
  }

  ngOnInit(): void {}
}
