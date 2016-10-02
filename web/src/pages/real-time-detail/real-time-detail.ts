import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-real-time-detail',
  templateUrl: 'real-time-detail.html'
})
export class RealTimeDetail {

  public content: any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
    ) {
    // 前画面からのパラメーターゲット
    this.content = navParams.get('content');
    }

  ionViewDidLoad() {
    console.log('Hello RealTimeDetail Page');
  }

}
