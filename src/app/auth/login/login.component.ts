import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  fg = new FormGroup({
    email: new FormControl('admin2@test.com'),
    password: new FormControl('bestPassw0rd'),
  });

  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin(): void {

    const login = this.fg.value as Login;
    this.authService.login(login).subscribe({
      next: (v) => {
        this.authService.setLoggedInUser(v);
        this.router.navigate(['/requirement-approval']);
      },
      error: (e) => {
        console.log('e', e)
        this.errorMessage = e.error;
      },
    });
  }
}
