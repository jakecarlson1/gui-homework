"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const movie_list_component_1 = require("./movie-list/movie-list.component");
const movie_editor_component_1 = require("./movie-editor/movie-editor.component");
const movie_repository_service_1 = require("./api/movie-repository.service");
const shared_module_1 = require("../shared/shared.module");
var routes = [
    {
        path: '',
        component: movie_list_component_1.MovieListComponent
    },
    {
        path: 'add',
        component: movie_editor_component_1.MovieEditorComponent
    },
    {
        path: 'edit/:id',
        component: movie_editor_component_1.MovieEditorComponent
    }
];
let MoviesModule = class MoviesModule {
};
MoviesModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes),
            forms_1.FormsModule,
            http_1.HttpModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            movie_list_component_1.MovieListComponent,
            movie_editor_component_1.MovieEditorComponent
        ],
        exports: [
            movie_list_component_1.MovieListComponent,
            movie_editor_component_1.MovieEditorComponent
        ],
        providers: [
            movie_repository_service_1.MovieRepository
        ]
    })
], MoviesModule);
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movies.module.js.map