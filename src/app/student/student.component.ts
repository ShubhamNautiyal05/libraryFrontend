import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-students',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: any[] = [];
  addStudentForm!:FormGroup;

  constructor(private studentService: StudentService, private fb:FormBuilder) { 
  }

  ngOnInit(): void {
    this.loadStudents();
  }



  loadStudents(): void {
    this.studentService.getStudents().subscribe(
      data => this.students = data,
      error => console.error('Error fetching student data', error)
    );
  }

  deleteStudent(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this student?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.deleteStudent(id).subscribe(
          () => this.loadStudents(),
          (error: any) => console.error('Error deleting student', error)
        );
        Swal.fire(
          'Deleted!',
          'The student has been deleted.',
          'success'
        );
        this.loadStudents()
      }
    });
  }
}
