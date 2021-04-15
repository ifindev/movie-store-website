import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-desktop',
  templateUrl: './signup-desktop.component.html',
  styleUrls: ['./signup-desktop.component.css'],
})
export class SignupDesktopComponent implements OnInit {
  signupError: boolean = false;
  signupDataNotCompleteError: boolean = false;

  signupForm = this.formBuilder.group({
    namaLengkap: '',
    username: '',
    email: '',
    password: '',
  });

  onSubmit(): void {
    const result: {
      status: number;
      msg: string;
    } = this.authService.authLogin(this.signupForm.value);
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
}
