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
let ValidationMessagesComponent = class ValidationMessagesComponent {
    set messages(value) {
        this.validators = [];
        Object.keys(value).forEach(x => {
            this.validators.push({ key: x, message: value[x] });
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ValidationMessagesComponent.prototype, "model", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ValidationMessagesComponent.prototype, "messages", null);
ValidationMessagesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'validation-messages',
        template: `<div *ngIf="model.errors && model.touched"
                class="alert alert-danger" role="alert">
                <ul>
                    <li *ngFor="let validator of validators"
                        [hidden]="!model.errors[validator.key]">
                        {{ validator.message }}
                    </li>
                </ul>
            </div>
`
    })
], ValidationMessagesComponent);
exports.ValidationMessagesComponent = ValidationMessagesComponent;
//# sourceMappingURL=validation-messages.component.js.map