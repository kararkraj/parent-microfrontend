import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-wrapper',
  template: `
    <micro-app *axLazyElement="link" (emitDataToParent)="dataToParent($event)" 
    [dataFromParent]="dataToChild"></micro-app>
  `,
  styles: [
  ]
})
export class ChildWrapperComponent implements OnInit, OnChanges {

  link: string = 'http://localhost:3000/main.js'
  @Input() dataToChild: string = "";
  @Output() dataFromChild = new EventEmitter<string>()
  listOfData: string[] = [];

  constructor() { }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  dataToParent($event: any) {
    this.dataFromChild.emit($event.detail);
  }

}
