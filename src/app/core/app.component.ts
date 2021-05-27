import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio-website';
  backgroungImage: string = 'backgroungImage-home'
  constructor(private router:Router){

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.checkClass();
      }
    });
  }


  
  checkClass() {
    if(this.router.url == "/home") {
      this.backgroungImage = "backgroungImage-home"
    } else if(this.router.url == "/contact") {
      this.backgroungImage = "backgroungImage-contact"
    }
    else if(this.router.url == "/portfolio") {
      this.backgroungImage = "backgroungImage-portfolio"
    }
  }
}
