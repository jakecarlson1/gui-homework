import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as Shared from '../shared/index';

import { LandingComponent } from './landing/landing.component';

var routes = [
  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    Shared.SharedModule
  ],
  declarations: [
    LandingComponent,
  ]
})

export class DashboardModule { }