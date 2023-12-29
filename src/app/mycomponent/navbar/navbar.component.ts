import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/myservice/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(public login:LoginService,private router:Router) { }
  data:any;
  userName:any;
  ngOnInit() {
    
    this.data=localStorage.getItem("user");
   let user=JSON.parse( this.data);
   this.userName=user.username;
  }

  isUserLoggedIn()
  {
    this.login.isLogin();
    console.log(this.login.isLogin());
    alert(this.login.isLogin());
  }

  logout()
  {
    this.login.logout();
    this.router.navigate(['/']);
  }






  
}
