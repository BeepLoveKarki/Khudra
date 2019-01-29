import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  datas:Object;
  func:any;
  yo:boolean
  constructor(public toastCtrl:ToastController, public alrtCtrl: AlertController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private http:HttpClient) {
  }

  ionViewDidLoad() {
    this.getit();
    this.func=setInterval(()=>{
      this.getit();
    },5000);
  }

  getit(){
    this.http.get("http://192.168.0.108:8080/getcategories").subscribe((res)=>{
       this.datas=res["data"];
       if(Object.keys(this.datas).length==0){
         this.yo=true;
       }else{
         this.yo=false;
       }
     });
  }

  ionViewWillLeave(){
    if(this.func){
      clearInterval(this.func);
    }
  }

  beforeaddtocart(unit:string, category:string,type:string,price:number){
     let quantity=this.alrtCtrl.create({
       title:"Enter Product Quantity",
       message:"",
       inputs:[{
         type:"number",
         name:"quantity",
         value:"1"
       }],
       buttons:[
        {
           text:'Cancel'
        },
        {
          text:'Done',
          handler:data=>{
             this.addtocart(unit,category,type,price,parseFloat(data["quantity"]));
          }
        }
      ]
     });
     quantity.present();
  }
  
  addtocart(unit:string,category:string,type:string,price:number,quantity:number){
    this.storage.get("user").then((val)=>{
      this.http.post("http://192.168.0.108:8080/addtocart",{
        username:val,
        category:category,
        type:type,
        quantity:quantity+" "+unit,
        tprice:quantity*price
      }).subscribe((res)=>{
           if(res["status"]=="OK"){
             this.toastit("The item has been successfully added to cart");
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

}
