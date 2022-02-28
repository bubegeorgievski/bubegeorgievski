import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBubeComponent } from './dialog-bube.component';

describe('DialogBubeComponent', () => {
  let component: DialogBubeComponent;
  let fixture: ComponentFixture<DialogBubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
