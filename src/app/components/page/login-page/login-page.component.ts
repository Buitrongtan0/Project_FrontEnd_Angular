import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm!: FormGroup;

  passwordHidden: boolean = true;
  
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,private localStorageService: LocalStorageService ){}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    let loginModel: User = { ...this.loginForm.value };

    this.userService.getLogin(loginModel).subscribe(
      (response) => {
        if (response.errCode === 0) {
          this.localStorageService.setItem('user', { login: true, name: response.user.firstName });
          this.router.navigate(['/']);
        }
      },
      (errorResponse) => {
        // this.toastrService.error(errorResponse.error)
      } 
    );
  }

  togglePasswordHidden() {
    this.passwordHidden = !this.passwordHidden;
  }

  isPasswordHidden(): string {
    return this.passwordHidden ? 'password' : 'text';
  }

  isPasswordHiddenIcon(): string {
    return this.passwordHidden ? 'fa-eye-slash' : 'fa-eye text-primary';
  }
}
