import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Digest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-digest',
  templateUrl: 'digest.html'
})
export class Digest {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello Digest Page');
  }

}
