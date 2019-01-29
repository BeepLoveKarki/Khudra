webpackJsonp([6],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartPage = /** @class */ (function () {
    function CartPage(http, storage, toastCtrl, alrtCtrl, navCtrl, navParams) {
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alrtCtrl = alrtCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getit();
        this.func = setInterval(function () {
            _this.getit();
        }, 5000);
    };
    CartPage.prototype.ionViewWillLeave = function () {
        if (this.func) {
            clearInterval(this.func);
        }
    };
    CartPage.prototype.getit = function () {
        var _this = this;
        this.storage.get("user").then(function (val) {
            _this.http.post("http://192.168.0.108:8080/getcarts", { username: val }).subscribe(function (res) {
                _this.datas = res["data"];
                if (_this.datas.length == 0) {
                    _this.yo = true;
                }
                else {
                    _this.yo = false;
                    for (var i = 0; i < _this.datas.length; i++) {
                        var f = new Date(_this.datas[i]["date"]);
                        var g = f.getHours() > 9 ? f.getHours() : "0" + f.getHours();
                        var h = f.getMinutes() > 9 ? f.getMinutes() : "0" + f.getMinutes();
                        _this.datas[i]["date1"] = f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate();
                        _this.datas[i]["time"] = g + ":" + h;
                    }
                }
            });
        });
    };
    CartPage.prototype.purchasebefore = function (name, type, quantity, cost, date) {
        var _this = this;
        var credits = this.alrtCtrl.create({
            title: "Payment confirmation",
            message: "Would you like to pay for the goods or purchase over credit?",
            buttons: [{
                    text: 'Via Credit',
                    handler: function () {
                        _this.purchase(name, type, quantity, cost, date, true);
                    }
                }, {
                    text: 'Via Payment',
                    handler: function () {
                        _this.payby(name, type, quantity, cost, date, false);
                    }
                }]
        });
        credits.present();
    };
    CartPage.prototype.payby = function (name, type, quantity, cost, date, credits) {
        var _this = this;
        var pays = this.alrtCtrl.create({
            title: "Payment way",
            message: "Would you like to pay as cash on delivery or digitally?",
            buttons: [{
                    text: 'On delivery',
                    handler: function () {
                        _this.purchase(name, type, quantity, cost, date, false);
                    }
                }, {
                    text: 'Digitally',
                    handler: function () {
                        _this.purchase(name, type, quantity, cost, date, false);
                    }
                }]
        });
        pays.present();
    };
    CartPage.prototype.purchase = function (name, type, quantity, cost, date, credits) {
        var _this = this;
        this.storage.get("user").then(function (value) {
            _this.http.post("http://192.168.0.108:8080/purchase", {
                username: value,
                name: name,
                type: type,
                quantity: quantity,
                cost: cost,
                date: date,
                credits: credits
            }).subscribe(function (res) {
                if (res["status"] == "OK") {
                    var date_1 = new Date(res["date"]);
                    var d = date_1.getFullYear() + "/" + (date_1.getMonth() + 1) + "/" + date_1.getDate();
                    var g = date_1.getHours() > 9 ? date_1.getHours() : "0" + date_1.getHours();
                    var h = date_1.getMinutes() > 9 ? date_1.getMinutes() : "0" + date_1.getMinutes();
                    _this.makealert("Your goods have been successfully purchased. The estimated time of delivery is " + g + ":" + h + " on date " + d);
                }
            });
        });
    };
    CartPage.prototype.removecart = function (date) {
        var _this = this;
        this.storage.get("user").then(function (value) {
            _this.http.post("http://192.168.0.108:8080/removecart", {
                username: value,
                date: date
            }).subscribe(function (res) {
                if (res["status"] == "OK") {
                    _this.toastit("The item has been removed from cart");
                }
            });
        });
    };
    CartPage.prototype.toastit = function (a) {
        var toast = this.toastCtrl.create({
            message: a,
            duration: 3000
        });
        toast.present();
    };
    CartPage.prototype.makealert = function (a) {
        var modal = this.alrtCtrl.create({
            title: '',
            message: a,
            buttons: ['OK']
        });
        modal.present();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\pages\cart\cart.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons left>\n        <button icon-only menuToggle class="icon">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title id="heads">Cart</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <div *ngIf="yo;else showit">\n        <p text-center>No goods added to cart</p>\n    </div>\n    <ng-template #showit>\n        <div *ngFor="let data of datas">\n          <ion-card>\n            <ion-card-header>\n              {{data["name"]}}\n            </ion-card-header>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-9>\n                  <span>{{data["type"]}} - {{data["quantity"]}}</span><br/>\n                  <span>NRs. {{data["cost"]}}</span><br/>\n                  <span>{{data["date1"]}}</span><br/>\n                  <span>{{data["time"]}}</span>\n              </ion-col>\n              <ion-col col-3>\n                  <button color="primary" (click)="this.purchasebefore(data[\'name\'],data[\'type\'],data[\'quantity\'],data[\'cost\'],data[\'date\'])" ion-button outline><ion-icon name="cart"></ion-icon></button><br/>\n                  <button color="danger" (click)="this.removecart(data[\'date\'])" ion-button outline><ion-icon name="close"></ion-icon></button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>  \n        </ion-card-content>\n          \n          </ion-card>\n        </div>\n    </ng-template>\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _f || Object])
    ], CartPage);
    return CartPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreditPage = /** @class */ (function () {
    function CreditPage(alrtCtrl, http, storage, navCtrl, navParams) {
        this.alrtCtrl = alrtCtrl;
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreditPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getit();
        this.func = setInterval(function () {
            _this.getit();
        }, 5000);
    };
    CreditPage.prototype.ionViewWillLeave = function () {
        if (this.func) {
            clearInterval(this.func);
        }
    };
    CreditPage.prototype.payit = function () {
        var _this = this;
        var pays = this.alrtCtrl.create({
            title: "Payment way",
            message: "Would you like to pay as cash or digitally?",
            buttons: [{
                    text: "Digitally",
                    handler: function () {
                    }
                }, {
                    text: "Pay as cash",
                    handler: function () {
                        _this.cash();
                    }
                }]
        });
        pays.present();
    };
    CreditPage.prototype.cash = function () {
        var alert = this.alrtCtrl.create({
            title: "Credit Payment",
            message: "Please pay cash to the nearest hub or pay the cash when delivery guy is at your home. Then your credit will be removed.",
            buttons: ["OK"]
        });
        alert.present();
    };
    CreditPage.prototype.getit = function () {
        var _this = this;
        this.storage.get("user").then(function (val) {
            _this.http.post("http://192.168.0.108:8080/getcredits", { username: val }).subscribe(function (res) {
                _this.credits = parseFloat(res["credits"]);
                _this.interest = parseFloat(res["interest"]);
                _this.total = _this.credits + _this.interest;
            });
        });
    };
    CreditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-credit',template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\pages\credit\credit.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons left>\n        <button icon-only menuToggle class="icon">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title id="heads">Credits</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n        <ion-card>\n            <ion-card-header>Credits</ion-card-header>\n            <ion-card-content>\n              <span>NRs. {{credits}}</span><br/>\n              <span>NRs. {{interest}}</span><br/>\n              <span>NRs. {{total}}</span><br/>\n\n              <div *ngIf="credits==0;else but">\n                  <p>You have no pending credits for payment</p>\n                </div>\n                <ng-template #but>\n                    <button color="primary" (click)="this.payit()" id="pc" ion-button small>Pay Credit</button>\n                </ng-template>\n\n            </ion-card-content>\n        </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\pages\credit\credit.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _e || Object])
    ], CreditPage);
    return CreditPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=credit.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\pages\profile\profile.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons left>\n        <button icon-only menuToggle class="icon">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title id="heads">Profile</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchasePage = /** @class */ (function () {
    function PurchasePage(http, storage, toastCtrl, alrtCtrl, navCtrl, navParams) {
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alrtCtrl = alrtCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PurchasePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getit();
        this.func = setInterval(function () {
            _this.getit();
        }, 5000);
    };
    PurchasePage.prototype.ionViewWillLeave = function () {
        if (this.func) {
            clearInterval(this.func);
        }
    };
    PurchasePage.prototype.getit = function () {
        var _this = this;
        this.storage.get("user").then(function (val) {
            _this.http.post("http://192.168.0.108:8080/getpurchases", { username: val }).subscribe(function (res) {
                _this.datas = res["data"];
                if (_this.datas.length == 0) {
                    _this.yo = true;
                }
                else {
                    _this.yo = false;
                    for (var i = 0; i < _this.datas.length; i++) {
                        var f1 = new Date(_this.datas[i]["purchasedDate"]);
                        var g1 = f1.getHours() > 9 ? f1.getHours() : "0" + f1.getHours();
                        var h1 = f1.getMinutes() > 9 ? f1.getMinutes() : "0" + f1.getMinutes();
                        _this.datas[i]["date1"] = f1.getFullYear() + "/" + (f1.getMonth() + 1) + "/" + f1.getDate();
                        _this.datas[i]["time1"] = g1 + ":" + h1;
                        var f2 = new Date(_this.datas[i]["deliveryDate"]);
                        var g2 = f2.getHours() > 9 ? f2.getHours() : "0" + f2.getHours();
                        var h2 = f2.getMinutes() > 9 ? f2.getMinutes() : "0" + f2.getMinutes();
                        _this.datas[i]["date2"] = f2.getFullYear() + "/" + (f2.getMonth() + 1) + "/" + f2.getDate();
                        _this.datas[i]["time2"] = g2 + ":" + h2;
                    }
                }
            });
        });
    };
    PurchasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-purchase',template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\pages\purchase\purchase.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons left>\n        <button icon-only menuToggle class="icon">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title id="heads">Purchases</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="yo;else showit">\n        <p text-center>No goods yet purchased</p>\n    </div>\n    <ng-template #showit>\n        <div *ngFor="let data of datas">\n            <ion-card>\n              <ion-card-header>\n                {{data["name"]}}\n              </ion-card-header>\n              <ion-card-content>\n               \n                      <span>Goods: {{data["type"]}}-{{data["quantity"]}}</span><br/>\n                      <span>Price: NRs. {{data["cost"]}}</span><br/>\n                      <span>Purchase: {{data["date1"]}} {{data["time1"]}}</span><br/>\n                      <span>Delivery: {{data["date2"]}} {{data["time2"]}}</span><br/>\n                      <span *ngIf=\'data["delivered"]; else no\'>\n                          Status: <ion-icon name="checked"></ion-icon> Delivered\n                      </span>\n                      <ng-template #no>\n                          Status: <ion-icon name="bus"></ion-icon> On Its Way\n                      </ng-template> \n\n              </ion-card-content>\n            </ion-card>\n        </div>\n    </ng-template>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\pages\purchase\purchase.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _f || Object])
    ], PurchasePage);
    return PurchasePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=purchase.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, http, navParams, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.email = '';
        this.supform = formBuilder.group({
            retailname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            retailaddress: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            retailername: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contactnum: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9._\-]+[@]+[a-zA-Z0-9\-]+[.]+[a-zA-Z]{2,6}')],
            pic: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cit: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#pic input").change(function (e) {
            _this.pic = document.getElementById("pic").children[0].files[0];
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#cit input").change(function () {
            _this.cit = document.getElementById("cit").children[0].files[0];
        });
    };
    SignupPage.prototype.clickit = function (a) {
        if (a == 0) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#pic input").trigger("click");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#cit input").trigger("click");
        }
    };
    SignupPage.prototype.beforesignup = function () {
        var _this = this;
        if (this.supform.valid) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    _this.signup(position.coords.latitude, position.coords.longitude);
                } /*,(error)=>{
                   alert(error.toString());
                }*/);
            }
            else {
                this.makealert("Please use this app from mobile supporting GPS system.");
            }
        }
        else {
            this.makealert("Enter of the form input is invalid or empty. Please do upload required documents too in image format.");
        }
    };
    SignupPage.prototype.signup = function (latitude, longitude) {
        var _this = this;
        var formData = new FormData();
        formData.append('retailname', this.retailname);
        formData.append('address', this.address);
        formData.append('retailername', this.retailername);
        formData.append('number', this.number.toString());
        formData.append('email', this.email);
        formData.append('username', this.username);
        formData.append('password', this.password);
        formData.append('latitude', latitude.toString());
        formData.append('longitude', longitude.toString());
        formData.append('pic', this.pic);
        formData.append('cit', this.cit);
        this.http.post("http://192.168.0.108:8080/signup", formData).subscribe(function (res) {
            if (res["status"] == "error") {
                _this.makealert("Error in server. Try again later");
            }
            else if (res["status"] == "uexist") {
                _this.makealert("A retailer with this username pre-exists. Try with another.");
            }
            else if (res["status"] == "nexist") {
                _this.makealert("A retailer with this number pre-exists.");
            }
            else {
                var modal = _this.alertCtrl.create({
                    title: '',
                    message: "Your account has been created. You may now login",
                    buttons: [
                        {
                            text: "OK",
                            handler: function () {
                                __WEBPACK_IMPORTED_MODULE_3_jquery__("#pic input").val('');
                                __WEBPACK_IMPORTED_MODULE_3_jquery__("#cit input").val('');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                            }
                        }
                    ]
                });
                modal.present();
            }
        }, function (err) {
            _this.makealert("Error in server. Try again later");
        });
    };
    SignupPage.prototype.makealert = function (a) {
        var modal = this.alertCtrl.create({
            title: '',
            message: a,
            buttons: ['OK']
        });
        modal.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n   <form [formGroup]="supform">\n      <ion-item padding-right>\n        <ion-input type="text" placeholder="Retail Name" [(ngModel)]="retailname" formControlName="retailname"></ion-input>\n       </ion-item>\n\n       <ion-item padding-right>\n          <ion-input type="text" placeholder="Retail Address" [(ngModel)]="address" formControlName="retailaddress"></ion-input>\n       </ion-item>\n\n       <ion-item padding-right>\n          <ion-input type="text" placeholder="Retailer Name" [(ngModel)]="retailername" formControlName="retailername"></ion-input>\n       </ion-item>\n\n       <ion-item padding-right>\n          <ion-input type="number" placeholder="Contact Number" [(ngModel)]="number" formControlName="contactnum" ></ion-input>\n       </ion-item>\n       \n       <ion-item padding-right>\n          <ion-input type="email" placeholder="Email Address(Optional)" [(ngModel)]="email" formControlName="email" ></ion-input>\n       </ion-item>\n\n       <ion-item padding-right>\n          <ion-input type="text" placeholder="Username" [(ngModel)]="username" formControlName="username" ></ion-input>\n       </ion-item>\n\n       <ion-item padding-right>\n        <ion-input type="password" placeholder="Password" [(ngModel)]="password" formControlName="password"></ion-input>\n       </ion-item>\n\n       <ion-item padding-right class="pics">\n          <ion-input  type="file" accept="image/*" id="pic" formControlName="pic"></ion-input>\n       </ion-item>\n\n       <ion-item padding-right class="cits">\n          <ion-input  type="file" accept="image/*" id="cit" formControlName="cit"></ion-input>\n       </ion-item>\n      </form>\n\n       <div padding>\n          <button id="up" (click)="this.clickit(0)" ion-button color="secondary" block>Upload Retailer Photo</button>\n          <button id="uc" (click)="this.clickit(1)" ion-button color="danger" block>Upload Retailer Citizenship (One Side)</button>\n       </div>\n       <p text-center><b>Note: Please be at the your retailer store while creating account</b></p>\n       <div padding>\n          <button ion-button color="primary" (click)="this.beforesignup()" block>Sign Up</button>\n       </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		284,
		5
	],
	"../pages/credit/credit.module": [
		285,
		4
	],
	"../pages/dashboard/dashboard.module": [
		286,
		3
	],
	"../pages/profile/profile.module": [
		287,
		2
	],
	"../pages/purchase/purchase.module": [
		288,
		1
	],
	"../pages/signup/signup.module": [
		289,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_purchase_purchase__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_credit_credit__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_purchase_purchase__["a" /* PurchasePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_credit_credit__["a" /* CreditPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    scrollAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit/credit.module#CreditPageModule', name: 'CreditPage', segment: 'credit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/purchase/purchase.module#PurchasePageModule', name: 'PurchasePage', segment: 'purchase', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_purchase_purchase__["a" /* PurchasePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_credit_credit__["a" /* CreditPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cart_cart__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_purchase_purchase__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_credit_credit__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.menus = function (a) {
        switch (a) {
            case 1:
                this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */];
                break;
            case 2:
                this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */];
                break;
            case 3:
                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_cart_cart__["a" /* CartPage */];
                break;
            case 4:
                this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_purchase_purchase__["a" /* PurchasePage */];
                break;
            case 5:
                this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_credit_credit__["a" /* CreditPage */];
                break;
            case 6:
                this.storage.clear();
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                break;
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\app\app.html"*/'<ion-menu [content]="content">\n <ion-header>\n    <ion-toolbar>\n        <ion-title>Khudra</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n      <ion-list>\n        <button ion-item menuClose (click)="this.menus(1)">\n            Goods\n        </button>\n        <button ion-item menuClose (click)="this.menus(2)">\n            Profile\n        </button>\n        <button ion-item menuClose (click)="this.menus(3)">\n            Cart\n        </button>\n        <button ion-item menuClose (click)="this.menus(4)">\n            Purchases\n        </button>\n        <button ion-item menuClose (click)="this.menus(5)">\n            Credits\n        </button>\n        <button ion-item menuClose (click)="this.menus(6)">\n            Log Out\n        </button>\n      </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardPage = /** @class */ (function () {
    function DashboardPage(toastCtrl, alrtCtrl, storage, navCtrl, navParams, http) {
        this.toastCtrl = toastCtrl;
        this.alrtCtrl = alrtCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getit();
        this.func = setInterval(function () {
            _this.getit();
        }, 5000);
    };
    DashboardPage.prototype.getit = function () {
        var _this = this;
        this.http.get("http://192.168.0.108:8080/getcategories").subscribe(function (res) {
            _this.datas = res["data"];
            if (Object.keys(_this.datas).length == 0) {
                _this.yo = true;
            }
            else {
                _this.yo = false;
            }
        });
    };
    DashboardPage.prototype.ionViewWillLeave = function () {
        if (this.func) {
            clearInterval(this.func);
        }
    };
    DashboardPage.prototype.beforeaddtocart = function (unit, category, type, price) {
        var _this = this;
        var quantity = this.alrtCtrl.create({
            title: "Enter Product Quantity",
            message: "",
            inputs: [{
                    type: "number",
                    name: "quantity",
                    value: "1"
                }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Done',
                    handler: function (data) {
                        _this.addtocart(unit, category, type, price, parseFloat(data["quantity"]));
                    }
                }
            ]
        });
        quantity.present();
    };
    DashboardPage.prototype.addtocart = function (unit, category, type, price, quantity) {
        var _this = this;
        this.storage.get("user").then(function (val) {
            _this.http.post("http://192.168.0.108:8080/addtocart", {
                username: val,
                category: category,
                type: type,
                quantity: quantity + " " + unit,
                tprice: quantity * price
            }).subscribe(function (res) {
                if (res["status"] == "OK") {
                    _this.toastit("The item has been successfully added to cart");
                }
            });
        });
    };
    DashboardPage.prototype.toastit = function (a) {
        var toast = this.toastCtrl.create({
            message: a,
            duration: 3000
        });
        toast.present();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\pages\dashboard\dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button icon-only menuToggle class="icon">\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title id="heads">Goods</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="yo;else show">\n    <p text-center>No goods data available at moment</p>\n  </div>\n  <ng-template #show>\n  <div *ngFor="let data of datas">\n    <ion-list no-lines>\n      <ion-list-header>\n       {{data["name"]}}\n      </ion-list-header>\n      <ion-grid>\n      <div *ngFor="let val of data[\'types\'];index as i">\n          <ion-row>\n            <ion-col col-10>\n                <ion-item>{{val}} - Rs.{{data["costs"][i]}}/{{data["units"][i]}}</ion-item>\n            </ion-col>\n            <ion-col col-2>\n               <button color="primary" (click)="this.beforeaddtocart(data[\'units\'][i],data[\'name\'],val,data[\'costs\'][i])" ion-button outline><ion-icon name="add"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n      </div>\n      </ion-grid>\n    </ion-list>\n  </div>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage, http, formBuilder, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.sinform = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("user").then(function (val) {
            if (val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
            }
        });
    };
    HomePage.prototype.showmodal = function () {
        var modal = this.alertCtrl.create({
            title: "Password Recover",
            message: "Please enter your username",
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Username'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Done',
                    handler: function (data) {
                        //send OTP for password recovery
                    }
                }
            ]
        });
        modal.present();
    };
    HomePage.prototype.showsignup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
        modal.present();
    };
    HomePage.prototype.signin = function () {
        var _this = this;
        if (this.sinform.valid) {
            this.http.post("http://192.168.0.108:8080/login", {
                username: this.username,
                password: this.password
            }).subscribe(function (res) {
                if (res["status"] == "no") {
                    _this.makealert("No any account with entered credentials found.");
                }
                else {
                    _this.storage.set("user", _this.username).then(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                    });
                }
            }, function (err) {
                _this.makealert("Error in server. Try again later");
            });
        }
        else {
            this.makealert("Either of the inputs in empty");
        }
    };
    HomePage.prototype.makealert = function (a) {
        var modal = this.alertCtrl.create({
            title: '',
            message: a,
            buttons: ['OK']
        });
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\pages\home\home.html"*/'<ion-header>\n  <!--ion-navbar>\n    <ion-title>\n    </ion-title>\n  </ion-navbar-->\n</ion-header>\n\n<ion-content padding>\n      \n    <div padding>\n      <img id="mimg" src="assets/imgs/Khudra.png"/>\n    </div>\n       \n    <form [formGroup]="sinform">\n      <ion-item padding-right class="f1">\n        <ion-input type="text" placeholder="Username" [(ngModel)]="username" formControlName="username" ></ion-input>\n       </ion-item>\n    \n       <ion-item padding-right class="f2">\n        <ion-input type="password" placeholder="Password" [(ngModel)]="password" formControlName="password" ></ion-input>\n       </ion-item>\n    </form>\n       \n       <div padding>\n          <button ion-button color="primary" (click)="this.signin()" block>Sign In</button>\n          <a id="fyp" (click)="this.showmodal()">Forgot Your Password?</a>\n       </div>\n\n       <div padding>\n          <button ion-button color="primary" block (click)="this.showsignup()">Sign Up</button>\n          <a id="fyp">Planning for Retail Business? </a>\n       </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map