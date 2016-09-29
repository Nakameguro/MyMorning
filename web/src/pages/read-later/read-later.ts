import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReadLater page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-read-later',
  templateUrl: 'read-later.html'
})
export class ReadLater {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ReadLater Page');
  }

}
