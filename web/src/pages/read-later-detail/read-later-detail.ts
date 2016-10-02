import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReadLaterDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-read-later-detail',
  templateUrl: 'read-later-detail.html'
})
export class ReadLaterDetail {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ReadLaterDetail Page');
  }

}
