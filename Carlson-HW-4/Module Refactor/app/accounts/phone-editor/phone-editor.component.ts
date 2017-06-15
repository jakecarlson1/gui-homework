import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'phone-editor',
    templateUrl: 'phone-editor.component.html',
    styleUrls: ['phone-editor.component.css']
})
export class PhoneEditorComponent {
    @Input() model: any[];
    @Input() phoneTypes: string[];

    _phoneEntry: any;

    constructor() {
        this._phoneEntry = {};
    }

    addPhone(){
        this.model.push(this._phoneEntry);
        this._phoneEntry = {};
    }
}
