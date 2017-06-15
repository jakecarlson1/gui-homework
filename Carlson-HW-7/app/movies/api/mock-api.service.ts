import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable()
export class MockApiService extends InMemoryDbService {
	createDb() {
		let movies: Movie[] = [
			{ id: 1, title: 'Batman', year: 1988, imagePath: 'images/shining.jpg', rating: 1 },
			{ id: 2, title: 'Home Alone', year: 1990, imagePath: 'images/nemo.jpg', rating: 2 },
			{ id: 3, title: 'Titanic', year: 1996, imagePath: 'images/hungergames.jpg', rating: 3 }
		];
		return {movies};
	}
}
