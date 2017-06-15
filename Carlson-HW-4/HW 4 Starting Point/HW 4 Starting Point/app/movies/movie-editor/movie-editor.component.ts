import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieRepository } from '../api/movie-repository.service';
import { Movie } from '../api/movie';

@Component({
	moduleId: module.id,
	selector: 'movie-editor',
	templateUrl: 'movie-editor.component.html',
	styleUrls: [ 'movie-editor.component.css' ]
})

export class MovieEditorComponent { 
	movies : Movie[];
	movie: Movie;

	constructor(private movieRepository : MovieRepository,
				private route: ActivatedRoute,
				private router: Router) {
		this.movies = this.movieRepository.list();
	}

	ngOnInit() {
		this.route.params.subscribe(x => this.loadMovie(+x['id']));
	}

	addMovie() {
		if (this.movie.id == -1) {
			this.movieRepository.add(this.movie);
		} else {
			this.movieRepository.update(this.movie);
		}
	}

	loadMovie(id: number) {
		if (id) {
			this.movie = this.movieRepository.get(id);
		} else {
			this.movie = new Movie();
			this.movie.id = -1;
		}
	}

}