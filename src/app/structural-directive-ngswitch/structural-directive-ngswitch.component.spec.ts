import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgswitchComponent } from './structural-directive-ngswitch.component';

describe('StructuralDirectiveNgswitchComponent', () => {
  let component: StructuralDirectiveNgswitchComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveNgswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
