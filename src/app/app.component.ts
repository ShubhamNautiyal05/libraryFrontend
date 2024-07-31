import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-mgt';
  showHeader :any= true;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the login route
        console.log(event.url)
        this.showHeader = event.url !== '/login' && event.url !== '/';
        
      }
    });
  }
}
