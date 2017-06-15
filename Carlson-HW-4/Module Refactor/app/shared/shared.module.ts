import { NgModule }      from '@angular/core';

import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  imports: [ 
  ],
  declarations: [
    PhonePipe
  ],
  exports: [
    PhonePipe
  ]
})

export class SharedModule { }
