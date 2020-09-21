import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './security-services';
import { ViajesEditComponent } from './viajes-edit/viajes-edit.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'viajes', component: ViajesListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'viajes/detail', component: ViajesEditComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'viajes/detail/:id', component: ViajesEditComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
