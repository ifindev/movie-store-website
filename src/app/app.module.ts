import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'daftar', component: SignupPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
