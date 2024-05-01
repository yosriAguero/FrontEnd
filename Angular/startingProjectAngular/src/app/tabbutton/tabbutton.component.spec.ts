import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbuttonComponent } from './tabbutton.component';

describe('TabbuttonComponent', () => {
  let component: TabbuttonComponent;
  let fixture: ComponentFixture<TabbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabbuttonComponent]
    });
    fixture = TestBed.createComponent(TabbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
