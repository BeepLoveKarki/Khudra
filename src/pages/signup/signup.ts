import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import * as $ from "jquery";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  clickit(a:Number){
    if(a==0){
      $("#pic input").trigger("click");
    }else{
      $("#cit input").trigger("click");
    }
  }
}
