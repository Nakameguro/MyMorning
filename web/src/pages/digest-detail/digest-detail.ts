import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the DigestDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-digest-detail',
  templateUrl: 'digest-detail.html'
})
export class DigestDetail {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DigestDetail Page');
  }

}
