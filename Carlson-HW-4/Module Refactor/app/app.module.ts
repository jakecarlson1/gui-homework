import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';

import * as Shared from './shared/index';
import * as Dashboard   from './dashboard/index';
import * as Accounts from './accounts/index';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule,
    Shared.SharedModule,
    Dashboard.DashboardModule,
    Accounts.AccountsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }