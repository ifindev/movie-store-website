import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-mobile',
  templateUrl: './signup-mobile.component.html',
  styleUrls: ['./signup-mobile.component.css'],
})
export class SignupMobileComponent implements OnInit {
  signupForm = this.formBuilder.group({
    namaLengkap: '',
    username: '',
    email: '',
    password: '',
  });

  @Output() signupEvent: EventEmitter<object> = new EventEmitter();

  onSubmit(): void {
    console.warn('Pendaftaran kamu berhasil!', this.signupForm.value);
    this.signupForm.reset();
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
