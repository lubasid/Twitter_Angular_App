import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TwitterService } from './twitter.service';
import { DataService } from './data.service';
import { AppRoutingModule } from './/app-routing.module';
import { HashtagComponent }      from './hashtag/hashtag.component'
import { DashboardComponent }      from './dashboard/dashboard.component'
import {TweetComponent}        from './tweet/tweet.component'
import { LocationComponent } from './location/location.component';
import { APP_BASE_HREF } from '@angular/common';
import { MediaComponent } from './media/media.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HashtagComponent,
        LocationComponent,
        TweetComponent,        
        DashboardComponent,
        MediaComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
      ],
      providers: [TwitterService, DataService,
        { provide: APP_BASE_HREF, useValue : '/' }],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Twitter API Application'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Twitter API Application');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Twitter API Application');
  }));
});
