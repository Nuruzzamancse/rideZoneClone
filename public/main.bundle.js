webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gaurds_auth_gaurd__ = __webpack_require__("./src/app/gaurds/auth.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_product_product_component__ = __webpack_require__("./src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_photo_upload_photo_upload_component__ = __webpack_require__("./src/app/components/photo-upload/photo-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cart_cart_component__ = __webpack_require__("./src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gaurds_admin_gaurd__ = __webpack_require__("./src/app/gaurds/admin.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_details_details_component__ = __webpack_require__("./src/app/components/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_checkout_checkout_component__ = __webpack_require__("./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_editproduct_editproduct_component__ = __webpack_require__("./src/app/components/editproduct/editproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_editprofile_editprofile_component__ = __webpack_require__("./src/app/components/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_autocomplete_filter_example_autocomplete_filter_example_component__ = __webpack_require__("./src/app/components/autocomplete-filter-example/autocomplete-filter-example.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__gaurds_admin_gaurd__["a" /* AdminGaurd */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_8__components_product_product_component__["a" /* ProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__gaurds_admin_gaurd__["a" /* AdminGaurd */]] },
    { path: 'photo/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_photo_upload_photo_upload_component__["a" /* PhotoUploadComponent */] },
    { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_details_details_component__["a" /* DetailsComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_10__components_cart_cart_component__["a" /* CartComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_13__components_checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_editproduct_editproduct_component__["a" /* EditproductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__gaurds_admin_gaurd__["a" /* AdminGaurd */]] },
    { path: 'editprofile/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_editprofile_editprofile_component__["a" /* EditprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'auto', component: __WEBPACK_IMPORTED_MODULE_16__components_autocomplete_filter_example_autocomplete_filter_example_component__["a" /* AutocompleteFilterExampleComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gaurds_auth_gaurd__ = __webpack_require__("./src/app/gaurds/auth.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_product_product_component__ = __webpack_require__("./src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_file_service__ = __webpack_require__("./src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_photo_upload_photo_upload_component__ = __webpack_require__("./src/app/components/photo-upload/photo-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_cart_cart_component__ = __webpack_require__("./src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__gaurds_admin_gaurd__ = __webpack_require__("./src/app/gaurds/admin.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_details_details_component__ = __webpack_require__("./src/app/components/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_checkout_checkout_component__ = __webpack_require__("./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_editproduct_editproduct_component__ = __webpack_require__("./src/app/components/editproduct/editproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__common_stripe_service__ = __webpack_require__("./src/app/common/stripe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_editprofile_editprofile_component__ = __webpack_require__("./src/app/components/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_address_address_component__ = __webpack_require__("./src/app/components/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_slide_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_autocomplete_filter_example_autocomplete_filter_example_component__ = __webpack_require__("./src/app/components/autocomplete-filter-example/autocomplete-filter-example.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_photo_upload_photo_upload_component__["a" /* PhotoUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_editproduct_editproduct_component__["a" /* EditproductComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_editprofile_editprofile_component__["a" /* EditprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_address_address_component__["a" /* AddressComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_autocomplete_filter_example_autocomplete_filter_example_component__["a" /* AutocompleteFilterExampleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_31__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesService"],
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__gaurds_auth_gaurd__["a" /* AuthGaurd */],
                __WEBPACK_IMPORTED_MODULE_20__services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_21__services_file_service__["a" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_24__gaurds_admin_gaurd__["a" /* AdminGaurd */],
                __WEBPACK_IMPORTED_MODULE_28__common_stripe_service__["a" /* StripeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/stripe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StripeService = /** @class */ (function () {
    function StripeService(http) {
        this.http = http;
    }
    StripeService.prototype.confirmPayment = function (stripeEmail, stripeToken, amount) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = {
            stripeEmail: stripeEmail,
            stripeToken: stripeToken,
            stripeAmount: amount
        };
        console.log('In conform payment');
        return this.http.post("http://localhost:3000/stripe/charge", JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    StripeService.prototype.handleError = function (error) {
        if (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server Error');
        }
        else {
            console.log('Unknown err');
        }
    };
    StripeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], StripeService);
    return StripeService;
}());



/***/ }),

/***/ "./src/app/components/address/address.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  address works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-address',
            template: __webpack_require__("./src/app/components/address/address.component.html"),
            styles: [__webpack_require__("./src/app/components/address/address.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/components/autocomplete-filter-example/autocomplete-filter-example.component.css":
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/autocomplete-filter-example/autocomplete-filter-example.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n        {{ option }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n\r\n\r\n<!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n    Use of this source code is governed by an MIT-style license that\r\n    can be found in the LICENSE file at http://angular.io/license -->\r\n"

/***/ }),

/***/ "./src/app/components/autocomplete-filter-example/autocomplete-filter-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteFilterExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AutocompleteFilterExampleComponent = /** @class */ (function () {
    function AutocompleteFilterExampleComponent() {
        this.myControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    AutocompleteFilterExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
    };
    AutocompleteFilterExampleComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    AutocompleteFilterExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-autocomplete-filter-example',
            template: __webpack_require__("./src/app/components/autocomplete-filter-example/autocomplete-filter-example.component.html"),
            styles: [__webpack_require__("./src/app/components/autocomplete-filter-example/autocomplete-filter-example.component.css")]
        })
    ], AutocompleteFilterExampleComponent);
    return AutocompleteFilterExampleComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" style=\"width: 70%; margin-left: 15%\">\r\n  <div class=\"panel-heading\">Cart Checkout</div>\r\n  <div class=\"panel-body\">\r\n\r\n    <div class=\"table-responsive\">\r\n\r\n      <table  class=\"table\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"text-align: center\">Product Name</th>\r\n          <th style=\"text-align: center\">Product Image</th>\r\n          <th style=\"text-align: center\">Product Quantity</th>\r\n          <th style=\"text-align: center\">Product Price</th>\r\n          <th style=\"text-align: center\">Total Product Price</th>\r\n          <th>Action</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let product of myProductArray; let i = index\">\r\n\r\n\r\n        <tr class=\"success\" *ngIf=\"product.myProductCount\">\r\n          <td style=\"text-align: center\">{{product.myProduct.name}}</td>\r\n\r\n          <td style=\"text-align: center\"><img src=\"http://ridezonebd.us.openode.io/{{product.myProduct.picture[0]}}\" alt=\"...\" class=\"img-responsive\" height=\"50px\" width=\"80px\">\r\n          </td>\r\n          <td style=\"text-align: center\">{{product.myProductCount}}</td>\r\n          <td style=\"text-align: center\">${{product.myProduct.price}}</td>\r\n          <td style=\"text-align: center\">${{product.myProduct.price*product.myProductCount}}</td>\r\n\r\n          <td>\r\n          <ul class=\"nav nav-pills nav-stacked\">\r\n\r\n            <li class=\"dropdown\">\r\n              <button class=\"dropdown-toggle\" class=\"btn btn-danger\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-remove\"></span> Remove</button>\r\n              <ul class=\"dropdown-menu\">\r\n                <li (click)=\"reduceByOne(product.myProduct.name)\"><a >Remove 1</a></li>\r\n                <li (click)=\"removeAll(product.myProduct.name)\"><a >Remove all</a></li>\r\n\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n          </td>\r\n\r\n\r\n\r\n        </tr>\r\n\r\n\r\n\r\n        </tbody>\r\n        <div *ngIf=\"!myProductArray\" class=\"alert alert-warning\">\r\n          <strong>Warning!</strong> You have not added any cart to Buy.\r\n        </div>\r\n        <td></td>\r\n        <td></td>\r\n        <td></td>\r\n        <td></td>\r\n        <td><h4 style=\"margin-bottom: 2%\">Total = ${{sum}}</h4></td>\r\n\r\n        <td></td>\r\n\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n               <a [routerLink]=\"['/']\" style=\"text-decoration: none\">  <button type=\"button\" class=\"btn btn-default\"  ><span class=\"glyphicon glyphicon-shopping-cart\"></span>Continue Shopping</button></a>\r\n\r\n          </td>\r\n\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n\r\n          <td></td>\r\n          <td>\r\n            <button (click)=\"continueShopping()\" type=\"button\" class=\"btn btn-success\" >\r\n              Checkout <span class=\"glyphicon glyphicon-play\"></span>\r\n            </button></td>\r\n\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(authServie, router) {
        this.authServie = authServie;
        this.router = router;
        this.sum = 0;
        this.arrObj = new Array(0);
    }
    CartComponent.prototype.getCart = function () {
    };
    CartComponent.prototype.ngOnInit = function () {
        this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));
        for (var i = 0; i < this.myProductArray.length; i++) {
            this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
            this.arrObj.push(this.myProductArray[i].myProduct._id);
        }
        console.log(this.arrObj);
    };
    CartComponent.prototype.continueShopping = function () {
        if (this.authServie.loggedIn()) {
            this.router.navigate(['/checkout']);
            var User = {
                wishList: this.arrObj
            };
            this.authServie.UpdateProfile(localStorage.getItem('loginId'), User)
                .subscribe(function (response) {
                console.log('Here in update');
                console.log(response.data.name);
            });
        }
        else
            this.router.navigate(['/login']);
    };
    CartComponent.prototype.buList = function () {
        if (this.authServie.loggedIn()) {
            this.router.navigate(['/checkout']);
            var User = {
                wishList: this.arrObj
            };
            this.authServie.UpdateProfile(localStorage.getItem('loginId'), User)
                .subscribe(function (response) {
                console.log('Here in update');
                console.log(response.data.name);
            });
        }
        else
            this.router.navigate(['/login']);
    };
    CartComponent.prototype.reduceByOne = function (name) {
        for (var i = 0; i < this.myProductArray.length; i++) {
            if (this.myProductArray[i].myProduct.name == name) {
                this.myProductArray[i].myProductCount = this.myProductArray[i].myProductCount - 1;
                localStorage.setItem('myProductCart', JSON.stringify(this.myProductArray));
                this.cnt2 = localStorage.getItem('cnt');
                this.cnt2 = this.cnt2 - 1;
                localStorage.setItem('cnt', this.cnt2);
                console.log(localStorage.getItem('cnt'));
            }
        }
        this.sum = 0;
        for (var i = 0; i < this.myProductArray.length; i++) {
            this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
            this.arrObj.push(this.myProductArray[i].myProduct._id);
        }
        this.router.navigate(['/cart']);
    };
    CartComponent.prototype.removeAll = function (name) {
        for (var i = 0; i < this.myProductArray.length; i++) {
            if (this.myProductArray[i].myProduct.name == name) {
                this.cnt2 = localStorage.getItem('cnt');
                this.cnt2 = this.cnt2 - this.myProductArray[i].myProductCount;
                localStorage.setItem('cnt', this.cnt2);
                this.myProductArray[i].myProductCount = 0;
                localStorage.setItem('myProductCart', JSON.stringify(this.myProductArray));
                console.log(localStorage.getItem('cnt'));
            }
        }
        this.sum = 0;
        for (var i = 0; i < this.myProductArray.length; i++) {
            this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
            this.arrObj.push(this.myProductArray[i].myProduct._id);
        }
        this.router.navigate(['/cart']);
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\nform.checkout {\r\n  max-width: 500px;\r\n  margin: 2rem auto;\r\n  text-align: center;\r\n  border: 2px solid #eee;\r\n  border-radius: 8px;\r\n  padding: 1rem 2rem;\r\n  background: white;\r\n\r\n  font-family: monospace;\r\n  color: #525252;\r\n  font-size: 1.1rem;\r\n}\r\n\r\nform.checkout button {\r\n  padding: 0.5rem 1rem;\r\n  color: white;\r\n  background: coral;\r\n  border: none;\r\n  border-radius: 4px;\r\n  margin-top: 1rem;\r\n}\r\n\r\nform.checkout button:active {\r\n  background: rgb(165, 76, 43);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <form style=\"height: 400px\" #checkout=\"ngForm\" (ngSubmit)=\"onSubmit(checkout)\" class=\"checkout\">\r\n    <div class=\"form-row\">\r\n      <label for=\"card-info\">Card Info</label>\r\n      <div id=\"card-info\" #cardInfo></div>\r\n\r\n      <div id=\"card-errors\" role=\"alert\" *ngIf=\"error\">{{ error }}</div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <br>\r\n      <label for=\"card-info\">Name:</label>\r\n      <input type=\"email\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" class=\"form-control input-sm\" placeholder=\"Email Address\">\r\n\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <br>\r\n      <label for=\"card-info\">Phone:</label>\r\n      <input type=\"email\" [(ngModel)]=\"phone\" name=\"phone\" id=\"phone\" class=\"form-control input-sm\" placeholder=\"Enter Your Phone No\">\r\n\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <br>\r\n      <label for=\"card-info\">Delivery Address:</label>\r\n      <input type=\"email\" [(ngModel)]=\"deliveryAddress\" name=\"deliveryAddress\" id=\"deliveryAddress\" class=\"form-control input-sm\" placeholder=\"Enter Your Delivery Address\">\r\n\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n      <br>\r\n      <label for=\"card-info\">Email Address:</label>\r\n      <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Email Address\">\r\n\r\n    </div>\r\n\r\n    <button type=\"submit\" (click)=\"shop()\"><span style=\"font-size: medium\">Pay ${{sum}}</span></button>\r\n\r\n    <div *ngIf=\"name\">\r\n      <h3>Your Information</h3>\r\n      <h4>Name: <span style=\"text-align: right;color: #74DF00\">{{name}}</span></h4>\r\n      <h4 *ngIf=\"phone\">Phone:<span style=\"text-align: right;color: #74DF00\">{{phone}}</span></h4>\r\n      <h4 *ngIf=\"deliveryAddress\">Delivery Address:<span style=\"text-align: right;color: #74DF00\">{{deliveryAddress}}</span></h4>\r\n      <h4 *ngIf=\"deliveryAddress\">Email Address:<span style=\"text-align: right;color: #74DF00\">{{email}}</span></h4>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_stripe_service__ = __webpack_require__("./src/app/common/stripe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(cd, stripeService, authServie, router, productService, flashMessage) {
        this.cd = cd;
        this.stripeService = stripeService;
        this.authServie = authServie;
        this.router = router;
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.arrObj = new Array(0);
        this.cardHandler = this.onChange.bind(this);
        this.sum = 0;
        console.log(this.name);
        console.log(this.phone);
        console.log(this.deliveryAddress);
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));
        console.log('In checkout myProductCart');
        //console.log(localStorage.getItem('myProductCart'));
        this.productService.getProduct()
            .subscribe(function (respnse) {
            _this.productList = respnse.data;
            //console.log(this.productList);
        });
        if (this.myProductArray)
            for (var i = 0; i < this.myProductArray.length; i++) {
                // this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
                this.arrObj.push(this.myProductArray[i].myProduct._id);
                this.sum = this.sum + this.myProductArray[i].myProduct.price * this.myProductArray[i].myProductCount;
                console.log('Sum = ' + this.sum);
            }
        console.log('Sum2 = ' + this.sum);
    };
    CheckoutComponent.prototype.home = function () {
        this.router.navigate(['/']);
    };
    CheckoutComponent.prototype.shop = function () {
        console.log('in shop');
        if (this.authServie.loggedIn()) {
            //
            // //this.router.navigate(['/checkout'])
            // let User = {
            //   buyList: this.arrObj,
            //   wishList: null
            // }
            //
            //
            // if(this.myProductArray)
            //   for(let i=0;i<this.myProductArray.length;i++) {
            //     // this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
            //     //this.arrObj.push(this.myProductArray[i].myProduct._id);
            //
            //     //console.log('Checking product :' + JSON.stringify(this.myProductArray[i].myProduct));
            //
            //     for(let j=0; j<this.productList.length;j++){
            //       if(this.productList[j]._id==this.myProductArray[i].myProduct._id){
            //         this.productList[j].avl = this.productList[j].avl - this.myProductArray[i].myProductCount;
            //         //console.log(this.productList[j].avl);
            //         // this.productService.updateProduct(this.productList[j]._id,this.productList[j].product);
            //
            //         this.productService.updateProduct(this.productList[j]._id,this.productList[j])
            //           .subscribe(response=>{
            //            // console.log(response)
            //           })
            //         // this.router.navigate(['/']);
            //
            //
            //       }
            //     }
            //   }
            //
            // localStorage.setItem('myProductCart',null);
            //
            //
            // localStorage.setItem('myProductCart',null);
            // localStorage.setItem('cnt',JSON.stringify(0));
            //
            //
            // this.authServie.UpdateProfile(localStorage.getItem('loginId'),User)
            //   .subscribe(response=>{
            //     //console.log('Here in update bal');
            //     console.log(response.data.name);
            //     console.log('Buy List' +response.data.buyList);
            //     console.log('Wish List' +response.data.wishList);
            //
            //   });
        }
        else
            this.router.navigate(['/login']);
    };
    CheckoutComponent.prototype.ngAfterViewInit = function () {
        this.card = elements.create('card');
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.cardHandler);
    };
    CheckoutComponent.prototype.ngOnDestroy = function () {
        this.card.removeEventListener('change', this.cardHandler);
        this.card.destroy();
    };
    CheckoutComponent.prototype.onChange = function (_a) {
        var error = _a.error;
        if (error) {
            this.error = error.message;
        }
        else {
            this.error = null;
        }
        this.cd.detectChanges();
    };
    CheckoutComponent.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, token, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, stripe.createToken(this.card)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        if (error) {
                            console.log('Something is wrong:', error);
                        }
                        else {
                            //console.log('Success!', token);
                            this.stripeService.confirmPayment(this.email, token, this.sum)
                                .subscribe(function (response) {
                                if (response.success) {
                                    _this.flashMessage.show('You have bought suuccessfully.Thank You!', { cssClass: 'alert-success' });
                                    //this.router.navigate(['/checkout'])
                                    var User = {
                                        buyList: _this.arrObj,
                                        wishList: null
                                    };
                                    if (_this.myProductArray)
                                        for (var i = 0; i < _this.myProductArray.length; i++) {
                                            // this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
                                            //this.arrObj.push(this.myProductArray[i].myProduct._id);
                                            //console.log('Checking product :' + JSON.stringify(this.myProductArray[i].myProduct));
                                            for (var j = 0; j < _this.productList.length; j++) {
                                                if (_this.productList[j]._id == _this.myProductArray[i].myProduct._id) {
                                                    _this.productList[j].avl = _this.productList[j].avl - _this.myProductArray[i].myProductCount;
                                                    //console.log(this.productList[j].avl);
                                                    // this.productService.updateProduct(this.productList[j]._id,this.productList[j].product);
                                                    _this.productService.updateProduct(_this.productList[j]._id, _this.productList[j])
                                                        .subscribe(function (response) {
                                                        // console.log(response)
                                                    });
                                                    // this.router.navigate(['/']);
                                                }
                                            }
                                        }
                                    localStorage.setItem('myProductCart', null);
                                    localStorage.setItem('myProductCart', null);
                                    localStorage.setItem('cnt', JSON.stringify(0));
                                    _this.authServie.UpdateProfile(localStorage.getItem('loginId'), User)
                                        .subscribe(function (response) {
                                        //console.log('Here in update bal');
                                        console.log(response.data.name);
                                        console.log('Buy List' + response.data.buyList);
                                        console.log('Wish List' + response.data.wishList);
                                        _this.router.navigate(['/']);
                                    });
                                }
                                else {
                                    _this.flashMessage.show('Sorry. Try again', { cssClass: 'alert-danger' });
                                }
                            });
                            // ...send the token to the your backend to process the charge
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cardInfo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CheckoutComponent.prototype, "cardInfo", void 0);
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__("./src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__("./src/app/components/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1__common_stripe_service__["a" /* StripeService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\" style=\"width: 70%; margin-left: 15%\">\r\n  <div class=\"panel-heading\" style=\"height: 60px\" ><b class=\"text-info\" style=\"margin-left: 40%\">Waiting to shipment</b> </div>\r\n  <div class=\"panel-body\">\r\n\r\n    <table  class=\"table\">\r\n      <thead>\r\n      <tr>\r\n        <th style=\"text-align: center\">User Name</th>\r\n        <th style=\"text-align: center\">Product Name</th>\r\n        <th >Product Image</th>\r\n      </tr>\r\n      </thead>\r\n\r\n      <tbody *ngFor=\"let obj of buyObj; let i = index\">\r\n\r\n      <tr *ngIf=\"obj.product\">\r\n        <td style=\"text-align: center\">{{obj.name}}</td>\r\n        <td style=\"text-align: center\">{{obj.product.name}}</td>\r\n\r\n        <td style=\"text-align: center\"><img src=\"/{{obj.product.picture[0]}}\" alt=\"...\" class=\"img-responsive\" height=\"50px\" width=\"80px\">\r\n        </td>\r\n      </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"panel panel-info\" style=\"width: 70%; margin-left: 15%\">\r\n  <div class=\"panel-heading\" style=\"height: 60px\" ><b class=\"text-info\" style=\"margin-left: 40%\">Buy List</b> </div>\r\n            <div class=\"panel-body\">\r\n\r\n              <table  class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                  <th style=\"text-align: center\">User Name</th>\r\n                  <th style=\"text-align: center\">Product Name</th>\r\n                  <th >Product Image</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody *ngFor=\"let obj of myObj; let i = index\">\r\n\r\n                <tr *ngIf=\"obj.product\">\r\n                  <td style=\"text-align: center\">{{obj.name}}</td>\r\n                  <td style=\"text-align: center\">{{obj.product.name}}</td>\r\n\r\n                  <td style=\"text-align: center\"><img src=\"http://ridezonebd.us.openode.io/{{obj.product.picture[0]}}\" alt=\"...\" class=\"img-responsive\" height=\"50px\" width=\"80px\">\r\n                  </td>\r\n                </tr>\r\n\r\n                </tbody>\r\n              </table>\r\n\r\n            </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, productService) {
        this.authService = authService;
        this.productService = productService;
        this.myObj = [];
        this.buyObj = [];
        this.arrObj = new Array(0);
        this.singleUser = [];
        this.product = [];
        this.users = [];
        this.show = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getSiingleProfile(localStorage.getItem('loginId'))
            .subscribe(function (response) {
            _this.singleUser = response.data.wishList;
            _this.user = response.data.name;
        });
        this.authService.getProfile().subscribe(function (response) {
            _this.users = response.data;
            var _loop_1 = function (user) {
                var cnt = 1;
                var userWishListsId = user.wishList;
                if (userWishListsId != null)
                    for (var _i = 0, userWishListsId_1 = userWishListsId; _i < userWishListsId_1.length; _i++) {
                        var productId = userWishListsId_1[_i];
                        _this.productService.getSingleProduct(productId).subscribe(function (response) {
                            var dummyObj = {};
                            //if(cnt==1)
                            dummyObj.name = user.name;
                            dummyObj.product = response.data;
                            //console.log(dummyObj);
                            _this.buyObj.push(dummyObj);
                            //console.log('-------===========----------')
                            //console.log(this.buyObj);
                            cnt++;
                        });
                    }
                console.log('-----------------');
                var cnt2 = 1;
                var userBuyList = user.buyList;
                if (userBuyList)
                    for (var _a = 0, userBuyList_1 = userBuyList; _a < userBuyList_1.length; _a++) {
                        var productId = userBuyList_1[_a];
                        _this.productService.getSingleProduct(productId).subscribe(function (response) {
                            var dummyObj = {};
                            // if(cnt2==1)
                            dummyObj.name = user.name;
                            dummyObj.product = response.data;
                            console.log(dummyObj);
                            _this.myObj.push(dummyObj);
                            console.log('Fucking Here');
                            console.log(_this.myObj);
                            cnt2++;
                        });
                    }
            };
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var user = _a[_i];
                _loop_1(user);
            }
        });
    };
    DashboardComponent.prototype.getData = function () {
        var _this = this;
        this.show = 1;
        console.log(this.singleUser);
        for (var i = 0; i < this.singleUser.length; i++)
            this.productService.getSingleProduct(this.singleUser[i]).subscribe(function (response) {
                _this.arrObj.push(response.data);
                console.log(response.data);
            });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/details/details.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/*****************globals*************/\r\nbody {\r\n  font-family: 'open sans';\r\n  overflow-x: hidden; }\r\nimg {\r\n  max-width: 100%; }\r\n.preview {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n  .preview {\r\n    margin-bottom: 20px; } }\r\n.preview-pic {\r\n  -webkit-box-flex: 1;\r\n  -ms-flex-positive: 1;\r\n  flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs {\r\n  border: none;\r\n  margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs li {\r\n  width: 18%;\r\n  margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs li img {\r\n  max-width: 100%;\r\n  display: block; }\r\n.preview-thumbnail.nav-tabs li a {\r\n  padding: 0;\r\n  margin: 0; }\r\n.preview-thumbnail.nav-tabs li:last-of-type {\r\n  margin-right: 0; }\r\n.tab-content {\r\n  overflow: hidden; }\r\n.tab-content img {\r\n  width: 100%;\r\n  -webkit-animation-name: opacity;\r\n  animation-name: opacity;\r\n  -webkit-animation-duration: .3s;\r\n  animation-duration: .3s; }\r\n.card {\r\n  margin-top: 50px;\r\n  background: #eee;\r\n  padding: 3em;\r\n  line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n  .wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex; } }\r\n.details {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column; }\r\n.colors {\r\n  -webkit-box-flex: 1;\r\n  -ms-flex-positive: 1;\r\n  flex-grow: 1; }\r\n.product-title, .price, .sizes, .colors {\r\n  text-transform: UPPERCASE;\r\n  font-weight: bold; }\r\n.checked, .price span {\r\n  color: #ff9f1a; }\r\n.product-title, .rating, .product-description, .price, .vote, .sizes {\r\n  margin-bottom: 15px; }\r\n.product-title {\r\n  margin-top: 0; }\r\n.size {\r\n  margin-right: 10px; }\r\n.size:first-of-type {\r\n  margin-left: 40px; }\r\n.color {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n  height: 2em;\r\n  width: 2em;\r\n  border-radius: 2px; }\r\n.color:first-of-type {\r\n  margin-left: 20px; }\r\n.add-to-cart, .like {\r\n  background: #ff9f1a;\r\n  padding: 1.2em 1.5em;\r\n  border: none;\r\n  text-transform: UPPERCASE;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  -webkit-transition: background .3s ease;\r\n  transition: background .3s ease; }\r\n.add-to-cart:hover, .like:hover {\r\n  background: #b36800;\r\n  color: #fff; }\r\n.not-available {\r\n  text-align: center;\r\n  line-height: 2em; }\r\n.not-available:before {\r\n  font-family: fontawesome;\r\n  content: \"\\f00d\";\r\n  color: #fff; }\r\n.orange {\r\n  background: #ff9f1a; }\r\n.green {\r\n  background: #85ad00; }\r\n.blue {\r\n  background: #0076ad; }\r\n.tooltip-inner {\r\n  padding: 1.3em; }\r\n@-webkit-keyframes opacity {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(3);\r\n    transform: scale(3); }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1); } }\r\n@keyframes opacity {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(3);\r\n    transform: scale(3); }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1); } }\r\n/*# sourceMappingURL=style.css.map */\r\n.product-stock{\r\n  color: #74DF00;\r\n  font-size: 20px;\r\n  margin-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" *ngIf=\"product\">\r\n  <div class=\"card\">\r\n    <div class=\"container-fliud\">\r\n      <div class=\"wrapper row\">\r\n        <div class=\"preview col-md-6\">\r\n\r\n          <div class=\"preview-pic tab-content\">\r\n            <div  class=\"tab-pane active\" id=\"pic-1\"><img src=\"http://ridezonebd.us.openode.io/{{product.picture[0]}}\" alt=\"...\" class=\"img-responsive\" ></div>\r\n            <div class=\"tab-pane\" id=\"pic-2\"><img src=\"http://ridezonebd.us.openode.io/{{product.picture[1]}}\" /></div>\r\n            <div class=\"tab-pane\" id=\"pic-3\"><img src=\"http://ridezonebd.us.openode.io/{{product.picture[2]}}\"  /></div>\r\n            <div class=\"tab-pane\" id=\"pic-4\"><img src=\"http://ridezonebd.us.openode.io/{{product.picture[3]}}\" /></div>\r\n            <div class=\"tab-pane\" id=\"pic-5\"><img src=\"http://ridezonebd.us.openode.io/{{product.picture[4]}}\"  /></div>\r\n          </div>\r\n          <ul class=\"preview-thumbnail nav nav-tabs\">\r\n            <li class=\"active\"><a data-target=\"#pic-1\" data-toggle=\"tab\"><img src=\"http://ridezonebd.us.openode.io/{{product.picture[0]}}\" /></a></li>\r\n            <li *ngIf=\"product.picture[1]\"><a data-target=\"#pic-2\" data-toggle=\"tab\"><img src=\"http://ridezonebd.us.openode.io/{{product.picture[1]}}\" /></a></li>\r\n            <li *ngIf=\"product.picture[2]\"><a data-target=\"#pic-3\" data-toggle=\"tab\"><img src=\"http://ridezonebd.us.openode.io/{{product.picture[2]}}\" /></a></li>\r\n            <li *ngIf=\"product.picture[3]\"><a data-target=\"#pic-4\" data-toggle=\"tab\"><img src=\"http://ridezonebd.us.openode.io/{{product.picture[3]}}\" /></a></li>\r\n            <li *ngIf=\"product.picture[4]\"><a data-target=\"#pic-5\" data-toggle=\"tab\"><img src=\"http://ridezonebd.us.openode.io/{{product.picture[4]}}\" /></a></li>\r\n          </ul>\r\n\r\n        </div>\r\n        <div class=\"details col-md-6\">\r\n          <h3 class=\"product-title\">{{product.name}}</h3>\r\n          <div class=\"rating\">\r\n            <div class=\"stars\">\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star\"></span>\r\n              <span class=\"fa fa-star\"></span>\r\n            </div>\r\n            <span class=\"review-no\">41 reviews</span>\r\n          </div>\r\n          <p class=\"product-description\">{{product.description}}</p>\r\n          <h4 class=\"price\">current price: <span>${{product.price}}</span></h4>\r\n          <p class=\"vote\"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>\r\n\r\n\r\n          <div class=\"product-stock\">In Stock <span style=\"color: crimson\">{{product.avl}}</span></div>\r\n\r\n          <br>\r\n\r\n          <div class=\"action\">\r\n            <button (click)=\"cart(1,product._id,product)\" class=\"add-to-cart btn btn-default\" type=\"button\">add to cart</button>\r\n            <button class=\"like btn btn-default\" type=\"button\"><span class=\"fa fa-heart\"></span></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, productService) {
        this.route = route;
        this.productService = productService;
        this.id = this.route.snapshot.paramMap.get('id');
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getSingleProduct(this.id).subscribe(function (response) {
            _this.product = response.data;
            //console.log(this.product);
        });
    };
    DetailsComponent.prototype.cart = function (cnt, productId, product) {
        this.productService.storeUserDatta(cnt, productId, product);
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-details',
            template: __webpack_require__("./src/app/components/details/details.component.html"),
            styles: [__webpack_require__("./src/app/components/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/editproduct/editproduct.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/editproduct/editproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" style=\"text-align: center\">Edit Product</h2>\r\n\r\n<form (submit)=\"update(product._id)\" >\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Name</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [(ngModel)]=\"product.name\" name=\"name\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Code</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [(ngModel)]=\"product.code\" name=\"code\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n  <!--<div class=\"form-group row\">-->\r\n  <!--<label class=\"col-sm-2 col-form-label\">Picture</label>-->\r\n  <!--<div class=\"col-sm-10\">-->\r\n  <!--<input type=\"text\" [(ngModel)]=\"picture\" name=\"picture\" class=\"form-control\">-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Description</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"textarea\" [(ngModel)]=\"product.description\" name=\"description\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Price</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [(ngModel)]=\"product.price\" name=\"price\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Category</label>\r\n    <div class=\"col-sm-10\" >\r\n      <select type=\"text\" [(ngModel)]=\"product.category\" name=\"category\" class=\"form-control\">\r\n\r\n        <option *ngFor=\"let cat of category\" >{{cat.category}}</option>\r\n\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Availability</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [(ngModel)]=\"product.avl\" name=\"avl\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!--<input type=\"submit\" class=\"btn btn-primary\">-->\r\n  <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit</button>\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/editproduct/editproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditproductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_product__ = __webpack_require__("./src/app/model/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditproductComponent = /** @class */ (function () {
    function EditproductComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.product = new __WEBPACK_IMPORTED_MODULE_3__model_product__["a" /* Product */]();
        this.category = [];
    }
    EditproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        //console.log(id);
        this.productService.getSingleProduct(id).subscribe(function (response) {
            _this.product = response.data;
            console.log(_this.product);
        });
        this.productService.getCategory()
            .subscribe(function (response) {
            _this.category = response.data;
        });
        console.log(this.product);
    };
    EditproductComponent.prototype.update = function (id) {
        this.productService.updateProduct(id, this.product)
            .subscribe(function (response) {
            console.log(response);
        });
        this.router.navigate(['/']);
    };
    EditproductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editproduct',
            template: __webpack_require__("./src/app/components/editproduct/editproduct.component.html"),
            styles: [__webpack_require__("./src/app/components/editproduct/editproduct.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditproductComponent);
    return EditproductComponent;
}());



/***/ }),

/***/ "./src/app/components/editprofile/editprofile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/editprofile/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row centered-form\">\r\n    <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">Register <small>It's free!</small></h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <form *ngIf=\"user\" (submit)=\"onUpdate(user)\" role=\"form\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" [(ngModel)]=\"user.name\" name=\"first_name\" id=\"first_name\" class=\"form-control input-sm\" placeholder=\"First Name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" [(ngModel)]=\"user.username\" name=\"last_name\" id=\"last_name\" class=\"form-control input-sm\" placeholder=\"User Name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Email Address\">\r\n            </div>\r\n\r\n            <!--<div class=\"row\">-->\r\n              <!--<div class=\"col-xs-6 col-sm-6 col-md-6\">-->\r\n                <!--<div class=\"form-group\">-->\r\n                  <!--<input type=\"text\" [(ngModel)]=\"user.password\" name=\"password\" id=\"password\" class=\"form-control input-sm\" placeholder=\"Password\">-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"col-xs-6 col-sm-6 col-md-6\">-->\r\n                <!--<div class=\"form-group\">-->\r\n                  <!--<input type=\"password\"  name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control input-sm\" placeholder=\"Confirm Password\">-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n\r\n            <input type=\"submit\" value=\"Register\" class=\"btn btn-info btn-block\">\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/editprofile/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent(authService, validateService, _flashMessagesService, router, route) {
        this.authService = authService;
        this.validateService = validateService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
        this.route = route;
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.authService.getSiingleProfile(id).subscribe(function (response) {
            _this.user = response.data;
        });
    };
    EditprofileComponent.prototype.onUpdate = function (user) {
        var _this = this;
        //Required Fiels
        if (!this.validateService.validateRegister(user)) {
            // this.flashMessages.show('Please fill in all fields',{cssClass: 'alert-danger',timeout:300});
            // this.flashMessage.warning('Please fill in all fields',{delay:2000});
            this._flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger' });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            // this.flashMessages.show('Please use a valid email',{cssClass: 'alert-danger',timeout:300});
            this._flashMessagesService.show('Please use valid Email!', { cssClass: 'alert-danger' });
            return false;
        }
        var id = this.route.snapshot.paramMap.get('id');
        this.authService.UpdateProfile(id, user)
            .subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('You are now Registered.', { cssClass: 'alert-success' });
                _this.router.navigate(['/profile']);
            }
            else {
                _this._flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    EditprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__("./src/app/components/editprofile/editprofile.component.html"),
            styles: [__webpack_require__("./src/app/components/editprofile/editprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.card {\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  width: 300px;\r\n  margin-left: 40px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card:hover {\r\n  -webkit-box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.container {\r\n  padding: 2px 12px;\r\n  overflow-x: hidden;\r\n\r\n}\r\n\r\n.thumbnail img {\r\n  height: 160px;\r\n  width: 300px;\r\n\r\n}\r\n\r\n.thumbnail .description {\r\n  color: #7f7f7f;\r\n}\r\n\r\n.price {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"jumbotron text-center\" style=\"height: 130px\">-->\r\n  <!--<h1 style=\"text-align: center;margin-top: 1px\">Ride Zone</h1>-->\r\n  <!--&lt;!&ndash;<p class=\"lead\"> This is the lasgest online Market in Bangladesh</p>&ndash;&gt;-->\r\n\r\n<!--</div>-->\r\n\r\n<!--<div class=\"container-fluid container\">-->\r\n  <!--<div *ngIf=\"products\" class=\"row\">-->\r\n    <!--<div *ngFor=\"let product of products;let i = index\">-->\r\n\r\n      <!--<div *ngIf=\"(i%4 == 0)\" class=\"col-md-3\" style=\"margin-left: 0px\">-->\r\n        <!--<h2 >{{product.name}}</h2>-->\r\n        <!--<img src=\"http://localhost:3000/{{product.picture}}\" style=\"width: 100%\">-->\r\n        <!--<h4><b>Price:</b> <span style=\"color: crimson\">{{product.price}}</span></h4>-->\r\n\r\n        <!--<p>{{product.description}}</p>-->\r\n      <!--</div>-->\r\n\r\n      <!--<div *ngIf=\"(i%4 != 0)\" class=\"col-md-3\">-->\r\n        <!--<h2 >{{product.name}}</h2>-->\r\n        <!--<img src=\"http://localhost:3000/{{product.picture}}\" style=\"width: 100%\">-->\r\n        <!--<h4 ><b>Price:</b> <span style=\"color: green\">{{product.price}}</span></h4>-->\r\n\r\n        <!--<p>{{product.description}}</p>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n\r\n<!--card-->\r\n\r\n<!--<div *ngIf=\"products\" class=\"row\">-->\r\n\r\n  <!--<div *ngFor=\"let product of products;let i = index\" class=\"col-md-3\">-->\r\n\r\n            <!--<div  class=\"card\">-->\r\n              <!--<h2>{{product.name}}</h2>-->\r\n              <!--<img src=\"http://localhost:3000/{{product.picture}}\" alt=\"Avatar\" style=\"width:100%\" height=\"180px\" width=\"250px\">-->\r\n              <!--<div class=\"container\">-->\r\n                <!--<h4><b>Price:</b>{{product.price}}</h4>-->\r\n                <!--<p>{{product.description}}</p>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n<!--card end-->\r\n\r\n\r\n<div *ngIf=\"products\" class=\"row\">\r\n    <div *ngFor=\"let product of products;let i = index\" class=\"col-sm-6 col-md-4\">\r\n\r\n      <div  class=\"thumbnail\">\r\n        <h3 style=\"float: left\">{{product.code}}</h3>\r\n\r\n        <!--<h1 style=\"color: blue\">Asadul</h1>-->\r\n\r\n        <button (click)=\"delFunc(product)\" *ngIf=\"isAdmin\" style=\"float: right;margin-top: 18px;margin-right: 15px;\" type=\"button\" class=\"btn btn-danger btn-sm\">\r\n          <span class=\"glyphicon glyphicon-trash\"></span> Trash\r\n        </button>\r\n\r\n        <button *ngIf=\"isAdmin\" (click)=\"editProduct(product._id)\" style=\"float: right;margin-top: 18px;margin-right: 15px;\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n          <span class=\"glyphicon glyphicon-edit\"></span> Edit\r\n        </button>\r\n\r\n\r\n        <h3 (click)=\"detailsView(product._id)\" style=\"color: deepskyblue;text-align: center\">{{product.name}}</h3>\r\n\r\n        <img (click)=\"detailsView(product._id)\" src=\"http://app-a2062cdd-cd38-4cd4-86e2-48ea34537986.cleverapps.io/{{product.picture[0]}}\" alt=\"...\" class=\"img-responsive\">\r\n        <div class=\"caption\">\r\n          <p class=\"description\">{{ product.description }}</p>\r\n          <div class=\"clearfix\">\r\n            <div class=\"price pull-left\">${{ product.price }}</div>\r\n\r\n\r\n            <a (click)=\"cart(1,product._id,product)\" class=\"btn btn-success pull-right\" role=\"button\">Add to Shopping Cart</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.products = [];
        this.products = [];
        if (localStorage.getItem('isAdmin') == "true")
            this.isAdmin = 1;
        console.log(this.isAdmin);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProduct()
            .subscribe(function (response) {
            _this.products = response.data;
            console.log(_this.products);
        });
    };
    HomeComponent.prototype.cart = function (cnt, productId, product) {
        this.productService.storeUserDatta(cnt, productId, product);
    };
    HomeComponent.prototype.detailsView = function (id) {
        this.router.navigate(["/details/" + id]);
    };
    HomeComponent.prototype.editProduct = function (id) {
        this.router.navigate(["/edit/" + id]);
    };
    // deleteProduct(product){
    //   console.log('delete working');
    //   this.productService.deleteProduct(product._id).subscribe(resoponse=>{
    //     console.log(resoponse);
    //     let productIndex = this.products.indexOf(product);
    //     let myProducts = this.products;
    //     myProducts.slice(productIndex, 1);
    //     this.products = myProducts;
    //   });
    //   // this.router.navigate(['/']);
    // }
    HomeComponent.prototype.delFunc = function (prod) {
        this.products.splice(this.products.indexOf(prod), 1);
        this.productService.deleteProduct(prod._id).subscribe(function (respnse) {
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\r\n<form (submit)=\"onLoginSubmit()\" class=\"form-signin\">\r\n  <img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\r\n  <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\r\n  <label for=\"inputEmail\" class=\"sr-only\">Email</label>\r\n  <input type=\"email\"  id=\"inputEmail\" class=\"form-control\"\r\n         [(ngModel)] = \"email\"\r\n         name=\"email\"\r\n         placeholder=\"Email\"\r\n         required autofocus style=\"width: 40%;margin-left: 30%\">\r\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label><br>\r\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\"\r\n         [(ngModel)] = \"password\"\r\n         name=\"password\"\r\n         placeholder=\"Password\" required style=\"width: 40%;margin-left: 30%\">\r\n  <div class=\"checkbox mb-3\">\r\n    <label>\r\n      <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n    </label>\r\n  </div>\r\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" style=\"width: 40%;margin-left: 30%\">Sign in</button>\r\n  <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\r\n</form>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router, productService) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.productService = productService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (res) {
            //console.log(user.email);
            if (res.success) {
                // console.log(res.data.isAdmin);
                localStorage.setItem('isAdmin', res.data.isAdmin);
                localStorage.setItem('loginId', res.data._id);
                _this.authService.storeUserDatta(res.token, res.data);
                _this.flashMessage.show('You are now Logged In!', { cssClass: 'alert-success' });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger' });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.navbar .navbar-collapse {\r\n  text-align: center;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fab fa-rendact\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a  [routerLink]=\"['/']\">Home</a></li>\r\n      <!--<li><a href=\"#\">Page 2</a></li>-->\r\n\r\n\r\n\r\n\r\n\r\n      <li style=\"height: 35px\">\r\n        <mat-form-field  (onSelect)=\"onChangeOption($event)\">\r\n          <input style=\"background-color: white;height: 32px;border-radius: 3px\" type=\"text\" placeholder=\"Search\" aria-label=\"Number\" matInput [(ngModel)]=\"value\" [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n              {{ option }}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n        <button style=\"margin-bottom: 15px\" class=\"btn btn-primary\" (click)=\"onChangeOption($event)\">Search</button>\r\n      </li>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </ul>\r\n\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n\r\n      <li *ngIf=\"isAdmin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink]=\"['/dashboard']\"><span class=\"glyphicon glyphicon-user\"></span> Dashboard</a></li>\r\n      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink]=\"['/profile']\"><span class=\"glyphicon glyphicon-user\"></span> Profile</a></li>\r\n\r\n\r\n      <li *ngIf=\"isAdmin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink]=\"['/product']\"><span class=\"glyphicon glyphicon-plus-sign\"></span>Add Product</a></li>\r\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink]=\"['/cart']\"><i class=\"glyphicon glyphicon-shopping-cart\"></i>\r\n\r\n        <span class=\"badge\">{{productService.getProductCartSize()||cart}}</span>\r\n\r\n      </a></li>\r\n\r\n\r\n      <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink]=\"['/register']\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\r\n      <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n      <li  *ngIf=\"authService.loggedIn()\" ><a (click)=\"onLogoutClick()\"  href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage, productService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.productService = productService;
        this.isAdmin = 0;
        //Material Design
        this.myControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]();
        this.options = [];
        this.cart = this.productService.loadToken();
        if (localStorage.getItem('isAdmin') == "true")
            this.isAdmin = 1;
        console.log(this.isAdmin);
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
        this.productService.getProduct()
            .subscribe(function (resposnse) {
            _this.product = resposnse.data;
            _this.product.forEach(function (pd) {
                _this.options.push(pd.name);
            });
        });
    };
    NavbarComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Your are successfully logged out!', { cssClass: 'alert-success' });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.onChangeOption = function (e) {
        for (var _i = 0, _a = this.product; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.name == this.myControl.value)
                this.router.navigate(["/details/" + product._id]);
        }
        console.log(this.myControl.value);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/photo-upload/photo-upload.component.css":
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n  }\r\n  \r\n  .card{\r\n    background-color: white;\r\n    -webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n            box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n  }\r\n  \r\n  .uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }"

/***/ }),

/***/ "./src/app/components/photo-upload/photo-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <div class=\"row card\">\n        <div class=\"col-sm-12\">\n          <h4>Upload Section</h4>\n          <div id=\"fileSelector\">\n            <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\"\n                   multiple ng2FileSelect [uploader]=\"uploader\">\n          </div>\n          <div>\n            <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n              <div class=\"col-sm-4\">{{item.file.name}}</div>\n              <div class=\"col-sm-4\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar bg-success\"\n                       [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                </div>\n              </div>\n              <div class=\"col-sm-4\">\n                <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/photo-upload/photo-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_file_service__ = __webpack_require__("./src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var uri = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].baseUrl + "/product";
var ur2;
var PhotoUploadComponent = /** @class */ (function () {
    // http://localhost:4200/photo/5aca319a784c6127c01e3f48
    function PhotoUploadComponent(_fileService, productService, route, router) {
        var _this = this;
        this._fileService = _fileService;
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.attachmentList = [];
        var id = this.route.snapshot.paramMap.get('id');
        ur2 = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].baseUrl + "/product/" + id;
        console.log('Here ' + id + ' there');
        console.log(ur2);
        this.product = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: ur2 });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
            console.log(item);
            _this.router.navigate(['/']);
        };
    }
    PhotoUploadComponent.prototype.ngOnInit = function () {
    };
    PhotoUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo-upload',
            template: __webpack_require__("./src/app/components/photo-upload/photo-upload.component.html"),
            styles: [__webpack_require__("./src/app/components/photo-upload/photo-upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]])
    ], PhotoUploadComponent);
    return PhotoUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" style=\"text-align: center\">Add Product</h2>\r\n\r\n<form (submit)=\"onRegisterSubmit()\" >\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Name</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Code</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [(ngModel)]=\"code\" name=\"code\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!--<div class=\"form-group row\">-->\r\n    <!--<label class=\"col-sm-2 col-form-label\">Picture</label>-->\r\n    <!--<div class=\"col-sm-10\">-->\r\n      <!--<input type=\"text\" [(ngModel)]=\"picture\" name=\"picture\" class=\"form-control\">-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Description</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"textarea\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Price</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [(ngModel)]=\"price\" name=\"price\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Category</label>\r\n    <div class=\"col-sm-10\" >\r\n      <select type=\"text\" [(ngModel)]=\"category\" name=\"category\" class=\"form-control\">\r\n\r\n        <option *ngFor=\"let cat of Category\" >{{cat.category}}</option>\r\n\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">Availability</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [(ngModel)]=\"avl\" name=\"avl\" class=\"form-control\">\r\n    </div>\r\n  </div>\r\n\r\n  <!--<input type=\"submit\" class=\"btn btn-primary\">-->\r\n  <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit</button>\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, router, flashMessage, validateService) {
        this.productService = productService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.Category = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getCategory()
            .subscribe(function (response) {
            _this.Category = response.data;
        });
    };
    ProductComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var product = {
            name: this.name,
            code: this.code,
            category: this.category,
            description: this.description,
            price: this.price,
            avl: this.avl
        };
        console.log(this.category);
        this.productService.registerProduct(product).subscribe(function (response) {
            if (response.success) {
                console.log(response.data._id);
                var id = response.data._id;
                _this.flashMessage.show('Successfully created Product', { cssClass: 'alert-success' });
                _this.router.navigate(["/photo/" + id]);
            }
            else {
                _this.router.navigate(['/product']);
            }
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/components/product/product.component.html"),
            styles: [__webpack_require__("./src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" style=\"width: 70%; margin-left: 15%\">\r\n  <div class=\"panel-heading\">Profile</div>\r\n  <div class=\"panel-body\">\r\n\r\n    <div class=\"table-responsive\">\r\n\r\n    <table  class=\"table\">\r\n      <thead>\r\n      <tr>\r\n        <th style=\"text-align: center\">Name</th>\r\n        <th style=\"text-align: center\">Email</th>\r\n        <th style=\"text-align: center\">Username</th>\r\n        <th style=\"text-align: center\">Action</th>\r\n\r\n      </tr>\r\n      </thead>\r\n\r\n\r\n        <tbody *ngFor=\"let user of users;let i = index\">\r\n                <tr  *ngIf=\"(i%2==0)\">\r\n                  <td style=\"text-align: center\">{{user.name}}</td>\r\n                  <td style=\"text-align: center\">{{user.email}}</td>\r\n                  <td style=\"text-align: center\">{{user.username}}</td>\r\n                  <!--<td style=\"text-align: center\">{{user.isAdmin}}</td>-->\r\n                  <td *ngIf=\"user.isAdmin==false\" style=\"text-align: center\"><a (click)=\"deleteProfile(user)\" class=\"btn btn-danger a-btn-slide-text\">\r\n                    <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n                    <span><strong>Delete</strong></span>\r\n                  </a></td>\r\n                </tr>\r\n\r\n                <tr class=\"success\" *ngIf=\"(i%2!=0)\">\r\n                  <td style=\"text-align: center\">{{user.name}}</td>\r\n                  <td style=\"text-align: center\">{{user.email}}</td>\r\n                  <td style=\"text-align: center\">{{user.username}}</td>\r\n                  <!--<td style=\"text-align: center\">{{user.isAdmin}}</td>-->\r\n\r\n                  <td *ngIf=\"user.isAdmin==false\" style=\"text-align: center\"><a (click)=\"deleteProfile(user)\" class=\"btn btn-danger a-btn-slide-text\">\r\n                    <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n                    <span><strong>Delete</strong></span>\r\n                  </a></td>\r\n\r\n                </tr>\r\n        </tbody>\r\n\r\n\r\n\r\n        <tbody *ngIf=\"!users\">\r\n        <tr *ngIf=\"singleUser\" class=\"success\">\r\n          <td style=\"text-align: center\">{{singleUser.name}}</td>\r\n          <td style=\"text-align: center\">{{singleUser.email}}</td>\r\n          <td style=\"text-align: center\">{{singleUser.username}}</td>\r\n          <td style=\"text-align: center\"><a (click)=\"editProfile(singleUser._id)\" class=\"btn btn-info a-btn-slide-text\">\r\n          <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n          <span><strong>Edit</strong></span>\r\n        </a></td>\r\n        </tr>\r\n        </tbody>\r\n\r\n\r\n    </table>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.users = [];
        this.singleUser = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (response) {
            _this.users = response.data;
            //console.log(this.users);
        });
        //console.log("Here " + localStorage.getItem('loginId'));
        this.authService.getSiingleProfile(localStorage.getItem('loginId'))
            .subscribe(function (response) {
            _this.singleUser = response.data;
            //console.log(this.singleUser);
        });
    };
    ProfileComponent.prototype.editProfile = function (id) {
        this.router.navigate(["/editprofile/" + id]);
    };
    ProfileComponent.prototype.deleteProfile = function (user) {
        this.users.splice(this.users.indexOf(user), 1);
        this.authService.deleteProfile(user._id).subscribe(function (respnse) {
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-heading {\r\n  padding: 5px 15px;\r\n}\r\n\r\n.panel-footer {\r\n  padding: 1px 15px;\r\n  color: #A0A0A0;\r\n}\r\n\r\n.profile-img {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<form (submit)=\"onRegisterSubmit()\" class=\"form-horizontal\">\r\n  <fieldset>\r\n\r\n    <!-- Form Name -->\r\n    <legend style=\"text-align: center\">Register Yourself</legend>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"fname\">First Name</label>\r\n      <div class=\"col-md-4\">\r\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"first_name\" id=\"first_name\" class=\"form-control input-sm\" placeholder=\"First Name\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"lname\">User Name</label>\r\n      <div class=\"col-md-4\">\r\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"last_name\" id=\"last_name\" class=\"form-control input-sm\" placeholder=\"User Name\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"email\">Email</label>\r\n      <div class=\"col-md-4\">\r\n        <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Email Address\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Password input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"password\">Password</label>\r\n      <div class=\"col-md-4\">\r\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" class=\"form-control input-sm\" placeholder=\"Password\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"password\">Confirm Password</label>\r\n      <div class=\"col-md-4\">\r\n        <input type=\"password\"  name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control input-sm\" placeholder=\"Confirm Password\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Button (Double) -->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"save\"></label>\r\n      <div class=\"col-md-8\">\r\n        <button id=\"save\" name=\"save\" class=\"btn btn-success\">Register</button>\r\n      </div>\r\n    </div>\r\n\r\n  </fieldset>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--<div class=\"container\">-->\r\n  <!--<div class=\"row centered-form\">-->\r\n    <!--<div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">-->\r\n      <!--<div class=\"panel panel-default\">-->\r\n        <!--<div class=\"panel-heading\">-->\r\n          <!--<h3 class=\"panel-title\">Register <small>It's free!</small></h3>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"panel-body\">-->\r\n          <!--<form (submit)=\"onRegisterSubmit()\" role=\"form\">-->\r\n            <!--<div class=\"row\">-->\r\n              <!--<div class=\"col-xs-6 col-sm-6 col-md-6\">-->\r\n                <!--<div class=\"form-group\">-->\r\n                  <!--<input type=\"text\" [(ngModel)]=\"name\" name=\"first_name\" id=\"first_name\" class=\"form-control input-sm\" placeholder=\"First Name\">-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"col-xs-6 col-sm-6 col-md-6\">-->\r\n                <!--<div class=\"form-group\">-->\r\n                  <!--<input type=\"text\" [(ngModel)]=\"username\" name=\"last_name\" id=\"last_name\" class=\"form-control input-sm\" placeholder=\"User Name\">-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"form-group\">-->\r\n              <!--<input type=\"email\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Email Address\">-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"row\">-->\r\n              <!--<div class=\"col-xs-6 col-sm-6 col-md-6\">-->\r\n                <!--<div class=\"form-group\">-->\r\n                  <!--<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" class=\"form-control input-sm\" placeholder=\"Password\">-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"col-xs-6 col-sm-6 col-md-6\">-->\r\n                <!--<div class=\"form-group\">-->\r\n                  <!--<input type=\"password\"  name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control input-sm\" placeholder=\"Confirm Password\">-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n\r\n            <!--<input type=\"submit\" value=\"Register\" class=\"btn btn-info btn-block\">-->\r\n\r\n          <!--</form>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--<h2 class=\"page-header\">Register</h2>-->\r\n\r\n<!--<form (submit)=\"onRegisterSubmit()\" >-->\r\n\r\n\r\n  <!--<div class=\"form-group row\">-->\r\n    <!--<label class=\"col-sm-2 col-form-label\">Name</label>-->\r\n    <!--<div class=\"col-sm-10\">-->\r\n      <!--<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n\r\n  <!--<div class=\"form-group row\">-->\r\n    <!--<label class=\"col-sm-2 col-form-label\">Email</label>-->\r\n    <!--<div class=\"col-sm-10\">-->\r\n      <!--<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--&lt;!&ndash;<div class=\"form-group\">&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<label>Email</label>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">&ndash;&gt;-->\r\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n  <!--<div class=\"form-group row\">-->\r\n    <!--<label class=\"col-sm-2 col-form-label\">UserName</label>-->\r\n    <!--<div class=\"col-sm-10\">-->\r\n      <!--<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--&lt;!&ndash;<div class=\"form-group\">&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<label>UserName</label>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">&ndash;&gt;-->\r\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n\r\n  <!--<div class=\"form-group row\">-->\r\n    <!--<label class=\"col-sm-2 col-form-label\">Password</label>-->\r\n    <!--<div class=\"col-sm-10\">-->\r\n      <!--<input type=\"password\" [(ngModel)]=\"password\" name=\"email\" class=\"form-control\">-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--&lt;!&ndash;<input type=\"submit\" class=\"btn btn-primary\">&ndash;&gt;-->\r\n  <!--<button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit</button>-->\r\n\r\n\r\n<!--</form>-->\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, _flashMessagesService, authService, router) {
        this.validateService = validateService;
        this._flashMessagesService = _flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            wishList: this.wishList,
            buyList: this.buyList
        };
        //Required Fiels
        if (!this.validateService.validateRegister(user)) {
            // this.flashMessages.show('Please fill in all fields',{cssClass: 'alert-danger',timeout:300});
            // this.flashMessage.warning('Please fill in all fields',{delay:2000});
            this._flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger' });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            // this.flashMessages.show('Please use a valid email',{cssClass: 'alert-danger',timeout:300});
            this._flashMessagesService.show('Please use valid Email!', { cssClass: 'alert-danger' });
            return false;
        }
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('You are now Registered.', { cssClass: 'alert-success' });
                _this.router.navigate(['/login']);
            }
            else {
                _this._flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/gaurds/admin.gaurd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGaurd = /** @class */ (function () {
    function AdminGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGaurd.prototype.canActivate = function () {
        if (this.authService.loggedIn() && localStorage.getItem('isAdmin') == "true") {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AdminGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminGaurd);
    return AdminGaurd;
}());



/***/ }),

/***/ "./src/app/gaurds/auth.gaurd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurd.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGaurd.prototype.canActivateAdmin = function () {
        if (this.authService.loggedIn() && localStorage.getItem('isAdmin') == "true") {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "./src/app/model/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/user", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // authenticateUser(user){
    //
    //   let headers = new Headers();
    //   headers.append('Content-type','application/json');
    //   return this.http.post('http://localhost:3000/authenticate' ,user ,{headers:headers})
    //     .map( res => res.json());
    //
    // }
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/auth/login", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSiingleProfile = function (loginId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/user/" + loginId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.UpdateProfile = function (loginId, User) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-type', 'application/json');
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/user/" + loginId, User, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        // console.log('Token '+this.authToken);
        headers.append('authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/user", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteProfile = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        console.log('In delete profile');
        // console.log('Token '+this.authToken);
        headers.append('authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/user/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserDatta = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileService = /** @class */ (function () {
    function FileService() {
    }
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productCartSize = 0;
        this.myProductArray = [];
    }
    ProductService.prototype.getProductCartSize = function () {
        return localStorage.getItem('cnt');
    };
    ProductService.prototype.registerProduct = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/product", product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProduct = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/product", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getSingleProduct = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/product/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.getToken();
        // console.log('Token '+this.authToken);
        headers.append('authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/product/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getCategory = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/category", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.storeUserDatta = function (paramcnt, userId, product) {
        console.log(product);
        var cnt2 = localStorage.getItem('cnt');
        this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));
        if (this.myProductArray == null) {
            console.log('My product cart array is null.');
            this.myProductArray = [];
        }
        //
        // console.log('type of  cnt2: ' + typeof cnt2 + ' and val: ' + cnt2);
        // console.log('type of  paramcnt: ' + typeof paramcnt + ' and val: ' + paramcnt);
        if (cnt2 == null) {
            // console.log('cnt2 is null.');
            cnt2 = '0';
        }
        var productExistence = false;
        var productIndex;
        console.log('My Product Cart array length: ' + this.myProductArray.length);
        for (var index = 0; index < this.myProductArray.length; index++) {
            var myProductInfo = this.myProductArray[index];
            console.log(myProductInfo);
            console.log();
            var myProduct = myProductInfo.myProduct;
            var myProductCount = myProductInfo.myProductCount;
            if (myProduct._id == product._id) {
                console.log('My Product exists');
                productExistence = true;
                console.log(this.myProductArray[index].myProductCount);
                this.myProductArray[index].myProductCount = this.myProductArray[index].myProductCount + 1;
                break;
            }
        }
        if (productExistence == false) {
            var myProductInfo = {};
            myProductInfo.myProduct = product;
            myProductInfo.myProductCount = 1;
            this.myProductArray.push(myProductInfo);
        }
        localStorage.setItem('myProductCart', JSON.stringify(this.myProductArray));
        // console.log(JSON.parse(localStorage.getItem('myProductCart')));
        var myPreviousCount = parseInt(cnt2);
        // console.log('After parsing: ' + myPreviousCount);
        cnt2 = (myPreviousCount + 1).toString();
        this.productCartSize = (myPreviousCount + 1);
        // console.log('After add: '  + paramcnt + ' get:  ' + cnt2);
        localStorage.setItem('cnt', cnt2);
        //console.log(user);
        //localStorage.setItem('user',JSON.stringify(user));
    };
    ProductService.prototype.loadToken = function () {
        return localStorage.getItem('cnt');
    };
    ProductService.prototype.getToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    ProductService.prototype.updateProduct = function (id, product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        console.log("In update product ");
        //console.log(JSON.stringify(product));
        headers.append('Content-type', 'application/json');
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/product/" + id, product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: ''
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map