import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { MembershipChoiceComponent } from './views/membership-choice/membership-choice.component';
import { PacketChoiceComponent } from './views/packet-choice/packet-choice.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { MovieDashboardComponent } from './views/movie-dashboard/movie-dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NavbarBfaComponent } from './layout/navbar-bfa/navbar-bfa.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { CardComponent } from './utils/card/card.component';
import { ModalComponent } from './utils/modal/modal.component';
import { BreadcrumbComponent } from './utils/breadcrumb/breadcrumb.component';
import { CartComponent } from './views/cart/cart.component';
import { UserMovieComponent } from './views/user-movie/user-movie.component';
import { SignupMobileComponent } from './layout/signup-mobile/signup-mobile.component';
import { SignupDesktopComponent } from './layout/signup-desktop/signup-desktop.component';
import { MovieCardComponent } from './utils/movie-card/movie-card.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'daftar', component: SignupPageComponent },
  { path: 'pilihan-paket', component: PacketChoiceComponent },
  { path: 'movie-dashboard', component: MovieDashboardComponent },
  { path: 'movie/:movieId', component: MovieDetailComponent },
  { path: 'user-movie', component: UserMovieComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    MembershipChoiceComponent,
    PacketChoiceComponent,
    MovieDetailComponent,
    MovieDashboardComponent,
    NavbarComponent,
    NavbarBfaComponent,
    FooterComponent,
    UserProfileComponent,
    CardComponent,
    ModalComponent,
    BreadcrumbComponent,
    CartComponent,
    UserMovieComponent,
    SignupMobileComponent,
    SignupDesktopComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
