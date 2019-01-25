import { Component } from '@angular/core';
import { NavController,ModalController,AlertController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController,public alertCtrl:AlertController) {

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

}
