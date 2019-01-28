webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
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
    function DashboardPage(navCtrl, navParams, http) {
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
        });
    };
    DashboardPage.prototype.ionViewWillUnload = function () {
        if (this.func) {
            clearInterval(this.func);
        }
    };
    DashboardPage.prototype.addtocart = function (category, type) {
        alert(category);
        alert(type);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\pages\dashboard\dashboard.html"*/'<ion-header class="heads">\n  <ion-navbar>\n    <ion-buttons left>\n      <button icon-only menuToggle class="icon">\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title id="heads">Khudra</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let data of datas">\n    <ion-list no-lines>\n      <ion-list-header>\n       {{data["name"]}}\n      </ion-list-header>\n      <ion-grid>\n      <div *ngFor="let val of data[\'types\']">\n          <ion-row>\n            <ion-col col-7>\n                <ion-item>{{val}}</ion-item>\n            </ion-col>\n            <ion-col col-5>\n               <button color="primary" (click)="this.addtocart(data[\'name\'],val)" ion-button outline small>Add To Cart</button>\n            </ion-col>\n          </ion-row>\n      </div>\n      </ion-grid>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(79);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		280,
		1
	],
	"../pages/signup/signup.module": [
		281,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__ = __webpack_require__(103);
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
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(79);
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
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                this.storage.clear();
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Documents\khudra\src\app\app.html"*/'<ion-menu [content]="content">\n <ion-header>\n    <ion-toolbar>\n        <ion-title>Khudra</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n      <ion-list>\n        <button ion-item menuClose (click)="this.menus(1)">\n            Home\n        </button>\n        <button ion-item menuClose (click)="this.menus(2)">\n            Profile\n        </button>\n        <button ion-item menuClose (click)="this.menus(3)">\n            Cart\n        </button>\n        <button ion-item menuClose (click)="this.menus(4)">\n            Purchases\n        </button>\n        <button ion-item menuClose (click)="this.menus(5)">\n            Credits\n        </button>\n        <button ion-item menuClose (click)="this.menus(6)">\n            Log Out\n        </button>\n      </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"C:\Users\User\Documents\khudra\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(80);
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
        //this.storage.clear();
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map