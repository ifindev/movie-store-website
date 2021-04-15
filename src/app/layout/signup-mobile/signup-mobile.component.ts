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
    const result: {
      status: number;
      msg: string;
    } = this.authService.authLogin(this.signupForm.value);

    if (result.status === 203) {
      this.router.navigate(['/pilihan-paket']);
    }
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
