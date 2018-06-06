import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../twitter.service';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from "../data.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./tweet.component.css'],
  animations: [
    trigger('trig', [
      transition('* => *', [
        query('#tweet_div', style({ opacity: 0}), {optional: true}),

        query('#tweet_div', stagger('0ms', [
          animate('1s ease', keyframes([
            style({opacity: 0, transform: 'translateY(75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-35px)', offset: .6}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class TweetComponent implements OnInit {
  tweets = [];
  errorMessage: string;
  searchTag: string;
  oldTag: string;
  
  constructor(private twitterService: TwitterService, private data: DataService, private route: ActivatedRoute, private router: Router){
    this.route.params
      .subscribe( params => {
        if (params['q'] !== undefined){
          let testVar = params['q'].trim();
          if (testVar.split(' ').length != 1){
            alert("Please only use 1 word");
            this.data.changeMessage(testVar);
          } else {
            this.data.changeMessage(testVar);
          }
        }
      });
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.searchTag = message);
    this.oldTag = this.searchTag;
    this.twitterService.getTweets(this.searchTag)
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);
    }
    
    createCloud(){
      console.log(this.tweets);
    }

    ngDoCheck() {
      if (this.searchTag !== this.oldTag) {
        this.router.navigate(['tweet', this.searchTag]);
        this.oldTag = this.searchTag;
        this.update();
      }
    }

    update() {
      this.data.currentMessage.subscribe(message => this.searchTag = message);
      let tag: string;
      this.twitterService.getTweets(this.searchTag)
      .subscribe(
        tweets => this.tweets = tweets,
        error =>  this.errorMessage = <any>error);

   }
}
