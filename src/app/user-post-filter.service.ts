import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/';
import { AuthService } from './auth.service';
import { map, filter, catchError, mergeMap, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserPostFilterService {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  addToDeleteList(post:any) {
    let alive = true;
    let UserData: any;
    let loggedInUser = localStorage.getItem('email');
    let res = this.afs.doc('/UsersInfo/Users/').snapshotChanges().pipe(map(action=>{
      const data = action.payload.data();
      return data;
    }));
    res.pipe().subscribe(data=>{
      data[loggedInUser]['deletedPosts'][post.postId]=true;
      UserData = data

      if(alive === true) {
        this.afs.collection('UsersInfo').doc('Users').set(UserData,{merge:true});
        alive = false;
        window.alert("Post Deleted Sucessfully!");
      }
    });
  }

  addToReadList(post:any) {
    let alive = true;
    let UserData: any;
    let loggedInUser = localStorage.getItem('email');
    let res = this.afs.doc('/UsersInfo/Users/').snapshotChanges().pipe(map(action=>{
      const data = action.payload.data();
      return data;
    }));
    res.pipe().subscribe(data=>{
      data[loggedInUser]['readPosts'][post.postId]=true;
      UserData = data

      if(alive === true) {
        this.afs.collection('UsersInfo').doc('Users').set(UserData,{merge:true});
        alive = false;
        window.alert("Post Read Sucessfully!");
      }
    });
  }

  removeFromReadList(post:any) {
    let alive = true;
    let UserData: any;
    let loggedInUser = localStorage.getItem('email');
    let res = this.afs.doc('/UsersInfo/Users/').snapshotChanges().pipe(map(action=>{
      const data = action.payload.data();
      return data;
    }));
    res.pipe().subscribe(data=>{
      data[loggedInUser]['readPosts'][post.postId]=false;
      UserData = data

      if(alive === true) {
        this.afs.collection('UsersInfo').doc('Users').set(UserData,{merge:true});
        alive = false;
        window.alert("Unreading Post Sucessful!");
      }
    });
  }

  getDeletedPosts() {
    let loggedInUser = localStorage.getItem('email');
    return this.afs.doc('/UsersInfo/Users/').snapshotChanges().pipe(map(action=>{
      const data = action.payload.data();
      return data[loggedInUser]['deletedPosts'];
    }));
  }

  getReadPosts() {
    let loggedInUser = localStorage.getItem('email');
    return this.afs.doc('/UsersInfo/Users/').snapshotChanges().pipe(map(action=>{
      const data = action.payload.data();
      return data[loggedInUser]['readPosts'];
    }));
  }

}
