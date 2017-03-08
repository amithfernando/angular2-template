import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import {AppRoutingModule} from './app-route.module'
import { AppComponent } from './app.component';
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
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { 

 constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
