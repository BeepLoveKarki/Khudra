import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';


import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PurchasePage } from '../pages/purchase/purchase';
import { CreditPage } from '../pages/credit/credit';
import { ProfilePage } from '../pages/profile/profile';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
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
      this.rootPage=DashboardPage;
      break;

      case 2:
      this.rootPage=ProfilePage;
      break;

      case 3:
      this.rootPage=CartPage;
      break;

      case 4:
      this.rootPage=PurchasePage;
      break;

      case 5:
      this.rootPage=CreditPage;
      break;

      case 6:
       this.storage.clear();
       this.rootPage=HomePage;
      break;
    }
  }

}

