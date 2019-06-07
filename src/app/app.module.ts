import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Rout1Component } from './rout1/rout1.component';
import { Rout2Component } from './rout2/rout2.component';
import { Rout3Component } from './rout3/rout3.component';
import { HomeComponent } from './home/home.component';
import { Routes , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const approutes: Routes = [
{path: 'home' , component:  HomeComponent},
{path: 'rout1' , component: Rout1Component},
{path: 'rout2/:id/:name' , component:  Rout2Component},
{path: 'rout3' , component: Rout3Component},
];
@NgModule({
  declarations: [
    AppComponent,
    Rout1Component,
    Rout2Component,
    Rout3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
