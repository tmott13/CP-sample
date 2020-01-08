import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTicketsComponent } from './dialog-tickets.component';

describe('DialogTicketsComponent', () => {
  let component: DialogTicketsComponent;
  let fixture: ComponentFixture<DialogTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
