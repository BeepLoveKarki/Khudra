import { Component } from '@angular/core';
import { NavController,ModalController,AlertController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {DashboardPage} from '../dashboard/dashboard';
import {Validators,FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sinform:any;
  username:string;
  password:string;
  constructor(public navCtrl: NavController, private storage:Storage, private http:HttpClient, public formBuilder:FormBuilder,public modalCtrl:ModalController,public alertCtrl:AlertController) {
      this.sinform= formBuilder.group({
          username: ['',Validators.required],
          password: ['',Validators.required]
      });
  }

  ionViewWillEnter(){
   //this.storage.clear();
   this.storage.get("user").then((val)=>{
    if(val){
      this.navCtrl.setRoot(DashboardPage);
    }
   });
  }

  showmodal(){
    let modal=this.alertCtrl.create({
       title: "Password Recover",
       message: "Please enter your username",
       inputs:[
         {
           name:'username',
           placeholder:'Username'
         }
       ],
       buttons:[
         {
            text:'Cancel',
            handler:data=>{
            
            }
         },
         {
           text:'Done',
           handler:data=>{
              //send OTP for password recovery
           }
         }
       ]
    });
    modal.present();
  }

  showsignup(){
    let modal=this.modalCtrl.create(SignupPage);
    modal.present();
  }

  signin(){
    if(this.sinform.valid){
      this.http.post("http://192.168.0.108:8080/login",{
        username:this.username,
        password:this.password
      }).subscribe((res)=>{
        if(res["status"]=="no"){
          this.makealert("No any account with entered credentials found.");
        }else{
          this.storage.set("user",this.username).then(()=>{
            this.navCtrl.setRoot(DashboardPage);
          });
        }
      },(err)=>{
        this.makealert("Error in server. Try again later");
      });
    }else{
      this.makealert("Either of the inputs in empty");
    }
  }

  makealert(a:string){
    let modal=this.alertCtrl.create({
      title:'',
      message:a,
      buttons:['OK']
    });
    modal.present();
  }

}
