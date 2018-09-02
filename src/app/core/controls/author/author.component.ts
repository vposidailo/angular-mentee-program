import { Component, OnInit, EventEmitter, Output, forwardRef, Injectable } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '../../../../../node_modules/@angular/forms';
import { Observable, pipe } from '../../../../../node_modules/rxjs';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { tap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorComponent),
      multi: true
    }
  ]
})
@Injectable()
export class AuthorComponent implements ControlValueAccessor, OnInit {

  constructor(private http: HttpClient) {}
  // The internal data model
  private innerValue: any = '';
  public authors = [''];
  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void;
  private onChangeCallback: (_: any) => void;

  ngOnInit() {
    // this.http
    // .get(`http://localhost:3004/authors`)
    // .subscribe((data: any) => {
    //   data.forEach(function(element) {
    //     this.authors.push(element.name);
    //   });
    // });
  }
  // get accessor
  get value(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
        this.innerValue = v;
        this.onChangeCallback(v);
    }
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
        this.innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  public requestAutocompleteItems = (text: string): Observable<Response> => {
    return this.http
        .get(`http://localhost:3004/authors`)
        .pipe(map((data: any) => data.map(item => item.name)));
  }
}
