import { Injectable } from '@angular/core';

@Injectable()
export class MovieListService { 
	getItems() : MovieItem[] {
		return [
            new MovieItem('I am Legend', 2007, './images/i_am_legend.jpg'),
            new MovieItem('Independence Day', 1996, './images/independence_day.jpg'),
            new MovieItem('Hancock', 2008, './images/hancock.jpg')
        ];
	}
}

class MovieItem {

    title: string;
    year: number;
    rating: number;
    imageUrl: string;

    constructor(title: string, year: number, image: string) {
      this.title = title;
      this.year = year;
      this.rating = 0;
      this.imageUrl = image;
    }

    setRating(newRating: number) {
        this.rating = newRating;
    }
}