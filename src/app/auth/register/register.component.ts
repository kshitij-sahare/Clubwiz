import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup<any>;

  submitted = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({

          userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  signInWithGmail() {

  }
  get f() {
    return this.registerForm.controls;
  }

  mustMatch(password: string, confirmPassword: string) {
    console.log(password, confirmPassword);

    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];
      if (matchingControl.errors) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.submitted = true;



    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const userName = this.registerForm.get('userName')?.value;

    this.authService.register({'userName': userName, "email": email, "password": password }).subscribe((data: any) => {
      this.router.navigate(['/auth/login']);
    }, (err: any) => {
      this.errorMessage = 'Registration failed. Please try again.';
    });
  }
}
