import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HashtagComponent }      from './hashtag/hashtag.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import {TweetComponent}        from './tweet/tweet.component';
import { LocationComponent } from './location/location.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  { path: 'hashtag/:q', component: HashtagComponent },
  { path: 'hashtag', component: HashtagComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tweet/:q', component: TweetComponent },
  { path: 'tweet', component: TweetComponent },
  { path: 'location/:q', component: LocationComponent},
  { path: 'location', component: LocationComponent},
  { path: 'media/:q', component: MediaComponent},
  { path: 'media', component: MediaComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }