import { Component } from '@angular/core';
import { NavController,ModalController,AlertController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sinform:any;
  constructor(public navCtrl: NavController,public formBuilder:FormBuilder,public modalCtrl:ModalController,public alertCtrl:AlertController) {
      this.sinform= formBuilder.group({
          username: ['',Validators.required],
          password: ['',Validators.required]
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
