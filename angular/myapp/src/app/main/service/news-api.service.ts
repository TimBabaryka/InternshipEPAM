import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentComponent } from '../content/content.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsAPIService {
  constructor(private _http: HttpClient) {}
  newsApiUrl =
    'https://newsapi.org/v2/everything?q=tesla&from=2022-04-26&sortBy=publishedAt&apiKey=07bb7597a6544284a773020e63cc8f23';

  ContentComponent(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
}
