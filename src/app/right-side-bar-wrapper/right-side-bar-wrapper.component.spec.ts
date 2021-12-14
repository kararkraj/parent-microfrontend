import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideBarWrapperComponent } from './right-side-bar-wrapper.component';

describe('RightSideBarWrapperComponent', () => {
  let component: RightSideBarWrapperComponent;
  let fixture: ComponentFixture<RightSideBarWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideBarWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideBarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
