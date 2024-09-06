import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {BehaviorSubject, lastValueFrom, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from './model/user';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  $authenticationState = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private location: Location) {
  }

  getUser(): Observable<User> {
    return this.http.get<User>('/tmv/accelerator/api/user/auth/info', {headers},)
      .pipe(map((response: User) => {
          if (response !== null) {
            this.$authenticationState.next(true);
          }
          return response;
        })
      );
  }

  async isAuthenticated(): Promise<boolean> {
    const user = await lastValueFrom(this.getUser());
    return user !== null;
  }

  login(): void {
    location.href = `${location.origin}${this.location.prepareExternalUrl('/tmv/accelerator/api/oauth2/authorization/azure-ad')}`;
  }

  logout(): void {
    this.http.post('/tmv/accelerator/api/user/auth/logout',
      {},
      {withCredentials: true})
      .subscribe((response: any) => {
        location.href = response.logoutUrl;
      });
  }
}
