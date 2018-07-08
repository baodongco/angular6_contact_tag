import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTagComponent } from './contact-tag.component';

describe('ContactTagComponent', () => {
  let component: ContactTagComponent;
  let fixture: ComponentFixture<ContactTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
