import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import {Validators,FormBuilder} from '@angular/forms';
import * as $ from "jquery";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  supform:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public formBuilder:FormBuilder) {
    this.supform= formBuilder.group({
      retailname: ['',Validators.required],
      retailaddress: ['',Validators.required],
      retailername: ['',Validators.required],
      contactnum: ['',Validators.compose([Validators.minLength(10),Validators.maxLength(10),Validators.required])],
      email:['',Validators.pattern('[a-zA-Z0-9._\-]+[@]+[a-zA-Z0-9\-]+[.]+[a-zA-Z]{2,6}')],
      pic: ['',Validators.required],
      cit: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  clickit(a:Number){
    if(a==0){
      $("#pic input").trigger("click");
    }else{
      $("#cit input").trigger("click");
    }
  }

  signup(){
    if(this.supform.valid){

    }else{
      this.makealert("Enter of the form input is invalid or empty. Please do upload required documents too in image format.");
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
