import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit {
  books: any[] = [];
  addBookForm!:FormGroup;
  constructor(private bookService: BookService,private fb:FormBuilder) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.getBooks();
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
      this.getBooks()
    },err=>{

    })
  }


  getBooks(): void {
    this.bookService.getBooks().subscribe(
      data => this.books = data, 
      error => console.error('Error fetching book data', error)
    );
  }  

  deleteBook(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this book?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.deleteBook(id).subscribe(() => this.getBooks(),
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