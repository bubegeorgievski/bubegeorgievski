import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRasoComponent } from './dialog-raso.component';

describe('DialogRasoComponent', () => {
  let component: DialogRasoComponent;
  let fixture: ComponentFixture<DialogRasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
