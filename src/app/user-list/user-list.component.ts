import { Component } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {RouterLink, RouterOutlet} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatTableModule, MatIconModule, DatePipe, HttpClientModule, RouterOutlet],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  title = 'User List';
  loading = true;
  users: User[] = [];
  displayedColumns = ['id', 'name', 'email', 'password'];
  feedback: any = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loading = true;
    this.http.get<User[]>('api/users').subscribe((data: User[]) => {
      this.users = data;
      this.loading = false;
      this.feedback = {};
    });
  }

  delete(user: User): void {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.http.delete(`api/users/${user.id}`).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.ngOnInit();
          }, 1000);
        },
        error: () => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      });
    }
  }

  protected readonly event = event;
}
