"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let MovieListService = class MovieListService {
    getItems() {
        return [
            new MovieItem('I am Legend', 2007, './images/i_am_legend.jpg'),
            new MovieItem('Independence Day', 1996, './images/independence_day.jpg'),
            new MovieItem('Hancock', 2008, './images/hancock.jpg')
        ];
    }
};
MovieListService = __decorate([
    core_1.Injectable()
], MovieListService);
exports.MovieListService = MovieListService;
class MovieItem {
    constructor(title, year, image) {
        this.title = title;
        this.year = year;
        this.rating = 0;
        this.imageUrl = image;
    }
    setRating(newRating) {
        this.rating = newRating;
    }
}
//# sourceMappingURL=movie-list-service.js.map