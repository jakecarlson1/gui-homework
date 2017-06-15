"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
let MockApiService = class MockApiService extends angular_in_memory_web_api_1.InMemoryDbService {
    createDb() {
        let movies = [
            { id: 1, title: 'Batman', year: 1988, imagePath: 'images/shining.jpg', rating: 1 },
            { id: 2, title: 'Home Alone', year: 1990, imagePath: 'images/nemo.jpg', rating: 2 },
            { id: 3, title: 'Titanic', year: 1996, imagePath: 'images/hungergames.jpg', rating: 3 }
        ];
        return { movies };
    }
};
MockApiService = __decorate([
    core_1.Injectable()
], MockApiService);
exports.MockApiService = MockApiService;
//# sourceMappingURL=mock-api.service.js.map