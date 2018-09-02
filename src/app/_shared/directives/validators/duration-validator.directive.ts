import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '../../../../../node_modules/@angular/forms';

@Directive({
  selector: '[appDurationValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: DurationValidatorDirective, multi: true }
  ]
})
export class DurationValidatorDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} | null {
    const numberStr = control.value;

    if (isNaN(numberStr) || numberStr < 0) {
      return {'duration': true };
    }

    return null;
  }

}
