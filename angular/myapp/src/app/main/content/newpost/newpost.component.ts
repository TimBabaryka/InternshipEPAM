import {
  Component,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Article, Post } from '../content.component';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss'],
})
export class NewpostComponent implements OnInit, OnChanges {
  @Input() child!: Article;
  @Output() deletePost = new EventEmitter<string>();
  constructor() {}

  checkID(i: any) {
    console.log(i);
  }

  onDeletePost() {
    this.deletePost.emit(this.child.source.name);
    console.log(this.child.source.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {}
}
