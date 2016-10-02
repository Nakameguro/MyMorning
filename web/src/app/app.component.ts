import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
// import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { Digest } from '../pages/digest/digest';
import { RealTime } from '../pages/real-time/real-time';
import { ReadLater } from '../pages/read-later/read-later';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';

export interface PageObj {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  templateUrl: `app.template.html`
})
export class MyApp {
  rootPage = TabsPage;

  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageObj[] = [
    { title: 'Digest', component: Digest, icon: 'apps' },
    { title: 'RealTime', component: RealTime, index: 1, icon: 'clock' },
    { title: 'ReadLater', component: ReadLater, index: 2, icon: 'bookmark' }
  ];
  loggedOutPages: PageObj[] = [
    { title: 'Login', component: Login, icon: 'log-in' },
    { title: 'Signup', component: Signup, icon: 'person-add' }
  ];

  constructor(
    public events: Events,
    public menu: MenuController,
    platform: Platform) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // StatusBar.styleDefault();
    });
  }

  openPage(page: PageObj) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      this.nav.setRoot(page.component, {tabIndex: page.index});

    } else {
      this.nav.setRoot(page.component);
    }
  }
}
