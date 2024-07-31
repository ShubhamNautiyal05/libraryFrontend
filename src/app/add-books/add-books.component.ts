import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  addBookForm!:FormGroup;
  constructor(private bookService: BookService,private fb:FormBuilder,private router:Router) { 
    this.createForm()
  }
  ngOnInit(): void {
  }

  createForm() {
    this.addBookForm = this.fb.group({
      title:[''],
      author:[''],
      isbn:['']
    })
  }

  submitForm(frm:any){
    console.log(frm,'form value')
    // let body:any = {
    // bookTitle:frm.title,

    // }
    this.bookService.addBook(frm).subscribe((res:any)=>{
      console.log(res,'result')
      // this.getBooks()
      this.router.navigate(['books'])
    },err=>{

    })
  }

}
