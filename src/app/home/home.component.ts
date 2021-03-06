import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../news-fetch.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserPostFilterService } from '../user-post-filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alive:boolean = true;
  newsPost:any;
  deletedPostList:any;
  readPostList:any;

  constructor(
    private postFetchService: NewsFetchService,
    private authService: AuthService,
    private postFilterService: UserPostFilterService,
    private userPostFilterService: UserPostFilterService,
  ) {
    if (!this.authService.loggedIn()){
      this.authService.signOut();
    }
   }

  ngOnInit(): void {
    this.postFetchService.getNewsPosts().subscribe( (res:any) => {
      this.newsPost = res;
    });
    this.getDeletedPostsList();
    this.getReadPostsList();
  }

  onDelete(post:any) {
    this.postFilterService.addToDeleteList(post);
  }

  onRefresh() {
    console.log("In refresh");
    this.postFetchService.refreshFunction().subscribe( (res:any) => {
      this.postFetchService.getNewsPosts().subscribe( (res:any)=>{
        this.newsPost = res;
      });
    });
  }

  onLogout() {
    this.authService.signOut();
  }

  markRead(post:any) {
    this.postFilterService.addToReadList(post);
  }

  markUnread(post:any) {
    this.postFilterService.removeFromReadList(post);
  }

  getDeletedPostsList() {
    this.alive = true;
    if(this.alive === true) {
      this.postFilterService.getDeletedPosts().pipe().subscribe( data => {
        this.deletedPostList = data;
      });
      this.alive=false;
    }
  }

  getReadPostsList() {
    this.alive = true;
    if(this.alive === true) {
      this.postFilterService.getReadPosts().pipe().subscribe( data => {
        this.readPostList = data;
        // console.log(this.deletedPostList);
      });
      this.alive=false;
    }
  }

  checkIfDeleted(postId) {
    return this.deletedPostList.hasOwnProperty(postId) ? true : false;
  }

  checkIfRead(postId) {
    return this.readPostList.hasOwnProperty(postId) ? (this.readPostList[postId]) ? 'aquamarine':' transparent' : 'transparent';
  }

}
