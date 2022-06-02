import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
  value: any;
  activeId!: string;
  dataOFActiveCard: any;
  data: any;
  deleteActive: boolean = false;
  editActive: boolean = false;

  constructor(private serviceCom: CommonService, private router: Router) {}

  getUserData() {
    this.serviceCom.getData().subscribe((data) => {
      this.dataOFActiveCard = data;
      this.data = this.dataOFActiveCard.user.articles.filter((obj: any) => {
        return obj._id === this.activeId;
      });
      this.dataOFActiveCard = { ...this.data[0] };
    });
  }

  deleteArticle() {
    this.serviceCom.deletePost(this.activeId);
    this.router.navigateByUrl('/main/myArticles');
  }

  editArticle() {
    this.serviceCom
      .sendArticleEdit(this.activeId, this.dataOFActiveCard)
      .subscribe(() => {
        this.editActive = false;
        this.serviceCom.editPost$.next(null);
      });
  }

  ngOnInit(): void {
    this.getUserData();

    this.activeId = this.serviceCom.getActiveId();
    this.serviceCom.editPost$.subscribe(() => {
      this.getUserData();
    });
  }
}
