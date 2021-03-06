import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciaComponent } from './competencia.component';

describe('CompetenciaComponent', () => {
  let component: CompetenciaComponent;
  let fixture: ComponentFixture<CompetenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
