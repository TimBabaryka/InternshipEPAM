import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewsAPIService } from '../service/news-api.service';

export interface UserData {
  id: string;
  urlToImage: string;
  description: string;
  author: string;
  url: string;
  publishedAt: string;
  title: string;
}
@Component({
  selector: 'app-newstable',
  templateUrl: './newstable.component.html',
  styleUrls: ['./newstable.component.scss'],
})
export class NewstableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'urlToImage',
    'title',
    'description',
    'author',
    'url',
    'date',
  ];
  dataSource!: MatTableDataSource<UserData>;
  articlesData: UserData[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _services: NewsAPIService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this._services.ContentComponent().subscribe((result) => {
      this.articlesData = result.articles;
      this.articlesData.forEach(addId(1));
      this.dataSource = new MatTableDataSource(this.articlesData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}

function addId(id: number) {
  return function iter(o: any) {
    if ('title' in o) {
      o.id = id++;
    }
    Object.keys(o).forEach(function (k) {
      Array.isArray(o[k]) && o[k].forEach(iter);
    });
  };
}
