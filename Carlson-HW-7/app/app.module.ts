import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApiService }  from './movies/api/mock-api.service';
import { AppComponent }   from './app.component';
import { MoviesModule } from './movies/movies.module';

import * as Shared from './shared/index';

@NgModule({
  imports:      [ 
  	BrowserModule,
    MoviesModule,
	RouterModule,
	FormsModule,
	InMemoryWebApiModule.forRoot(MockApiService),
	HttpModule,
	Shared.SharedModule
  ],
  declarations: [
  	AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }