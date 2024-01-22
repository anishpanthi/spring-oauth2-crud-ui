import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'spring-oauth2-crud-ui';
  loading = true;
  users: User[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loading = true;
    this.http.get<User[]>('api/users').subscribe((data: User[]) => {
      this.users = data;
      this.loading = false;
    });
  }
}
