import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**遷移先画面**/
import { RealTimeDetail } from '../real-time-detail/real-time-detail';

/**HTTP通信ライブラリ**/
import {Http} from '@angular/http';

@Component({
  selector: 'page-real-time',
  templateUrl: 'real-time.html'
})
export class RealTime {
  /**ニュースデータ配列*/
  public dataArr: Array<any> = new Array<any>();

  constructor(
    public navCtrl: NavController,
    private http: Http,
    private nav: NavController
    ) {}

   /**
    * Initialize
    **/
    public ngOnInit() {
        // init
        this.callApi();
    }
  ionViewDidLoad() {
    console.log('Hello RealTime Page');
  }

    /**
     * Move to detail view
     **/
    public moveDetail(e: Event,  idx: number ) {
        // PUSHによる画面遷移
        this.nav.push(RealTimeDetail, { 'content': this.dataArr[idx] });
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
