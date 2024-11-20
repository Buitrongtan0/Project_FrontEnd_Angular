import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {
  signUpForm!: FormGroup;

  passwordHidden: boolean = true;

  constructor(private fb: FormBuilder,private userService: UserService,private router: Router
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  handleSubmit() {
    if (!this.signUpForm.valid) return;

    let signUpModel: User = { ...this.signUpForm.value };

    this.userService.getSignUpUsers(signUpModel).subscribe(
      (response) => {
        if (response.errCode === 0) {
          this.router.navigate(['/login']);
        }
      },
      (errorResponse) => {
        // this.toastrService.error(errorResponse.error)
      } 
    )
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
