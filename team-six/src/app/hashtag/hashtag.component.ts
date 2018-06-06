import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../twitter.service';
import { AppComponent } from '../app.component';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from "../data.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./hashtag.component.css'],
  animations: [
    trigger('trig', [
      transition('* => *', [
        query('#tag_div', style({ opacity: 0}), {optional: true}),

        query('#tag_div', stagger('0ms', [
          animate('1s ease', keyframes([
            style({opacity: 0, transform: 'translateY(75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-35px)', offset: .6}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class HashtagComponent implements OnInit {
  tweets = [];
  errorMessage: string;
  dict = {};
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
    let tag = [];
    this.data.currentMessage.subscribe(message => this.searchTag = message);
    this.oldTag = this.searchTag;
    this.twitterService.getTweets(this.searchTag)
      .subscribe(
         tweets => {
          for (let i=0; i < tweets.length; i++){
            for (let j=0; j < tweets[i].tags.length; j++){
              if (tag.includes((tweets[i].tags[j]).toLowerCase())) {
              } else {
                tag.push(tweets[i].tags[j]);
              }
            }
          }
           return this.tweets = tag;
         },
         error =>  this.errorMessage = <any>error);
    }

    keysAndWeights() {
      for (let i=0; i < this.tweets.length; i++){{
          if (this.tweets[i] in this.dict) {
            this.dict[this.tweets[i]] += 1;
          } else {
            this.dict[this.tweets[i]] = 1;
          }
        }
      }
      let i = 0;
    }

    ngDoCheck() {
      if (this.searchTag !== this.oldTag) {
        this.router.navigate(['hashtag', this.searchTag]);
        this.oldTag = this.searchTag;
        this.update();
      }
    }

    update() {
      this.tweets = [];
      let tag = [];
      this.twitterService.getTweets(this.searchTag)
      .subscribe(
         tweets => {
          for (let i=0; i < tweets.length; i++){
            for (let j=0; j < tweets[i].tags.length; j++){
              if (tag.includes(tweets[i].tags[j])) {
              } else {
                tag.push(tweets[i].tags[j]);
              }
            }
          }
      this.tweets = tag;
    },
    error =>  this.errorMessage = <any>error);
  }
}
