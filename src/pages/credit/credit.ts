import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-credit',
  templateUrl: 'credit.html',
})
export class CreditPage {
  credits:any;
  interest:any;
  total:any;
  func:any;
  constructor(public alrtCtrl:AlertController, private http:HttpClient, private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
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

  payit(){
    let pays=this.alrtCtrl.create({
      title:"Payment way",
      message:"Would you like to pay as cash or digitally?",
      buttons:[{
        text:"Digitally",
        handler:()=>{

        }
      },{
        text:"Pay as cash",
        handler:()=>{
           this.cash();         
        }
      }]
    });
    pays.present();
  }

  cash(){
    let alert=this.alrtCtrl.create({
     title:"Credit Payment",
     message:"Please pay cash to the nearest hub or pay the cash when delivery guy is at your home. Then your credit will be removed.",
     buttons:["OK"]
    });
    alert.present();
  }


  getit(){
    this.storage.get("user").then((val)=>{
      this.http.post("http://192.168.0.108:8080/getcredits",{username:val}).subscribe((res)=>{
       this.credits=parseFloat(res["credits"]);
       this.interest=parseFloat(res["interest"]);
       this.total=this.credits+this.interest;
    });
  });
  }

}
