import { AppPage } from './app.po';
import { HttpClientModule } from '@angular/common/http';
import { browser, by, element } from 'protractor';

import { TwitterService } from '../src/app/twitter.service';

describe('team-six-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getParagraphText()).toEqual('Twitter API Application');
  });

  it('go button linked up', () =>{
    page.navigateTo('/');
    expect(page.getBtn()).toEqual('Go');
  });

  it('input field linked', () =>{
    page.navigateTo('/');
    expect(page.getInput()).toEqual('');
  });
  
  it('location nav link present', () =>{
    page.navigateTo('/');
    expect(page.getNavEle('localNav')).toEqual('Location');
  });
  it('hashtag nav link present', () =>{
    page.navigateTo('/');
    expect(page.getNavEle('tagNav')).toEqual('HashTags');
  });
  it('tweet nav link present', () =>{
    page.navigateTo('/');
    expect(page.getNavEle('tweetNav')).toEqual('Display Tweets');
  });
  it('dashboard nav link present', () =>{
    page.navigateTo('/');
    expect(page.getNavEle('dashNav')).toEqual('Dashboard');
  });

  it('coffee is default in hastag', () =>{
    page.navigateTo('/hashtag');
    expect(page.getTagValue()).toEqual('coffee');
  });

  it('coffee is default in tweet', () =>{
    page.navigateTo('/tweet');
    expect(page.getTagValue()).toEqual('coffee');
  });

  it('coffee is default in location', () =>{
    page.navigateTo('/location');
    expect(page.getTagValue()).toEqual('coffee');
  });

  it('get button exists', () =>{
    page.navigateTo('/');
    var x = element(by.id('updateBtn'));
    expect(x).toBeDefined();
  });

  it('the 4 other buttons exist', () =>{
    page.navigateTo('/');
    var x = element.all(by.css('.buttons'));
    expect(x.count()).toEqual(4);
  });

  it('dashboard button exists', () =>{
    page.navigateTo('/');
    var x = element.all(by.css('.sidebar'));
    expect(x.count()).toEqual(1);
  });


});
