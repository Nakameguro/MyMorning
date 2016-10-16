import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {
    private feeds = [
        'http://angular-craft.com/feed/',
        'https://www.smashingmagazine.com/feed/',
        'http://feeds.feedburner.com/thoughtram',
        'http://jp.techcrunch.com/feed/'
    ];

    getUserFeeds() {
        return this.feeds;
    }
}
