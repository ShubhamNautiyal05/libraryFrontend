import { Component, OnInit } from '@angular/core';
import { IssueService } from '../service/issue.service';
import { FormBuilder } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  issues: any[] = [];

  constructor(private issueService:IssueService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getIssue()
  }

  getIssue(): void {
    this.issueService.getIssueDetails().subscribe((res: any) =>
      { 
      this.issues = res
     },
   
      error => console.error('Error fetching book data', error)
    );
    console.log(this.issues)
  }  
  

  returnBook(id: number): void {
    this.issueService.returnBook(id).subscribe(
      () => {
        this.issues = this.issues.filter(issue => issue.id !== id);
        console.log('Issue returned successfully');
        this.getIssue();
      },
      error => console.error('Error returning issue', error)
    );
  }

  deleteBook(id: number): void {
    Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to delete this record?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
       }).then((result) => {
             if (result.isConfirmed) {
               this.issueService.deleteRecord(id).subscribe(() => this.getIssue(),
                 (error: any) => console.error('Error deleting student', error)
               );
               Swal.fire(
                 'Deleted!',
                 'The student has been deleted.',
                 'success'
               );
             }
           });
  }
}
