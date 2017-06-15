import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Movie } from './movie';

import "rxjs/Rx";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MovieRepository {

	private _movies: Movie[];
	private apiUrl = 'api/movies';

	private getIndex(id : number){
		for (var i = this._movies.length; i--;) {
			var movie = this._movies[i];
			if(movie.id == id) return i;
		}
		return -1;
	}

	constructor(private http: Http) {

	}

	public list() : Promise<Movie[]> {
		return this.http.get(this.apiUrl)
			.toPromise()
			.then(res => res.json().data as Movie[])
			.catch(err => this.handleError(err));
	}

	public get(id : number) : Promise<Movie> {
		return this.http.get(`${this.apiUrl}/${id}`)
			.toPromise()
			.then(res => res.json().data as Movie)
			.catch(err => this.handleError(err));
	}

	public add(movie: Movie) : Promise<Movie> {
		this.list().then(x => movie.id = x.length + 1);
		return this.http.post(this.apiUrl, movie)
			.toPromise()
			.then(res => res.json().data as Movie)
			.catch(err => this.handleError(err));
	}

	public update(movie: Movie) : Promise<Movie> {
		return this.http.put(`${this.apiUrl}/${movie.id}`, movie)
			.toPromise()
			.then(res => res.json() as Movie)
			.catch(err => this.handleError(err));
	}

	public delete(id : number) {
		return this.http.delete(`${this.apiUrl}/${id}`)
			.toPromise()
			.catch(err => this.handleError(err));
	}

	private handleError(error: any): Promise<any> {
		console.log("Error: ", error);
		return Promise.reject(error.message || error);
	}

	private extractData(res: Response) {
		return res.json();
	}
}
