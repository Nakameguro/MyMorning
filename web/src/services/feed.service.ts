import { Injectable } from '@angular/core';

@Injectable()
export class FeedService {
    private feeds = [
        'http://jp.techcrunch.com/feed/',
        'http://b.hatena.ne.jp/hotentry/it.rss',
        'https://jser.info/rss/',
        'https://html5experts.jp/feed'
    ];

    getUserFeeds() {
        return this.feeds;
    }
}
