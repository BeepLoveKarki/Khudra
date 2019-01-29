import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  image:string;
  datas:any;
  func:any;
  constructor(public alertCtrl:AlertController, private http:HttpClient, private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getit();
  }

  changeu(){
    let modal=this.alertCtrl.create({
      title: "Change Username",
      message: "Please enter your new username",
      inputs:[
        {
          name:'username',
          placeholder:'New Username'
        }
      ],
      buttons:[
        {
           text:'Cancel'
        },
        {
          text:'Done',
          handler:data=>{
             this.loginones(data.username,0)
          }
        }
      ]
   });
   modal.present();
  }

  changep(){

    let modal=this.alertCtrl.create({
      title: "Change Password",
      message: "Please enter your new password",
      inputs:[
        {
          name:'password',
          type:'password',
          placeholder:'New Password'
        }
      ],
      buttons:[
        {
           text:'Cancel'
        },
        {
          text:'Done',
          handler:data=>{
            this.loginones(data.password,1)
          }
        }
      ]
   });
   modal.present();

  }

  loginones(data:string,a:number){
    this.storage.get("user").then((val)=>{
     this.http.post("http://192.168.0.108:8080/loginchange",{
       username:val,
       data,
       a
      }).subscribe((res)=>{
       if(res["status"]=="OK"){
         if(a==0){
            this.makealert("Your username has been changed. Please login again to continue.");
         }else{
          this.makealert("Your password has been changed. Please login again to continue.");
         }
       }
      });
    });
  }

  getit(){
    this.storage.get("user").then((val)=>{
      this.http.post("http://192.168.0.108:8080/getuser",{username:val}).subscribe((res)=>{
         this.datas=res["data"];
         this.image="http://192.168.0.108:8080/static/"+val+"_photo.jpg";
      })
   });
  }

  makealert(a:string){
    let modal=this.alertCtrl.create({
      title:'',
      message:a,
      buttons:[{
        text:'OK',
        handler:()=>{
          this.storage.clear();
          this.navCtrl.setRoot(HomePage);
        }
      }]
    });
    modal.present();
  }


}
