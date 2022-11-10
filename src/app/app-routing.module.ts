import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';
import { AuthGuard } from './components/auth/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'manage_images', component: CrudComponent, canActivate: [AuthGuard] },
  { path: 'logout', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
