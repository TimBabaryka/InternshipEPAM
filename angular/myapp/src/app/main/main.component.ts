import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { CommonService } from './service/common.service';
import { NewsAPIService } from './service/news-api.service';
import { LoaderService } from '../spinner/loader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  // items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  news: string[] = [];
  user!: any;

  constructor(
    private dialogRef: MatDialog,
    private authService: AuthService,
    private router: Router,
    private commonServ: CommonService,
    private _services: NewsAPIService,
    public loaderService: LoaderService
  ) {}

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  createPost() {
    this.dialogRef.open(CreatepostComponent);
  }
  ngOnInit(): void {
    this.commonServ.getData().subscribe((data) => {
      this.user = data;
      // this.items = this.user.user.articles;
    });
    this._services.ContentComponent().subscribe((result) => {
      this.news = result.articles;
    });
  }
}
