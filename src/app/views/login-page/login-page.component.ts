import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  onSubmit(): void {
    const result: { status: number; msg: string } = this.authService.authLogin(
      this.loginForm.value
    );
    console.warn(result);
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
}
