import { Component } from '@angular/core';
import { MovieRepository } from '../api/movie-repository.service';
import { Movie } from '../api/movie';

@Component({
	moduleId: module.id,
	selector: 'movie-list',
	templateUrl: 'movie-list.component.html',
	styleUrls: [ 'movie-list.component.css' ]
})

export class MovieListComponent { 
	movies : Movie[];

	constructor(private movieRepository : MovieRepository){
		this.movies = this.movieRepository.list();
	}

	delete(id: number) {
		this.movieRepository.delete(id);
	}
}