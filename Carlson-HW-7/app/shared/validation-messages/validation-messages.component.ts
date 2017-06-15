import { Component, Input } from '@angular/core';

@Component({
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

export class ValidationMessagesComponent { 

    @Input() model;
    @Input() set messages(value) {
        this.validators = [];
        Object.keys(value).forEach(x => {
            this.validators.push({ key: x, message: value[x] });
        });
    }

    validators;
}