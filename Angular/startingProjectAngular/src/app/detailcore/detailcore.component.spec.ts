import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcoreComponent } from './detailcore.component';

describe('DetailcoreComponent', () => {
  let component: DetailcoreComponent;
  let fixture: ComponentFixture<DetailcoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcoreComponent]
    });
    fixture = TestBed.createComponent(DetailcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
