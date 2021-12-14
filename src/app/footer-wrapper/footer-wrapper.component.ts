import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-wrapper',
  templateUrl: './footer-wrapper.component.html',
  styleUrls: ['./footer-wrapper.component.scss']
})
export class FooterWrapperComponent implements OnInit {

  link: string = 'http://localhost:3004/main.js';

  constructor() { }

  ngOnInit(): void {
  }

}
