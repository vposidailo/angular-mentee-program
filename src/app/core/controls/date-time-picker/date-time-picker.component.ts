import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css']
})
export class DateTimePickerComponent implements OnInit, OnChanges {

  releaseDateForm = new FormGroup({
    releasedate: new FormControl()
  });

  @Input() public releaseDate = '';
  @Output() releaseDateOutput: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.releaseDateForm.get('releasedate').valueChanges
      .pipe(
        debounceTime(1000),
        filter((date: string) => date.length === 10))
      .subscribe((date: string) => {
        this.releaseDateOutput.emit(date);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.releaseDateForm.controls['releasedate'].setValue(changes['releaseDate'].currentValue);
  }
}
