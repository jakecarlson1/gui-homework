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
let RatingComponent = class RatingComponent {
    constructor() {
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RatingComponent.prototype, "rating", void 0);
RatingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rating',
        template: `<span class="rating">
		   <span class="glyphicon"
		   	  *ngFor="let value of [1,2,3,4,5]"
		      [ngClass]="{ 'glyphicon-star': rating >= value, 'glyphicon-star-empty': (rating||0) < value }"
		      (click)="rating = value"></span>
			<span class="badge">{{rating || 0}}/5</span>
		</span>`
    }),
    __metadata("design:paramtypes", [])
], RatingComponent);
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map