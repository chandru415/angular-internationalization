import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleOptionComponent } from './locale-option.component';

describe('LocaleOptionComponent', () => {
  let component: LocaleOptionComponent;
  let fixture: ComponentFixture<LocaleOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaleOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
