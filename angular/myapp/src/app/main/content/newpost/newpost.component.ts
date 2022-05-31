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
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss'],
})
export class NewpostComponent implements OnInit, OnChanges {
  // activeCardId!: any;
  @Input() child!: Post;
  // @Output() deletePost = new EventEmitter<number>();
  constructor(private serviceCom: CommonService) {}

  // onDeletePost() {
  //   this.deletePost.emit(this.child.id);
  // }
  onPostClick(id: string) {
    // this.activeCardId = id;
    this.serviceCom.setActiveId(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {}
}
