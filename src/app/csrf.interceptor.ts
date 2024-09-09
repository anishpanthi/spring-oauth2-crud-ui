// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
//
// @Injectable()
// export class CsrfInterceptor implements HttpInterceptor {
//   private csrfToken: string | null = null;
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Clone the request and add the CSRF token header if it's available
//     let clonedRequest = req;
//
//     if (this.csrfToken) {
//       clonedRequest = req.clone({
//         setHeaders: {
//           'X-CSRF-TOKEN': this.csrfToken
//         }
//       });
//     }
//
//     return next.handle(clonedRequest).pipe(
//       tap(event => {
//         if (event instanceof HttpResponse) {
//           // Check if the X-CSRF-TOKEN is present in the response headers
//           const csrfTokenFromResponse = event.headers.get('X-CSRF-TOKEN');
//           if (csrfTokenFromResponse) {
//             // Store the CSRF token for future requests
//             this.csrfToken = csrfTokenFromResponse;
//           }
//         }
//       })
//     );
//   }
// }
