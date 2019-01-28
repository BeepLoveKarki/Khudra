import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  func:any;
  datas:any;
  yo:boolean;
  constructor(private http:HttpClient, private storage: Storage, public toastCtrl:ToastController, public alrtCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getit();
    this.func=setInterval(()=>{
      this.getit();
    },5000);
  }

  getit(){
   this.storage.get("user").then((val)=>{
    this.http.post("http://192.168.0.108:8080/getcarts",{username:val}).subscribe((res)=>{
      if(this.datas.length==0){
        this.yo=true;
      }else{
        this.yo=false;
      }
    });
   
    });
  }

}
