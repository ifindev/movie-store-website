import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginError: boolean = false;
  loginNotProvidedError: boolean = false;

  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  onSubmit(): void {
    console.log(this.loginForm.value);
    if (
      this.loginForm.value.username == '' ||
      this.loginForm.value.password == ''
    ) {
      this.loginNotProvidedError = true;
      this.loginError = false;
    } else {
      this.loginNotProvidedError = false;
      const result: {
        status: number;
        msg: string;
      } = this.authService.authLogin(this.loginForm.value);
      console.warn(result);
      if (result.status === 202) {
        this.router.navigate(['/movie-dashboard']);
      } else {
        this.loginError = true;
        this.router.navigate(['/login']);
      }
    }
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
