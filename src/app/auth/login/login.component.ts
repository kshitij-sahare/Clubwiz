import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Assuming you have an AuthService to handle authentication
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // Stop here if form is invalid
    if (this.loginForm!.controls['email']?.errors?.['required'] && this.loginForm!.controls['password']?.errors?.['required'])
      return

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

console.log(this.loginForm.get('remember')?.value);

    this.authService.login(email, password).subscribe({
      next: (data) => {
        console.log(data.length);
        if (data.length == 1) {
          this.authService.setUser(JSON.stringify(data[0]), this.loginForm.get('remember')?.value)
        }
        else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      error: (err) => {
        this.errorMessage = 'Some Error Occured';
      }
    });
  }

  onGoogleLogin() {
    this.authService.loginWithGoogle().subscribe({
      next: (data) => {
        // Navigate to home or dashboard upon successful login
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = 'Google login failed';
      }
    });
  }

  onFacebookLogin() {
    this.authService.loginWithFacebook().subscribe({
      next: (data) => {
        // Navigate to home or dashboard upon successful login
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = 'Facebook login failed';
      }
    });
  }

  onSkipLogin() {
    this.router.navigate(['/home']);
  }
}
