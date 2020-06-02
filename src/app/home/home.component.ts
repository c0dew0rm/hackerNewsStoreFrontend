import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../news-fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsPost:any;

  constructor(private postFetchService: NewsFetchService) { }

  ngOnInit(): void {
    this.postFetchService.getNewsPosts().subscribe( (res:any) => {
      this.newsPost = res;
      console.log(this.newsPost)
    })
  }

}
