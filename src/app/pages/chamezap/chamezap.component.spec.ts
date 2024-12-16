import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamezapComponent } from './chamezap.component';

describe('ChamezapComponent', () => {
  let component: ChamezapComponent;
  let fixture: ComponentFixture<ChamezapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamezapComponent]
    });
    fixture = TestBed.createComponent(ChamezapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
