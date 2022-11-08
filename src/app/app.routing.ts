import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'crud', component: CrudComponent }
  ];

export const routing = RouterModule.forRoot(appRoutes);