"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const rating_component_1 = require("./rating/rating.component");
const validation_messages_component_1 = require("./validation-messages/validation-messages.component");
const year_validator_directive_1 = require("./validators/year-validator.directive");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            rating_component_1.RatingComponent,
            validation_messages_component_1.ValidationMessagesComponent,
            year_validator_directive_1.YearValidatorDirective
        ],
        exports: [
            rating_component_1.RatingComponent,
            common_1.CommonModule,
            validation_messages_component_1.ValidationMessagesComponent,
            year_validator_directive_1.YearValidatorDirective
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map