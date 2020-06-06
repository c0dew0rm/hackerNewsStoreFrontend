import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, validateEventsArray } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afs:AngularFirestore, private router:Router) { }

  async signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('email', email);
         this.router.navigate(['home']);
      }).catch((error) => {
        window.alert(error.message);
      })
  }

  async signOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['']);
      localStorage.removeItem('email');
    })
  }

  loggedIn(): boolean {
    return (localStorage.getItem('email') !== null);
  }

  signUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(
      value => {
        this.router.navigate(['']);
        window.alert("Account created Sucessfully!");
      }
    ).catch(error => {
      window.alert(error.message);
    });
  }

}
