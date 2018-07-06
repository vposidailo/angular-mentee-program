import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCreationDate]'
})
export class CreationDateDirective {
  @Input() creationDate: Date;

  constructor(private el: ElementRef) { 
    
  }

  ngOnInit() {

    console.log(this.creationDate >= new Date(new Date().setDate(-14)));
    console.log(this.creationDate < new Date());
    console.log(new Date());
    console.log(this.creationDate );
    if(this.creationDate < new Date() && this.creationDate >= new Date(new Date().setDate(-14)))
    {
      this.el.nativeElement.style.border = '2px solid #28a745';
    }
    else if(this.creationDate > new Date())
    {
      this.el.nativeElement.style.border = '2px solid #007bff';
    }
  }

}
