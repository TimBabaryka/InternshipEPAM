import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    return this.http
      .post('http://localhost:3223/app/login', {
        email,
        password,
      })
      .pipe(tap((res) => this.setSession(res)));
  }

  isLoggedIn() {
    const expiresIn = localStorage.getItem('expiresIn');
    if (expiresIn) {
      return Date.now() < Number(expiresIn);
    }
    return false;
  }

  logout() {
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('idToken');
    localStorage.removeItem('authuser');
  }

  registration(email: string, password: string, username: string) {
    return this.http.post('http://localhost:3223/app/registration', {
      email,
      password,
      username,
    });
  }

  private setSession(res: any) {
    const expiresIn = Date.now() + Number(res.expiresIn);
    localStorage.setItem('authuser', JSON.stringify(res.authuser));
    localStorage.setItem('idToken', res.apiKey);
    localStorage.setItem('expiresIn', String(expiresIn));
  }
}
