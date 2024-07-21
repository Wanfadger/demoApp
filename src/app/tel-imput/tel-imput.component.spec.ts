import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelIMputComponent } from './tel-imput.component';

describe('TelIMputComponent', () => {
  let component: TelIMputComponent;
  let fixture: ComponentFixture<TelIMputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelIMputComponent]
    });
    fixture = TestBed.createComponent(TelIMputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
