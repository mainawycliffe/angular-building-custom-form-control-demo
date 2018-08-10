import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-email-address-input',
  templateUrl: './email-address-input.component.html',
  styleUrls: ['./email-address-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailAddressInputComponent),
      multi: true
    }
  ]
})
export class EmailAddressInputComponent
  implements ControlValueAccessor, OnInit {
  public username;
  public emailProvider;
  public _value;

  @Input()
  disabled = false;

  constructor() {}

  ngOnInit() {}

  get value() {
    const email = this._value;
    return email;
  }

  set value(val) {
    if (val) {
      this._value = val;
      [this.username, this.emailProvider] = val.split('@');
      this.propagateChange(this._value);
    }
  }

  addEvent($event) {
    this.value = this.username + '@' + this.emailProvider;
    this.propagateChange(this.value);
  }

  /* Takes the value  */
  writeValue(value: any) {
    if (value !== undefined) {
      this.value = value;
      this.propagateChange(this.value);
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
