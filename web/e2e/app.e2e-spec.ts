import { /Users/takuya/Practice/work/MyMorning/webPage } from './app.po';

describe('/users/takuya/practice/work/my-morning/web App', function() {
  let page: /Users/takuya/Practice/work/MyMorning/webPage;

  beforeEach(() => {
    page = new /Users/takuya/Practice/work/MyMorning/webPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
