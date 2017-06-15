import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'rating',
	template: `<span class="rating">
		   <span class="glyphicon"
		   	  *ngFor="let value of [1,2,3,4,5]"
		      [ngClass]="{ 'glyphicon-star': rating >= value, 'glyphicon-star-empty': (rating||0) < value }"
		      (click)="rating = value"></span>
			<span class="badge">{{rating || 0}}/5</span>
		</span>`
})

export class RatingComponent { 
	@Input() rating: number;

	constructor() {

	}
}