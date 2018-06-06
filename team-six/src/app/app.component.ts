import { Component, OnInit } from '@angular/core';
import {TwitterService} from './twitter.service';
import { forEach } from '@angular/router/src/utils/collection';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Twitter API Application';
  tweets = [];
  errorMessage: string;
  tag: string;
  tagHtml: string;
  constructor(private twitterService: TwitterService, private data: DataService){}

  ngOnInit() {
    
    this.data.currentMessage.subscribe(tag => this.tag = tag);
    
    this.getTweets()
    console.log(this.tweets);
    }

    getTweets(){
      this.twitterService.getTweets('coffee')
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);
  
    }

    updateService() {
      if (this.tagHtml !== undefined){
        this.tagHtml = this.tagHtml.trim();
        if (this.tagHtml.split(' ').length != 1){
          alert("Please only use 1 word");
        } else {
          this.tag = this.tagHtml;
          this.data.changeMessage(this.tag);
        }
      }
    }

}
