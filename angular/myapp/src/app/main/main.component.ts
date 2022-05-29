import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatepostComponent } from './createpost/createpost.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private dialogRef: MatDialog) {}

  createPost() {
    this.dialogRef.open(CreatepostComponent);
  }
  ngOnInit(): void {}
}
