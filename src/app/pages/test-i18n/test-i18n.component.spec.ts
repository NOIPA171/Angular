import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestI18nComponent } from './test-i18n.component';

describe('TestI18nComponent', () => {
  let component: TestI18nComponent;
  let fixture: ComponentFixture<TestI18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestI18nComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
