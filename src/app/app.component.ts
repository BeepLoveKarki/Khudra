import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';


import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  menus(a:Number){
    switch(a){
      case 1:
      break;

      case 2:
      break;

      case 3:
      this.nav.setRoot(CartPage);
      break;

      case 4:
      break;

      case 5:
      break;

      case 6:
       this.storage.clear();
       this.nav.setRoot(HomePage);
      break;
    }
  }

}

