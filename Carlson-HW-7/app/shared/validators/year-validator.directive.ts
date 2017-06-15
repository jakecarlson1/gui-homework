import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({
  selector: '[year]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: YearValidatorDirective, multi: true }
  ]
})
export class YearValidatorDirective implements Validator {  
  validate(control: AbstractControl): { [key: string]: any } {
      var isValid = new RegExp("(?:(?:19|20)[0-9]{2})").test(control.value);
      return isValid ? null : { 'year': true };
  }
}