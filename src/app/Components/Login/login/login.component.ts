import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/Login';
import { AuthService } from 'src/app/Services/Auth/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  // username!: string;
  // password!: string;
  // errorMessage = 'Invalid Credentials';
  // successMessage!: string;
  // invalidLogin = false;
  // loginSuccess = false;
  // router: any;

  // constructor(private authService: AuthService) {}

  // ngOnInit(): void {
  // }

  // handleLogin() {
  //   this.authService.login(this.username, this.password).subscribe((result) => {
  //     this.invalidLogin = false;
  //     this.loginSuccess = true;
  //     this.successMessage = 'Login Successful';
  //     this.router.navigate(['/dashboard']);
  //   }, () => {
  //     this.invalidLogin = true;
  //     this.loginSuccess = false;
  //   });
  // }


  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private router: Router) { }

  loginUser = [
    new Login('nikhil123@gmail.com', 'admin', 'admin')
  ];
  loginUsername = new FormControl('');
  loginPassword = new FormControl('');

  loginDone() {
    let obj: any = this.loginUser.find(o => o.username === this.loginUsername.value);

    if (obj != null && this.loginPassword.value === obj.password) {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      // alert(this.successMessage); 
      // this.router.navigate(['/dashboard']);
    }
    else {
      this.invalidLogin = true;
      this.loginSuccess = false;
    }
    
    if(this.loginSuccess == true){
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1000);
    }
  }

}
