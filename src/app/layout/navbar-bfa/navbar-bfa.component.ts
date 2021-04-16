import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar-bfa',
  templateUrl: './navbar-bfa.component.html',
  styleUrls: ['./navbar-bfa.component.css'],
})
export class NavbarBfaComponent implements OnInit {
  moviesInCart: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.moviesInCart = this.cartService.getMoviesInCart().length;
  }
}
