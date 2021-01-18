import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../../constants/api-urls';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable()

export class AuthService {
  private baseUrl: string = environment.apiUrl;

  constructor(
    protected http: HttpClient,
    private router: Router
  ) { }

  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    this.router.navigate(['/login']);
  }

  public login(userName: string, password: string): Observable<any> {
    var url = this.baseUrl + API_URLS.login;
    var payload = {
      userName: userName,
      password: password
    };

    return this.authenticate(url, payload);
  }

  public refreshAccessToken(): Observable<any> {

    var url = this.baseUrl + API_URLS.refreshToken;
    let payload = {
      refreshToken: this.getRefreshToken()
    }

    return this.authenticate(url, payload);
  }

  private authenticate(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data)
      .pipe(
        map((res) => {          
          let token = res && res.token;
          let refreshToken = res && res.refreshToken;
          // store username and jwt token
          this.setToken(token);
          this.setRefreshToken(refreshToken);
          return res;
        }),
      );
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  setRefreshToken(refreshToken) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}