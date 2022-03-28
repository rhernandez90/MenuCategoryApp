import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {

                if (err.status === 401) {
                    this.router.navigateByUrl('/login');
                }

                let errorMsg = "";
                if(err.error.msg != undefined)
                    errorMsg = err.error.msg;
                else
                    errorMsg = JSON.stringify(err.error)

                Swal.fire({
                    title: "Error!",
                    text : errorMsg,
                    icon: "error",
                  });

                
                return throwError(err);

            })
        );
    }
}