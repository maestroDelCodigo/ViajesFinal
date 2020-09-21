import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.toLowerCase().includes('login')) {
      return next.handle(req);
    }
    const nuevaRequest = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.authService.getBearer()) });

    return next.handle(nuevaRequest);
  }

}
