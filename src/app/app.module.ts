import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/page/homepage/homepage.component';
import { NotFoundPageComponent } from './components/page/not-found-page/not-found-page.component';
import { LoginPageComponent } from './components/page/login-page/login-page.component';
import { SignUpPageComponent } from './components/page/sign-up-page/sign-up-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollEffectDirective } from './directives/scroll-effect.directive';
import { ScrollControlledTextDirective } from './directives/scroll-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    PasswordInputComponent,
    ScrollEffectDirective,
    ScrollControlledTextDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
