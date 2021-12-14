import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSideBarWrapperComponent } from './right-side-bar-wrapper.component';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  declarations: [
    RightSideBarWrapperComponent
  ],
  imports: [
    CommonModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RightSideBarWrapperComponent]
})
export class RightSideBarWrapperModule { }
