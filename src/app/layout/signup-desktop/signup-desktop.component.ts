import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-desktop',
  templateUrl: './signup-desktop.component.html',
  styleUrls: ['./signup-desktop.component.css'],
})
export class SignupDesktopComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
