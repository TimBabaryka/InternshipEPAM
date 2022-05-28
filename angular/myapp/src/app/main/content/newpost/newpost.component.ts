import {
  Component,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from '../content.component';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss'],
})
export class NewpostComponent implements OnInit, OnChanges {
  @Input() child!: Post;
  @Output() deletePost = new EventEmitter<number>();
  constructor() {}

  checkID(i: any) {
    console.log(i);
  }

  onDeletePost() {
    this.deletePost.emit(this.child.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {}
}
