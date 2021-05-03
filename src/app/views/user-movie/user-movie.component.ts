import { Component, OnInit } from '@angular/core';
import { movies } from '../../data/movies';

@Component({
  selector: 'app-user-movie',
  templateUrl: './user-movie.component.html',
  styleUrls: ['./user-movie.component.css'],
})
export class UserMovieComponent implements OnInit {
  movies = movies;
  constructor() {}

  ngOnInit(): void {}
}
