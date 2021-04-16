import { Component, OnInit } from '@angular/core';
import { movies } from '../../data/movies';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css'],
})
export class MovieDashboardComponent implements OnInit {
  movies = movies;
  constructor() {}

  ngOnInit(): void {}
}
