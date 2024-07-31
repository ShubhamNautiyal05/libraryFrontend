import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:8080/api/students'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Token is added automatically
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // Token is added automatically
  }

  addStudent(student: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, student);
  }
}
