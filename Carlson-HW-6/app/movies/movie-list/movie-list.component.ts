import { Component, OnInit } from '@angular/core';
import { MovieRepository } from '../api/movie-repository.service';
import { Movie } from '../api/movie';

@Component({
	moduleId: module.id,
	selector: 'movie-list',
	templateUrl: 'movie-list.component.html',
	styleUrls: [ 'movie-list.component.css' ]
})

export class MovieListComponent implements OnInit { 
	movies : Movie[];

	constructor(private movieRepository : MovieRepository){
		movieRepository.list().then(data => this.movies = data);
	}

	ngOnInit() {
		this.movieRepository.list().then(data => this.movies = data);
	}

	delete(id: number) {
		this.movieRepository.delete(id);
		this.movieRepository.list().then(data => this.movies = data);
	}

	updateRating(id: number, rating: number) {
		let movie: Movie;
		let _this = this;
		this.movieRepository.get(id).then(data =>  movie = data)
			.then(() => {movie.rating = rating; _this.movieRepository.update(movie)
			.then(() => _this.movieRepository.list().then(data => _this.movies = data))});
	}
}