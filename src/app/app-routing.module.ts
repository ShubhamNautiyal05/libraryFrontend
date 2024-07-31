import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { IssueComponent } from './issue/issue.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AuthGuard } from './guards/auth.guard';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  { path: 'students', component: StudentComponent,canActivate: [AuthGuard] },
  { path: 'books', component: BookComponent,canActivate: [AuthGuard] },
  { path: 'issue', component: IssueComponent,canActivate: [AuthGuard]},
  { path: 'add-student', component: AddStudentComponent,canActivate: [AuthGuard]},
  { path: 'add-book', component: AddBooksComponent,canActivate: [AuthGuard]},
  { path:'add-issue', component:AddIssueComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
