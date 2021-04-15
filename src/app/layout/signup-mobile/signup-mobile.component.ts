import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-mobile',
  templateUrl: './signup-mobile.component.html',
  styleUrls: ['./signup-mobile.component.css'],
})
export class SignupMobileComponent implements OnInit {
  @Output() signupEvent: EventEmitter<object> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
