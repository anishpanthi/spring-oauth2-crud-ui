import {Component} from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatTableModule, MatIconModule, DatePipe, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  title = 'User List';
  loading = true;
  users: User[] = [];
  displayedColumns = ['id', 'name', 'email'];
  feedback: any = {};
  protected readonly event = event;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loading = true;
    this.http.get<User[]>('api/all/users').subscribe((data: User[]) => {
      this.users = data;
      this.loading = false;
      this.feedback = {};
    });
  }
}
