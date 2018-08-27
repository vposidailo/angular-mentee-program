import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit, OnChanges {

  durationForm = new FormGroup({
    duration: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')] )
  });

  @Input() public minutes = 0;
  @Output() public durationOutput: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.durationForm.get('duration').valueChanges
    .pipe(
      debounceTime(1000))
    .subscribe((minutes: number) => this.durationOutput.emit(minutes));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.durationForm.controls['duration'].setValue(changes['minutes'].currentValue);
  }
}
