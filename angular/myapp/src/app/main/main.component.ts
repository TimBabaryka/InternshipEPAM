import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { CommonService } from './service/common.service';
import { NewsAPIService } from './service/news-api.service';
import { LoaderService } from '../spinner/loader.service';
import { User } from './models/model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  news: string[] = [];
  user!: User;

  private destroy$: Subject<boolean> = new Subject();

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
    this.commonServ
      .getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.user = data;
      });
    this._services
      .ContentComponent()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.news = result.articles;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
