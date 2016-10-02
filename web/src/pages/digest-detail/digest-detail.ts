import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-digest-detail',
  templateUrl: 'digest-detail.html'
})
export class DigestDetail {

  public content: any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
    ) {
    // 前画面からのパラメーターゲット
    this.content = navParams.get('content');
    }

  ionViewDidLoad() {
    console.log('Hello DigestDetail Page');
  }

}
