import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TwitterService } from '../twitter.service';
import { DataService } from '../data.service';
import { HashtagComponent } from '../hashtag/hashtag.component';
import { AppRoutingModule } from '..//app-routing.module';
import { DashboardComponent }      from '../dashboard/dashboard.component'
import {TweetComponent}        from '../tweet/tweet.component'
import { LocationComponent } from '../location/location.component';
import { APP_BASE_HREF } from '@angular/common';
import { MediaComponent } from './media.component';
describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HashtagComponent, 
        TweetComponent,
        LocationComponent,
        MediaComponent,
        DashboardComponent ],
      imports: [HttpClientModule,AppRoutingModule],
      providers: [TwitterService, DataService,
        { provide: APP_BASE_HREF, useValue : '/media' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
