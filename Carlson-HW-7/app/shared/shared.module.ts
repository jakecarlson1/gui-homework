import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RatingComponent } from './rating/rating.component';
import { ValidationMessagesComponent } from "./validation-messages/validation-messages.component";
import { YearValidatorDirective } from './validators/year-validator.directive';

@NgModule({
	imports: [ 
		CommonModule,
		FormsModule
	],
	declarations: [ 
		RatingComponent,
		ValidationMessagesComponent,
		YearValidatorDirective
	],
	exports: [ 
		RatingComponent, 
		CommonModule,
		ValidationMessagesComponent,
		YearValidatorDirective
	]
})

export class SharedModule { }