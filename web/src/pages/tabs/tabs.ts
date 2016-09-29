import { Component } from '@angular/core';

import { Digest } from '../digest/digest';
import { RealTime } from '../real-time/real-time';
import { ReadLater } from '../read-later/read-later';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Digest;
  tab2Root: any = RealTime;
  tab3Root: any = ReadLater;

  constructor() {

  }
}
