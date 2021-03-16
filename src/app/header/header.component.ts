import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn = null;
  constructor(private authService: AuthService,private router:Router) { 
    this.isLoggedIn = authService.isAuthonthicated();
   }
  
  ngOnInit(): void {
  }
  
  logout(){
    this.authService.logout()
    this.router.navigateByUrl("/home")
  }
}
