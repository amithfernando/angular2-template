import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './ui/header/header.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { FooterComponent } from './ui/footer/footer.component';
import { IndexComponent } from './index/index.component';


const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
   { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }