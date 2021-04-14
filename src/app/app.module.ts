import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { MembershipChoiceComponent } from './views/membership-choice/membership-choice.component';
import { PacketChoiceComponent } from './views/packet-choice/packet-choice.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { MovieDashboardComponent } from './views/movie-dashboard/movie-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    MembershipChoiceComponent,
    PacketChoiceComponent,
    MovieDetailComponent,
    MovieDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
