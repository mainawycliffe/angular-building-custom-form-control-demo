import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-building-custom-form-control-demo';

  formGroup: FormGroup = null;

  public email = 'mainawycliffe@theinfogrid.com';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: [this.email, [Validators.email]],
      email2: ['@theinfogrid.com', [Validators.email]],
      email3: ['hello', [Validators.email]],
      email4: [null, [Validators.email]]
    });
  }
}
