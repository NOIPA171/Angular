import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalVarComponent } from './local-var.component';

describe('LocalVarComponent', () => {
  let component: LocalVarComponent;
  let fixture: ComponentFixture<LocalVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalVarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});