import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgforComponent } from './structural-directive-ngfor.component';

describe('StructuralDirectiveNgforComponent', () => {
  let component: StructuralDirectiveNgforComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
