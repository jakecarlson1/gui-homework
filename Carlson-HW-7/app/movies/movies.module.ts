import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { MovieRepository } from './api/movie-repository.service';
import { SharedModule } from '../shared/shared.module';

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
		FormsModule,
		HttpModule,
		SharedModule
	],
	declarations: [
		MovieListComponent,
		MovieEditorComponent
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