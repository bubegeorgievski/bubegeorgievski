import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoceComponent } from './dialog-boce.component';

describe('DialogBoceComponent', () => {
  let component: DialogBoceComponent;
  let fixture: ComponentFixture<DialogBoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBoceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
