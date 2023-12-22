import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiserviceService } from 'src/app/myservice/apiservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private api: ApiserviceService,private snack:MatSnackBar) {}

  data={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:''
  }

  submitForm()
  {
  
    if (this.data.username=='' || this.data.username==null) {
      this.snack.open("UserName requires","Ok",{duration: 2500})
      return;
    }

    if (this.data.password=='' || this.data.password==null) {
      this.snack.open("Password requires","Ok",{duration: 2500})
      return;
    }

    if (this.data.firstname=='' || this.data.firstname==null) {
      this.snack.open("firstname requires","Ok",{duration: 2500})
      return;
    }

    if(this.data.lastname=='' || this.data.lastname==null)
    this.snack.open("lastName Required","ok",{duration: 2500})

    console.log(this.data);
    this.api.saveUser(this.data).subscribe(
      (response)=>
      {
        console.log(response);
        Swal.fire("Success","User is Registered","success");

      },
      (error)=>
      {
        console.log(error);
        this.snack.open("Somethings Went Wrong","ok",{duration: 2500})
      }


    )
    
  }

}
