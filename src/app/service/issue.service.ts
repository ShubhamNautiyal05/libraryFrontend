import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = 'http://localhost:8080/api/issues';

  constructor(private http: HttpClient) { }

  getIssueDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addIssue(issue: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, issue);
  }

  returnBook(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/return`, {});
  }

  deleteRecord(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`,{});
  }
}
