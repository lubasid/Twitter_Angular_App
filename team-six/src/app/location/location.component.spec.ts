import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TwitterService } from '../twitter.service';
import { DataService } from '../data.service';
import { HashtagComponent } from '../hashtag/hashtag.component';
import { AppRoutingModule } from '..//app-routing.module';
import { DashboardComponent }      from '../dashboard/dashboard.component'
import {TweetComponent}        from '../tweet/tweet.component'
import { LocationComponent } from './location.component';
import { APP_BASE_HREF } from '@angular/common';
import { MediaComponent } from '../media/media.component';
describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HashtagComponent, 
        TweetComponent,
        LocationComponent,
        DashboardComponent,
        MediaComponent ],
      imports: [HttpClientModule,AppRoutingModule],
      providers: [TwitterService, DataService,
        { provide: APP_BASE_HREF, useValue : '/location' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
