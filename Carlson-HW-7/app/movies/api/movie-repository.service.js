"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/toPromise");
let MovieRepository = class MovieRepository {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'api/movies';
    }
    getIndex(id) {
        for (var i = this._movies.length; i--;) {
            var movie = this._movies[i];
            if (movie.id == id)
                return i;
        }
        return -1;
    }
    list() {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(res => res.json().data)
            .catch(err => this.handleError(err));
    }
    get(id) {
        return this.http.get(`${this.apiUrl}/${id}`)
            .toPromise()
            .then(res => res.json().data)
            .catch(err => this.handleError(err));
    }
    add(movie) {
        this.list().then(x => movie.id = x.length + 1);
        return this.http.post(this.apiUrl, movie)
            .toPromise()
            .then(res => res.json().data)
            .catch(err => this.handleError(err));
    }
    update(movie) {
        return this.http.put(`${this.apiUrl}/${movie.id}`, movie)
            .toPromise()
            .then(res => res.json())
            .catch(err => this.handleError(err));
    }
    delete(id) {
        return this.http.delete(`${this.apiUrl}/${id}`)
            .toPromise()
            .catch(err => this.handleError(err));
    }
    handleError(error) {
        console.log("Error: ", error);
        return Promise.reject(error.message || error);
    }
    extractData(res) {
        return res.json();
    }
};
MovieRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieRepository);
exports.MovieRepository = MovieRepository;
//# sourceMappingURL=movie-repository.service.js.map