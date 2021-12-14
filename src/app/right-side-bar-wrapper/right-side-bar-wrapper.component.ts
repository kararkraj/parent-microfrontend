import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-side-bar-wrapper',
  templateUrl: './right-side-bar-wrapper.component.html',
  styleUrls: ['./right-side-bar-wrapper.component.scss']
})
export class RightSideBarWrapperComponent implements OnInit {

  link: string = 'http://localhost:3002/main.js';
  @Input() memoryUsed!: number;
  @Output() updateMemoryUsed: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
