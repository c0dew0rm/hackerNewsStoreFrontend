import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../news-fetch.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsPost:any;

  constructor(private postFetchService: NewsFetchService, private authService: AuthService) { }

  ngOnInit(): void {
    this.postFetchService.getNewsPosts().subscribe( (res:any) => {
      this.newsPost = res;
    });
  }

  onDelete(post:any) {
    console.log(post);
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
    console.log("In mark read");
  }

  markUnread(post:any) {
    console.log("In mark unread");
  }

}
