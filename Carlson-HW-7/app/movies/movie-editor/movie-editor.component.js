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
const router_1 = require("@angular/router");
const movie_repository_service_1 = require("../api/movie-repository.service");
const movie_1 = require("../api/movie");
let MovieEditorComponent = class MovieEditorComponent {
    constructor(movieRepository, route, router) {
        this.movieRepository = movieRepository;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe(x => this.loadMovie(+x['id']));
    }
    addMovie() {
        if (this.movie.id == -1) {
            this.movieRepository.add(this.movie);
        }
        else {
            this.movieRepository.update(this.movie);
        }
        this.router.navigate(['/']);
    }
    loadMovie(id) {
        if (id) {
            this.movieRepository.get(id).then(x => this.movie = x);
        }
        else {
            this.movie = new movie_1.Movie();
            this.movie.id = -1;
        }
    }
};
MovieEditorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'movie-editor',
        templateUrl: 'movie-editor.component.html',
        styleUrls: ['movie-editor.component.css']
    }),
    __metadata("design:paramtypes", [movie_repository_service_1.MovieRepository,
        router_1.ActivatedRoute,
        router_1.Router])
], MovieEditorComponent);
exports.MovieEditorComponent = MovieEditorComponent;
//# sourceMappingURL=movie-editor.component.js.map