import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../content/content.component';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent implements OnInit {
  CardForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    source: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });
  constructor() {}

  onSubmitCreate() {
    const { title, description, source, author, date } = this.CardForm.value;
    let id = 3;
    const post: Post = {
      title: title,
      description: description,
      source: source,
      author: author,
      date: date,
      id: id,
    };
    console.log('New Post', post);
  }

  ngOnInit(): void {}
}
