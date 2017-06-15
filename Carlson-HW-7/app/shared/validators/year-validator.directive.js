"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let YearValidatorDirective = YearValidatorDirective_1 = class YearValidatorDirective {
    validate(control) {
        var isValid = new RegExp("(?:(?:19|20)[0-9]{2})").test(control.value);
        return isValid ? null : { 'year': true };
    }
};
YearValidatorDirective = YearValidatorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[year]',
        providers: [
            { provide: forms_1.NG_VALIDATORS, useExisting: YearValidatorDirective_1, multi: true }
        ]
    })
], YearValidatorDirective);
exports.YearValidatorDirective = YearValidatorDirective;
var YearValidatorDirective_1;
//# sourceMappingURL=year-validator.directive.js.map