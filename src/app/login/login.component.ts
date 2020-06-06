import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  portalLoginForm: FormGroup;
  signUpToggle = false;
  signUpForm: FormGroup;
  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.initializePortalLoginForm();
  }

  initializePortalLoginForm() {
    this.portalLoginForm = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl(''),
    });

    this.signUpForm = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl(''),
    });
  }

  onLoginFormSubmit(formValue: FormGroup ) {
    this.authService.signIn(formValue.value.email, formValue.value.password);
  }

  onSignUpFormSubmit(formValue: FormGroup) {
    this.authService.signUp(formValue.value.email, formValue.value.password);
  }

}
