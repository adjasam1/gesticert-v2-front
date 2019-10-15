import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DevGuard } from './security/guards/dev';
import { AdminGuard } from './security/guards/admin';

import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';
import { Header2Component } from './static/header2/header2.component';
import { ProfileComponent } from './dynamic/profile/profile.component';
import { HomeAdministrationComponent } from './dynamic/administration/home-administration/home-administration.component';
import { FooterComponent } from './static/footer/footer.component';
import { ContactComponent } from './static/contact/contact.component';
import { AboutComponent } from './static/about/about.component';
import { AccessibilityComponent } from './static/accessibility/accessibility.component';
import { LoginComponent } from './dynamic/login/login.component';
import { MenuComponent } from './static/menu/menu.component';
import { HomeComponent } from './dynamic/home/home.component';

import { CommonModule } from '@angular/common';
import { JwtInterceptor } from './security/http-interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header2Component,
    ProfileComponent,
    HomeAdministrationComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    AccessibilityComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [DevGuard, AdminGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
