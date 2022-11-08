import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { ImagesComponent } from './components/layouts/partials/images/images.component';
import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagesComponent,
    HomeComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
