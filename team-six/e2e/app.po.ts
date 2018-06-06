import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(value) {
    return browser.get(value);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getBtn() {
    return element(by.buttonText('Go')).getText();
  }

  getInput() {
    return element(by.name('searchTag')).getText();
  }

  getTagValue() {
    return element(by.name('searchedTag')).getText();
  }

  getNavEle(value) {
    return element(by.name(value)).getText();
  }
}
