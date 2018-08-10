import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAddressInputComponent } from './email-address-input.component';

describe('EmailAddressInputComponent', () => {
  let component: EmailAddressInputComponent;
  let fixture: ComponentFixture<EmailAddressInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailAddressInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAddressInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
