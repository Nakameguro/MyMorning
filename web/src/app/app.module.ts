import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Digest } from '../pages/digest/digest';
import { RealTime } from '../pages/real-time/real-time';
import { ReadLater } from '../pages/read-later/read-later';
import { TabsPage } from '../pages/tabs/tabs';

import { DigestDetail } from '../pages/digest-detail/digest-detail';
import { RealTimeDetail } from '../pages/real-time-detail/real-time-detail';
import { ReadLaterDetail } from '../pages/read-later-detail/read-later-detail'; 
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';

import { DashboardComponent } from '../components/dashboard.component';
import { FeedComponent } from '../components/feed.component';
import { FeedService } from '../services/feed.service';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    Digest,
    RealTime,
    ReadLater,
    TabsPage,
    DigestDetail,
    RealTimeDetail,
    ReadLaterDetail,
    Login,
    Signup,
    DashboardComponent,
    FeedComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Digest,
    RealTime,
    ReadLater,
    TabsPage,
    DigestDetail,
    RealTimeDetail,
    ReadLaterDetail,
    Login,
    Signup
  ],
  providers: [
    FeedService
  ]
})
export class AppModule {}
