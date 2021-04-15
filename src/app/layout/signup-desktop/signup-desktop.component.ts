import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-desktop',
  templateUrl: './signup-desktop.component.html',
  styleUrls: ['./signup-desktop.component.css'],
})
export class SignupDesktopComponent implements OnInit {
  signupForm = this.formBuilder.group({
    namaUser: '',
    userName: '',
    userEmail: '',
    userPassword: '',
  });

  onSubmit(): void {
    // TODO encrypt password dulu
    // this.signupForm.value.password = bcrypt(this.signupForm.value.password);
    console.warn('Pendaftaran kamu berhasil!', this.signupForm.value);
    this.signupForm.reset();
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
