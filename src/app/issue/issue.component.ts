import { Component, OnInit } from '@angular/core';
import { IssueService } from '../service/issue.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  issues: any[] = [];

  constructor(private issueSerive:IssueService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getIssue()
  }

  getIssue(): void {
    this.issueSerive.getIssueDetails().subscribe((res: any) =>
      { 
      this.issues = res
     },
   
      error => console.error('Error fetching book data', error)
    );
    console.log(this.issues)
  }  
  

  returnBook(id: number): void {
    this.issueSerive.returnBook(id).subscribe(
      () => {
        this.issues = this.issues.filter(issue => issue.id !== id);
        console.log('Issue returned successfully');
        this.getIssue()
      },
      error => console.error('Error returning issue', error)
    );
  }
}
