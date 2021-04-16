import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-bfa',
  templateUrl: './navbar-bfa.component.html',
  styleUrls: ['./navbar-bfa.component.css'],
})
export class NavbarBfaComponent implements OnInit {
  @Input() moviesInCart: number;

  constructor() {}

  ngOnInit(): void {}
}
