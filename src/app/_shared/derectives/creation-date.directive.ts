import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreationDate]'
})

export class CreationDateDirective implements OnInit {
  @Input() creationDate: Date;

  constructor(private el: ElementRef) {
  }

  ngOnInit () {
    if (this.creationDate < new Date() && this.creationDate >= new Date(new Date().setDate(-14))) {
      this.el.nativeElement.style.borderColor = '#28a745';
    } else if (this.creationDate > new Date()) {
      this.el.nativeElement.style.borderColor = '#007bff';
    }
  }
}
