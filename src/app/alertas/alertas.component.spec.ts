import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasComponent } from './alertas.component';

describe('AlertasComponent', () => {
  let component: AlertasComponent;
  let fixture: ComponentFixture<AlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
