import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import {Validators,FormBuilder} from '@angular/forms';
import * as $ from "jquery";
import {HttpClient} from '@angular/common/http';
import {HomePage} from '../home/home';
 
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  supform:any;
  retailname:string;
  address:string;
  retailername:string;
  number:Number;
  email:string='';
  username:string;
  password:string;
  pic:any;
  cit:any;
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, private http:HttpClient, public navParams: NavParams,public alertCtrl:AlertController,public formBuilder:FormBuilder) {
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

  ionViewWillEnter(){
    $("#pic input").change((e)=>{
      this.pic= (<HTMLInputElement>document.getElementById("pic").children[0]).files[0];
    });

    $("#cit input").change(()=>{
      this.cit= (<HTMLInputElement>document.getElementById("cit").children[0]).files[0];
    });
  }

  clickit(a:Number){
    if(a==0){
      $("#pic input").trigger("click");
    }else{
      $("#cit input").trigger("click");
    }
  }

  beforesignup(){
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    if(this.supform.valid){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
         this.signup(position.coords.latitude,position.coords.longitude,loader);
      });
    } else {
      loader.dismiss();
      this.makealert("Please use this app from mobile supporting GPS system.");
    }
   }else{
      loader.dismiss();
      this.makealert("Enter of the form input is invalid or empty. Please do upload required documents too in image format.");
   }
  }

  signup(latitude:Number,longitude:Number,loader:any){
      let formData = new FormData();
      formData.append('retailname',this.retailname);
      formData.append('address',this.address);
      formData.append('retailername',this.retailername);
      formData.append('number',this.number.toString());
      formData.append('email',this.email);
      formData.append('username',this.username);
      formData.append('password',this.password);
      formData.append('latitude',latitude.toString());
      formData.append('longitude',longitude.toString());
      formData.append('pic',this.pic);
      formData.append('cit',this.cit);
      this.http.post("http://10.3.141.155:8080/signup",formData).subscribe((res)=>{
        loader.dismiss(); 
        if(res["status"]=="error"){
          this.makealert("Error in server. Try again later");
        }else if(res["status"]=="uexist"){
          this.makealert("A retailer with this username pre-exists. Try with another.");
        }else if(res["status"]=="nexist"){
          this.makealert("A retailer with this number pre-exists.");
        }else{
          let modal=this.alertCtrl.create({
            title:'',
            message:"Your account has been created. You may now login",
            buttons:[
              {
                text:"OK",
                handler:()=>{
                  $("#pic input").val('');
                  $("#cit input").val('');
                  this.navCtrl.push(HomePage);
                }
              }
            ]
          });
          modal.present();
        }
      },(err)=>{
        this.makealert("Error in server. Try again later");
      });
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
