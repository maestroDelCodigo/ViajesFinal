import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Usuario } from '../models';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Usuario> {

    const body = {
      email,
      password
    };

    return this.http.post<any>('https://api-coches.herokuapp.com/auth/login', body)
      .pipe(
        map(x => {
          const user = new Usuario(x);
          user.token = x;
          user.apellidos = 'De la Fuente';
          user.nombre = 'Abel';
          return user;
        }),
        catchError(e => {
          return of(null);
        })
      );
  }
}
