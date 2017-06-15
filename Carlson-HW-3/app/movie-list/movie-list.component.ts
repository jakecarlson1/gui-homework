import { Component } from '@angular/core';

import { MovieListService } from './movie-list-service';

@Component({
  selector: 'movie-list',
  templateUrl: './app/movie-list/movie-list.component.html',
  styleUrls: [ './app/movie-list/movie-list.component.css' ],
  providers: [ MovieListService ]
})

export class MovieListComponent { 

	title: string;
  movies: any[];
  validRatings: number[];

	constructor(MovieListService: MovieListService) {
		this.title = "The Will Smith Movie Database";

    this.movies = MovieListService.getItems();

    this.validRatings = [1,2,3,4,5];
  }
}
