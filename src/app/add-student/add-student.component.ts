import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  students: any[] = [];
  addStudentForm!:FormGroup;

  constructor(private studentService: StudentService, private fb:FormBuilder,private router:Router) { 
  }
  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.addStudentForm = this.fb.group({
      name:[''],
      email:[''],
      rollNumber:['']
    })
  }

  submitForm(frm:any){
    console.log(frm,'form value')
    // let body:any = {
    // bookTitle:frm.title,

    // }
    this.studentService.addStudent(frm).subscribe((res:any)=>{
      this.router.navigate(['/students'])
    },err=>{

    })
  }



}
