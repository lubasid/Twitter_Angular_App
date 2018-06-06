import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';
import { TwitterService } from './twitter.service';
import { HashtagComponent } from './hashtag/hashtag.component';
import { TweetComponent } from './tweet/tweet.component';
import { LocationComponent } from './location/location.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    HashtagComponent,
    TweetComponent,
    LocationComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    TwitterService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
