import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RealTime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-real-time',
  templateUrl: 'real-time.html'
})
export class RealTime {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RealTime Page');
  }

}
