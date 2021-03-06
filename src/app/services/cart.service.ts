import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  movieCart = [];

  addToCart(movie) {
    const inCart = this.movieCart.find((item) => item.id === movie.id);
    if (!inCart) {
      this.movieCart.push(movie);
    }
  }

  removeFromCart(movie) {
    this.movieCart = this.movieCart.filter((item) => item.id !== movie.id);
    console.log('removed from cart: ', movie);
    console.log(this.movieCart);
  }

  getMoviesInCart() {
    return this.movieCart;
  }

  constructor() {}
}
