import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { TablesComponent } from './+tables';
import { SingleTableComponent } from './+single-table';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tables', component: TablesComponent,},
  { path: 'single-table', component: SingleTableComponent,},
  { path: '**',    component: NoContentComponent },
];
