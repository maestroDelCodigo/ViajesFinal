import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginService } from '../security-services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  error = false;

  constructor(private loginService: LoginService,
              private authService: AuthService, private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(usuario: string, password: string): void {

    if (usuario && password) {
      this.loginService.login(usuario, password).subscribe(x => {
        if (x) {
          this.authService.storeUser(x);
          this.router.navigate(['']);
        } else {
          this.error = true;
        }
      });
    } else {
      this.error = true;
    }
  }
}
