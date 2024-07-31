import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response:any) => {
        if (response.jwtToken) {
          this.authService.storeToken(response.jwtToken);
          // Navigate to the dashboard page
          this.router.navigate(['/dashboard']);
        } else {
          console.error('No JWT token received');
        }
      },
      (error:any) => {
        console.error('Login failed', error);
      }
    );
  }

}
