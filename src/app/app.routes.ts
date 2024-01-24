import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserEditComponent} from "./user-edit/user-edit.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/:id',
    component: UserEditComponent
  }
];
