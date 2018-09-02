import { Directive } from '@angular/core';
import { AbstractControl } from '../../../../../node_modules/@angular/forms';
import { NG_VALIDATORS, Validator } from '@angular/forms';
const DATE_REGEX = new RegExp(/^(\d{2}|\d{1})\/(\d{2}|\d{1})\/\d{4}$/);

@Directive({
  selector: '[appDateValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true }
  ]
})

export class DateValidatorDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} | null {
    const dateStr = control.value;
    // Length of months (will update for leap years)
    const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    // Object to return if date is invalid
    const invalidObj = { 'date': true };
    // First check for m/d/yyyy or mm/dd/yyyy format
    // If the pattern is wrong, don't validate dates yet

    // Parse the date input to integers
    const parts = dateStr.split('/');
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Make sure date is in range
    if (isNaN(year) || year < 1900 || month === 0 || month > 12) {
      return invalidObj;
    }
    // Adjust for leap years
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthLength[1] = 29;
    }
    // Check the range of the day
    if (!(day > 0 && day <= monthLength[month - 1])) {
      return invalidObj;
    }

    return null;
  }
}
