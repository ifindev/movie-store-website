import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-mobile',
  templateUrl: './signup-mobile.component.html',
  styleUrls: ['./signup-mobile.component.css'],
})
export class SignupMobileComponent implements OnInit {
  signupError: boolean = false;
  signupDataNotCompleteError: boolean = false;

  signupForm = this.formBuilder.group({
    namaLengkap: '',
    username: '',
    email: '',
    password: '',
  });

  onSubmit(): void {
    // TODO encrypt password dulu
    // this.signupForm.value.password = bcrypt(this.signupForm.value.password);
    console.warn('Pendaftaran kamu berhasil!', this.signupForm.value);
    this.signupForm.reset();
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
}
