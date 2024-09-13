import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { User } from './model/user';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $authenticationState = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private location: Location) {}

  getCookie() {
    const token = localStorage.getItem('token');
    return token ?? '';
  }

  private setHeaders(): HttpHeaders {
    let headersConfig: any = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store no-cache max-age=0',
      Pragma: 'no-cache',
      'x-csrf-token': this.getCookie(),
    };
    return new HttpHeaders(headersConfig);
  }

  getUser(): Observable<User> {
    return this.http
      .get('/tmv/accelerator/api/user/auth/info', {
        headers: this.setHeaders(),
      })
      .pipe(
        tap((response: any) => {
          if (response !== null) {
            const token = response.headers.get('x-csrf-token');
            localStorage.setItem('token', token);
            this.$authenticationState.next(true);
          }
          return response.body;
        })
      );
  }

  async isAuthenticated(): Promise<boolean> {
    const user = await lastValueFrom(this.getUser());
    return user !== null;
  }

  login(): void {
    location.href = `${location.origin}${this.location.prepareExternalUrl(
      '/tmv/accelerator/api/oauth2/authorization/azure-ad'
    )}`;
  }

  logout(): void {
    this.http
      .post(
        '/tmv/accelerator/api/user/auth/logout',
        {},
        {
          headers: this.setHeaders(),
          withCredentials: true,
        }
      )
      .subscribe((response: any) => {
        location.href = response.logoutUrl;
      });
  }
}
