import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpAuthInterceptor } from './security-services';
import { ViajeEstadoPipe } from './viaje-estado.pipe';
import { ViajesEditComponent } from './viajes-edit/viajes-edit.component';
import { ViajesFilterReactiveComponent } from './viajes-list/viajes-filter-reactive/viajes-filter-reactive.component';
import { ViajesFilterComponent } from './viajes-list/viajes-filter/viajes-filter.component';
import { ViajesGridComponent } from './viajes-list/viajes-grid/viajes-grid.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ViajesListComponent,
    ViajesEditComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    ViajesFilterComponent,
    ViajesGridComponent,
    ViajesFilterReactiveComponent,
    ViajeEstadoPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
