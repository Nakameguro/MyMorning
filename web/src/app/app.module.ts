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

@NgModule({
  declarations: [
    MyApp,
    Digest,
    RealTime,
    ReadLater,
    TabsPage,
    DigestDetail,
    RealTimeDetail,
    ReadLaterDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    ReadLaterDetail
  ],
  providers: []
})
export class AppModule {}
