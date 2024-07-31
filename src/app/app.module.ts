import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { IssueComponent } from './issue/issue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthInterceptor } from './auth.interceptor';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { HeaderComponent } from './header/header.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    StudentComponent,
    LoginComponent,
    IssueComponent,
    DashboardComponent,
    AddStudentComponent,
    AddBooksComponent,
    HeaderComponent,
    AddIssueComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
