import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**HTTP通信ライブラリ**/
import {Http} from '@angular/http';

@Component({
  selector: 'page-digest',
  templateUrl: 'digest.html'
})
export class Digest {

  /**ニュースデータ配列*/
  public dataArr: Array<any> = new Array<any>();

  constructor(
      public navCtrl: NavController,
      private http: Http
    ) { }

    /**
     * Initialize
     **/
    public ngOnInit() {
        // init
        this.callApi();
    }

  ionViewDidLoad() {
    console.log('Hello Digest Page');
  }

    /**
     * API Call (News/list API)
     **/
    private callApi() {
        let url = 'https://randomuser.me/api/?results=20';
        this.http.get(url).subscribe(
            // 正常系コールバックハンドラ
            data => {
                // JSONデータとして保存
                let jsonObj = data.json();
                this.dataArr = jsonObj.results;

            // エラーハンドラ
            }, error => {
                alert(error);
            }
        );
    }

}
