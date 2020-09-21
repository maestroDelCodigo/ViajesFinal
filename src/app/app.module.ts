import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';
import { ViajesFilterComponent } from './viajes-list/viajes-filter/viajes-filter.component';
import { ViajesGridComponent } from './viajes-list/viajes-grid/viajes-grid.component';
import { ViajesFilterReactiveComponent } from './viajes-list/viajes-filter-reactive/viajes-filter-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViajesListComponent,
    ViajesFilterComponent,
    ViajesGridComponent,
    ViajesFilterReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
