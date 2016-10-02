import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RealTimeDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-real-time-detail',
  templateUrl: 'real-time-detail.html'
})
export class RealTimeDetail {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RealTimeDetail Page');
  }

}
