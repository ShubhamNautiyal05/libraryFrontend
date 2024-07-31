import { Component, OnInit } from '@angular/core';
import { IssueService } from '../service/issue.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {

  addIssueForm!:FormGroup;
  constructor(private issueService: IssueService, private fb:FormBuilder,private router:Router) { 
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm() {
    this.addIssueForm = this.fb.group({
      student:[''],
      book:['']
    })
  }

    submitForm(frm:any){
      console.log(frm)
      this.issueService.addIssue(frm).subscribe((res:any)=>{
        this.router.navigate(['issue'])
      }, ()=>{
  
      })
    }

}
