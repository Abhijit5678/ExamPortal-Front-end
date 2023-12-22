import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/myservice/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
 
 userLoginData={
    username:'',
    password:''
  }
  constructor(private snack:MatSnackBar,private login:LoginService){}
  formSubmit()
  {
   
    if(this.userLoginData.username.trim()=='' || this.userLoginData.username==null || this.userLoginData.password.trim()=='' || this.userLoginData.password==null)
    {
      this.snack.open('Username is required','Ok',{
        duration:3000
      });
      return
    }

    this.login.generateToken(this.userLoginData).subscribe((
      (data:any)=>
      {
        alert(typeof(data));
        // this.token=this.data;
        data.message;
        console.log(data);

        this.login.getCurrentUser().subscribe((
          (user:any)=>
          {
            this.login.setUserDetails(user);
            
          }
        ))


      }
      
      ),
      error=>
      {
        console.log(error);
      }
      )
    {

    }
    console.log(this.userLoginData);

  }
}
