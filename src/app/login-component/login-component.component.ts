import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm! :FormGroup;


  constructor(private authService : AuthService, private router: Router) {
    
  }


  ngOnInit(): void {
     if(this.authService.isLoggedIn()){
       this.router.navigate(['home']);
     }

    this.initForm();
  }


  initForm(){

    console.log("Inside of Init Form ");
    this.loginForm = new FormGroup({
      username: new FormControl("",
        [Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required]
      ),
      password: new FormControl("",[
        Validators.required
      ])
   })
  }


  loginProcess(){
    console.log("Login Form ");
    // let ex:String = this.loginForm.controls['username'].value;
    // console.log(ex);
    // this.loginForm.controls['username'].setValue("MAnishsa");

    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(result =>{ 
        console.log("Inside Subscribe");

        if(result.token){
          this.authService.setToken(result.token);
           console.log("Logged In >>> ");
           this.router.navigate(['home']);
        }
        else{
          console.log("Logged in failed");
        }
      })
    }


  }

}
