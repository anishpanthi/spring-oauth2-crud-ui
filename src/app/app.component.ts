import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { CsrfInterceptor } from './csrf.interceptor';  // Import your interceptor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // ,
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: CsrfInterceptor, multi: true }  // Add it to the list of providers
  // ]
})
export class AppComponent {
  title = 'User Management';
}
