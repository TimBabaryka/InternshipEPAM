import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { CommonService } from './service/common.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  user!: any;
  constructor(
    private dialogRef: MatDialog,
    private authService: AuthService,
    private router: Router,
    private commonServ: CommonService
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
    });
    // this.commonServ.getUserData();
    // this.user = this.commonServ.getUser();
    // console.log(this.user);
  }
}
