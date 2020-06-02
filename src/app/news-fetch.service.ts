import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../shared/utils'

@Injectable({
  providedIn: 'root'
})
export class NewsFetchService {

  constructor(private http: HttpClient) { }

  getNewsPosts() {
    // console.log(Utils.getDefaultUrl());
    return this.http.get(Utils.getDefaultUrl()+'restApis/fetchNews/');
  }

  refreshFunction() {
    return this.http.get(Utils.getDefaultUrl()+'newsPost/insertNews/');
  }
}
