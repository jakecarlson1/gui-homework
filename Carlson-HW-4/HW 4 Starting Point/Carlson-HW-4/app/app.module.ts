import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';

import { MoviesModule } from './movies/movies.module';

@NgModule({
  imports:      [ 
  	BrowserModule,
    MoviesModule,
	RouterModule,
	FormsModule
  ],
  declarations: [
  	AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }