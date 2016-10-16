import { Component } from '@angular/core';
import { FeedService } from '../services/feed.service';

@Component({
    selector: 'app-dashboard',
    template: `
        <h3>The dashboard</h3>
        <hr>
        <div *ngFor="let feed of feeds">
            <app-feed [url]="feed"></app-feed>
        </div>
    `,
    providers: [FeedService]
})
export class DashboardComponent {

    feeds: any;

    constructor(private feedService: FeedService) {
        this.feeds = feedService.getUserFeeds();
    }
}
