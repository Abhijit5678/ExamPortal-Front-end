import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/myservice/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user:any;
  
  constructor(private login:LoginService, private router: Router){}
  ngOnInit() {
    
    this.user=this.login.getUserDetails();
   console.log(this.user);
  }
  

}
