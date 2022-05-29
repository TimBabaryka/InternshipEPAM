import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../content/content.component';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent implements OnInit {
  post!: Post;
  CardForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    source: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });
  constructor(private service: CommonService) {}

  onSubmitCreate() {
    const { title, description, source, author, date } = this.CardForm.value;
    const post: Post = {
      title: title,
      description: description,
      source: source,
      author: author,
      date: date,
      id: 0,
    };
    // console.log('New Post', post);
    this.service.setPost(post);
  }

  ngOnInit(): void {}
}