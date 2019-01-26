webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		277,
		3
	],
	"../pages/signup/signup.module": [
		270,
		4
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
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(280);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__ = __webpack_require__(278);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    scrollAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */]
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

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\pages\dashboard\dashboard.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Khudra</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(194);
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
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.supform.valid) {
            var formData = new FormData();
            formData.append('retailname', this.retailname);
            formData.append('address', this.address);
            formData.append('retailername', this.retailername);
            formData.append('number', this.number.toString());
            formData.append('email', this.email);
            formData.append('username', this.username);
            formData.append('password', this.password);
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
        }
        else {
            this.makealert("Enter of the form input is invalid or empty. Please do upload required documents too in image format.");
        }
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
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n   <form [formGroup]="supform">\n      <ion-item padding-right>\n        <ion-input type="text" placeholder="Retail Name" [(ngModel)]="retailname" formControlName="retailname"></ion-input>\n       </ion-item>\n\n       <ion-item padding-right>\n          <ion-input type="text" placeholder="Retail Address" [(ngModel)]="address" formControlName="retailaddress"></ion-input>\n       </ion-item>\n\n       <ion-item padding-right>\n          <ion-input type="text" placeholder="Retailer Name" [(ngModel)]="retailername" formControlName="retailername"></ion-input>\n       </ion-item>\n\n       <ion-item padding-right>\n          <ion-input type="number" placeholder="Contact Number" [(ngModel)]="number" formControlName="contactnum" ></ion-input>\n       </ion-item>\n       \n       <ion-item padding-right>\n          <ion-input type="email" placeholder="Email Address(Optional)" [(ngModel)]="email" formControlName="email" ></ion-input>\n       </ion-item>\n\n       <ion-item padding-right>\n          <ion-input type="text" placeholder="Username" [(ngModel)]="username" formControlName="username" ></ion-input>\n       </ion-item>\n\n       <ion-item padding-right>\n        <ion-input type="password" placeholder="Password" [(ngModel)]="password" formControlName="password"></ion-input>\n       </ion-item>\n\n       <ion-item padding-right class="pics">\n          <ion-input  type="file" accept="image/*" id="pic" formControlName="pic"></ion-input>\n       </ion-item>\n\n       <ion-item padding-right class="cits">\n          <ion-input  type="file" accept="image/*" id="cit" formControlName="cit"></ion-input>\n       </ion-item>\n      </form>\n\n       <div padding>\n          <button id="up" (click)="this.clickit(0)" ion-button color="secondary" block>Upload Retailer Photo</button>\n          <button id="uc" (click)="this.clickit(1)" ion-button color="danger" block>Upload Retailer Citizenship (One Side)</button>\n       </div>\n       \n       <div padding>\n          <button ion-button color="primary" (click)="this.signup()" block>Sign Up</button>\n       </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map