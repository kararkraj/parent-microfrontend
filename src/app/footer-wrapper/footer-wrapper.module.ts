import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterWrapperComponent } from './footer-wrapper.component';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  declarations: [
    FooterWrapperComponent
  ],
  imports: [
    CommonModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FooterWrapperComponent]
})
export class FooterWrapperModule { }
