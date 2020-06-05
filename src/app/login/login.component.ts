import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  portalLoginForm: FormGroup;
  forgotToggle = false;
  forgotPasswordForm: FormGroup;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.initializePortalLoginForm();
  }

  initializePortalLoginForm() {
    this.portalLoginForm = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl(''),
    });

    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [])
    });
  }

  onLoginFormSubmit(formValue: FormGroup ) {
    localStorage.setItem('userEmail', formValue.value.email);
    console.log(localStorage.getItem('userEmail'));
    if(formValue.value.email==='rahul@transpacks.co' && formValue.value.password==='transpacks123') {
      this.route.navigate(['home']);
    }
    else {
      console.log("Invalid Credentials")
    }
  }

  onForgotPasswordFormSubmit(formValue: FormGroup) {
    console.log("Hie!")
  }
}
