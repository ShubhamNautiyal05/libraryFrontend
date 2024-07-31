import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToStudents(): void {
    this.router.navigate(['/students']);
  }

  navigateToBooks(): void {
    this.router.navigate(['/books'])
  }

  navigateToIssue(): void {
    this.router.navigate(['/issue'])
  }
}
