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
    } = this.authService.authSignup(this.signupForm.value);

    if (result.status === 203) {
      this.router.navigate(['/pilihan-paket']);
    } else if (result.status === 502) {
      this.signupError = false;
      this.signupDataNotCompleteError = true;
    } else {
      this.signupError = true;
      this.signupDataNotCompleteError = false;
      this.signupForm.reset();
      this.signupForm.value.username = '';
      this.signupForm.value.password = '';
    }
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
