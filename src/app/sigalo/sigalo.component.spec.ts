import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigaloComponent } from './sigalo.component';

describe('SigaloComponent', () => {
  let component: SigaloComponent;
  let fixture: ComponentFixture<SigaloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigaloComponent]
    });
    fixture = TestBed.createComponent(SigaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
