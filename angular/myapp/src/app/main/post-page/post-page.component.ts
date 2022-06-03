import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/model';
import { Post } from '../content/content.component';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
  activeId!: string;
  userData!: User;
  data: Post[] = [];
  deleteActive: boolean = false;
  editActive: boolean = false;
  postData: Post = {
    title: '',
    description: '',
    author: '',
    source: '',
    _id: '',
    date: '',
  };

  constructor(
    private serviceCom: CommonService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  getUserData() {
    this.serviceCom.getData().subscribe((data) => {
      this.userData = data;
      this.data = this.userData.articles.filter((obj: any) => {
        return obj._id === this.activeId;
      });
      this.postData = { ...this.data[0] };
    });
  }

  deleteArticle() {
    this.serviceCom.deletePost(this.activeId);
    this.router.navigateByUrl('/main/myArticles');
  }

  editArticle() {
    this.serviceCom
      .sendArticleEdit(this.activeId, this.userData)
      .subscribe(() => {
        this.editActive = false;
        this.serviceCom.editPost$.next(null);
      });
  }

  ngOnInit(): void {
    this.getUserData();
    this.activeRoute.params.subscribe((params) => {
      this.activeId = params['id'];
    });

    this.serviceCom.editPost$.subscribe(() => {
      this.getUserData();
    });
  }
}
