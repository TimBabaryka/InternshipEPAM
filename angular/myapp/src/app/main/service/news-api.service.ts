import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentComponent } from '../content/content.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsAPIService {
  date = new Date();
  year = this.date.getFullYear();
  month = this.date.getMonth();
  day = this.date.getDate();
  fullDate = `${this.year}-${this.month}-${this.day}`;
  constructor(private _http: HttpClient) {}
  newsApiUrl: string = `https://newsapi.org/v2/everything?q=tesla&from=${this.fullDate}&sortBy=publishedAt&apiKey=07bb7597a6544284a773020e63cc8f23`;

  ContentComponent(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
}
