import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcorrenciaComponent } from './concorrencia.component';

describe('ConcorrenciaComponent', () => {
  let component: ConcorrenciaComponent;
  let fixture: ComponentFixture<ConcorrenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcorrenciaComponent]
    });
    fixture = TestBed.createComponent(ConcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
