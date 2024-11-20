import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/page/homepage/homepage.component';
import { NotFoundPageComponent } from './components/page/not-found-page/not-found-page.component';
import { SignUpPageComponent } from './components/page/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './components/page/login-page/login-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
