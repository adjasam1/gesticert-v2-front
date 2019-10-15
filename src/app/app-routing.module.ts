import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './static/contact/contact.component';
import {AboutComponent} from './static/about/about.component';
import {AccessibilityComponent} from './static/accessibility/accessibility.component';
import {HomeComponent} from './dynamic/home/home.component';
import {ProfileComponent} from './dynamic/profile/profile.component';
import {HomeAdministrationComponent} from './dynamic/administration/home-administration/home-administration.component';
import {LoginComponent} from './dynamic/login/login.component';


const routes: Routes = [
  { path: 'authentification', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'accessibilite', component: AccessibilityComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'profil', component: ProfileComponent },
  { path: 'administration', component: HomeAdministrationComponent },
  { path: '', redirectTo: '/authentification', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
