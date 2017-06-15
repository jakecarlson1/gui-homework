import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as Shared from '../shared/index';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { MovieRepository } from './api/movie-repository.service';

var routes = [
	{
		path: '',
		component: MovieListComponent
	},
	{
		path: 'add',
		component: MovieEditorComponent
	},
	{
		path: 'edit/:id',
		component: MovieEditorComponent
	}
];

@NgModule({
	imports:      [ 
		BrowserModule,
		RouterModule.forRoot(routes),
		FormsModule
	],
	declarations: [
		MovieListComponent,
		MovieEditorComponent,
		Shared.RatingComponent
	],
	exports: [
		MovieListComponent,
		MovieEditorComponent
	],
	providers: [
		MovieRepository
	]
})

export class MoviesModule { }