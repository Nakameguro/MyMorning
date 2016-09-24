import { browser, element, by } from 'protractor/globals';

export class /Users/takuya/Practice/work/MyMorning/webPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
