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

  ionViewWillLeave(){
    if(this.func){
      clearInterval(this.func);
    }
  }

  getit(){
   this.storage.get("user").then((val)=>{
    this.http.post("http://192.168.0.108:8080/getcarts",{username:val}).subscribe((res)=>{
     this.datas=res["data"];
     if(this.datas.length==0){
        this.yo=true;
      }else{
        this.yo=false;
        for(let i=0;i<this.datas.length;i++){
           let f=new Date(this.datas[i]["date"]);
           let g=f.getHours()>9 ? f.getHours():"0"+f.getHours();
           let h=f.getMinutes()>9 ? f.getMinutes():"0"+f.getMinutes();
           this.datas[i]["date1"]=f.getFullYear()+"/"+(f.getMonth()+1)+"/"+f.getDate();
           this.datas[i]["time"]=g+":"+h;
        }
      }
    });
    });
  }

  purchasebefore(name:string,type:string,quantity:string,cost:number,date:string){
    let credits=this.alrtCtrl.create({
      title:"Payment confirmation",
      message:"Would you like to pay for the goods or purchase over credit?",
      buttons:[{
          text: 'Via Credit',
          handler:()=>{
           this.purchase(name,type,quantity,cost,date,true);
          }
        },{

          text: 'Via Payment',
          handler:()=>{
           this.payby(name,type,quantity,cost,date,false);
          }

         }]
    });
    credits.present();
  }

  payby(name:string,type:string,quantity:string,cost:number,date:string,credits:boolean){
    let pays=this.alrtCtrl.create({
      title:"Payment way",
      message:"Would you like to pay as cash on delivery or digitally?",
      buttons:[{
          text: 'On delivery',
          handler:()=>{
            this.purchase(name,type,quantity,cost,date,false);
          }
        },{

          text: 'Digitally',
          handler:()=>{
           this.purchase(name,type,quantity,cost,date,false);
          }

         }]
    });
    pays.present();
  }

  purchase(name:string,type:string,quantity:string,cost:number,date:string,credits:boolean){
   this.storage.get("user").then((value)=>{
    
    this.http.post("http://192.168.0.108:8080/purchase",{
      username:value,
      name,
      type,
      quantity,
      cost,
      date,
      credits
    }).subscribe((res)=>{
        if(res["status"]=="OK"){
          let date=new Date(res["date"]);
          let d=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
          let g=date.getHours()>9 ? date.getHours():"0"+date.getHours();
          let h=date.getMinutes()>9 ? date.getMinutes():"0"+date.getMinutes();
          this.makealert("Your goods have been successfully purchased. The estimated time of delivery is "+g+":"+h+" on date "+d);
        }
    });
  
  });
  }
  
  removecart(date:string){
    this.storage.get("user").then((value)=>{
      this.http.post("http://192.168.0.108:8080/removecart",{
        username:value,
        date:date
      }).subscribe((res)=>{
        if(res["status"]=="OK"){
           this.toastit("The item has been removed from cart"); 
        }
      });
    });
  }

  toastit(a:string){
    let toast = this.toastCtrl.create({
      message: a,
      duration: 3000
    });
    toast.present();
  }

  makealert(a:string){
    let modal=this.alrtCtrl.create({
      title:'',
      message:a,
      buttons:['OK']
    });
    modal.present();
  }

}
