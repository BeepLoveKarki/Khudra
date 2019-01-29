import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html',
})
export class PurchasePage {
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

  ionViewWillLeave(){
    if(this.func){
      clearInterval(this.func);
    }
  }

  getit(){
    this.storage.get("user").then((val)=>{
      this.http.post("http://192.168.0.108:8080/getpurchases",{username:val}).subscribe((res)=>{
       this.datas=res["data"];
       if(this.datas.length==0){
          this.yo=true;
        }else{
          this.yo=false;
          for(let i=0;i<this.datas.length;i++){

             let f1=new Date(this.datas[i]["purchasedDate"]);
             let g1=f1.getHours()>9 ? f1.getHours():"0"+f1.getHours();
             let h1=f1.getMinutes()>9 ? f1.getMinutes():"0"+f1.getMinutes();
             this.datas[i]["date1"]=f1.getFullYear()+"/"+(f1.getMonth()+1)+"/"+f1.getDate();
             this.datas[i]["time1"]=g1+":"+h1;

             let f2=new Date(this.datas[i]["deliveryDate"]);
             let g2=f2.getHours()>9 ? f2.getHours():"0"+f2.getHours();
             let h2=f2.getMinutes()>9 ? f2.getMinutes():"0"+f2.getMinutes();
             this.datas[i]["date2"]=f2.getFullYear()+"/"+(f2.getMonth()+1)+"/"+f2.getDate();
             this.datas[i]["time2"]=g2+":"+h2;

             
          }
          
        }
      });
      });
  }

}
