import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSSRComponent } from './test-ssr.component';

describe('TestSSRComponent', () => {
  let component: TestSSRComponent;
  let fixture: ComponentFixture<TestSSRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSSRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSSRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
