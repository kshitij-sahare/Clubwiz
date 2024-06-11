import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(user: object) {
    return this.http.post(this.apiUrl, { ...user, "isAdmin": false });
  }


  private apiUrl = 'http://localhost:3000/users'; // Replace with your backend API URL

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<any> {
    let data = this.http.get(`${this.apiUrl}?email=${email}&password=${password}`)
    console.log(`${this.apiUrl}?email=${email}&password=${password}`);

    return data
    // return this.http.get<any>(`${this.apiUrl}/login`, { email, password })
    //   .pipe(
    //     map(response => {
    //       // Store the user details and JWT token in local storage to keep the user logged in
    //       if (response && response.token) {
    //         localStorage.setItem('currentUser', JSON.stringify(response));
    //       }
    //       return response;
    //     }),
    //     catchError(error => {
    //       // Handle error response
    //       return of(null);
    //     })
    //   );
  }

  loginWithGoogle(): Observable<any> {
    // Implement Google login logic here
    // This could be a redirect to the Google OAuth page or an API call to your backend
    return this.http.get<any>(`${this.apiUrl}/auth/google`)
      .pipe(
        map(response => {
          // Store the user details and JWT token in local storage to keep the user logged in
          if (response && response.token) {
            localStorage.setItem('currentUser', JSON.stringify(response));
          }
          return response;
        }),
        catchError(error => {
          // Handle error response
          return of(null);
        })
      );
  }

  loginWithFacebook(): Observable<any> {
    // Implement Facebook login logic here
    // This could be a redirect to the Facebook OAuth page or an API call to your backend
    return this.http.get<any>(`${this.apiUrl}/auth/facebook`)
      .pipe(
        map(response => {
          // Store the user details and JWT token in local storage to keep the user logged in
          if (response && response.token) {
            localStorage.setItem('currentUser', JSON.stringify(response));
          }
          return response;
        }),
        catchError(error => {
          // Handle error response
          return of(null);
        })
      );
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  setUser(userObj: any, remember: boolean): any {
    if (remember) {
      localStorage.setItem("currentUser", userObj);
    }
    else {
      sessionStorage.setItem("currentUser", userObj);
    }
    this.router.navigate(['/home']);

  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);
  }
}
