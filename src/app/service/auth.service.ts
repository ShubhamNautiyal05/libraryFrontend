import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { tap } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const url = `${this.baseUrl}/auth/login`;
    const body = { username, password };

    return this.http.post<any>(url, body).pipe(
      tap((response: any) => {
        if (response && response.jwtToken) {
          this.storeToken(response.jwtToken); // Store the token
        }
      })
    );
  }

  storeToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }
}
