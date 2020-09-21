import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './security-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  usuarioEstaEnPaginaLogin = false;

  constructor(private authService: AuthService, private router: Router) {

    router.events.pipe(filter((event: any) => event instanceof NavigationStart)).subscribe(x => {      
      this.usuarioEstaEnPaginaLogin = x.url.toLowerCase().includes('login');
    });
  }

  salirDelSistema(): void {
    if (confirm('Seguro que desea salir del sistem')) {
      this.authService.removeUser();
      this.router.navigate(['/login']);
    }
  }
}
