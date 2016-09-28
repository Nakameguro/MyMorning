import { Component } from '@angular/core';

import { DigestPage } from '../digest/digest';
import { RealTimePage } from '../real-time/real-time';
import { ReadLaterPage } from '../read-later/read-later';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = DigestPage;
    this.tab2Root = RealTimePage;
    this.tab3Root = ReadLaterPage;
  }
}
