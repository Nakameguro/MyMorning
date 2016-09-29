import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Digest } from '../pages/digest/digest';
import { RealTime } from '../pages/real-time/real-time';
import { ReadLater } from '../pages/read-later/read-later';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    Digest,
    RealTime,
    ReadLater,
    TabsPage
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
    TabsPage
  ],
  providers: []
})
export class AppModule {}
