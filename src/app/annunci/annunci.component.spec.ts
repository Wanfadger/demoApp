import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnunciComponent } from './annunci.component';

describe('AnnunciComponent', () => {
  let component: AnnunciComponent;
  let fixture: ComponentFixture<AnnunciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnunciComponent]
    });
    fixture = TestBed.createComponent(AnnunciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
