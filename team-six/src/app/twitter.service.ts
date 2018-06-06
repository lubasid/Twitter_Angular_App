// import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable, Inject, Optional } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Response } from '@angular/http';

export interface TwitterResponse{
  data: any;
  response: any;
  name: string;
  media: any;
}

@Injectable()
export class TwitterService {
  private twitterUrl = 'api/twitter'; 

  
  constructor(private http: HttpClient) { }



  getTweets(param): Observable<any> {
    return this.http.get(`api/twitter?q=${param}`);
  }



}
