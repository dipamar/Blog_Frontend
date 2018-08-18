(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: #04192E;\r\n    display: block;\r\n    padding: 3%;\r\n    color: white;\r\n    font-size: 26px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <div class=\"container\">\n    <div class=\"row header\">\n      <div class=\"col-md-12\">\n        <h1>\n          <a style=\"color: white\">{{title}}</a>\n        </h1>\n      </div>\n    </div>\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n            aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <!-- Router link tag need to be written it is special extension of angular n68e90-->\n            <li>\n              <a [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/create']\">Post a blog</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/about']\">About</a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular Blog App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/Router */ "./node_modules/@angular/Router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-view/blog-view.component */ "./src/app/blog-view/blog-view.component.ts");
/* harmony import */ var _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-create/blog-create.component */ "./src/app/blog-create/blog-create.component.ts");
/* harmony import */ var _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog-edit/blog-edit.component */ "./src/app/blog-edit/blog-edit.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _blog_about_blog_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog-about/blog-about.component */ "./src/app/blog-about/blog-about.component.ts");
/* harmony import */ var _blog_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog-service.service */ "./src/app/blog-service.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*added HttpClientModule to slove problem of
ERROR Error: Uncaught (in promise): Error: StaticInjectorError(AppModule)[BlogHttpService -> HttpClient]:
 StaticInjectorError(Platform: core)[BlogHttpService -> HttpClient]:
   NullInjectorError: No provider for HttpClient!
Error: StaticInjectorError(AppModule)[BlogHttpService -> HttpClient]:
 StaticInjectorError(Platform: core)[BlogHttpService -> HttpClient]:
   NullInjectorError: No provider for HttpClient!
*/

//import FormsModule 

//router module used for setting up the application lever route //n68e90








//import statement for a service


//importing BrowserAnimationsModule for the toast msgs



//decorators 
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_7__["BlogViewComponent"],
                _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_8__["BlogCreateComponent"],
                _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_9__["BlogEditComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _blog_about_blog_about_component__WEBPACK_IMPORTED_MODULE_11__["BlogAboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
                /*added HttpClientModule to slove problem HttpClientModule search in code */
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //routerModule forRoot method to declare the possible routes in application //n68e90
                _angular_Router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'about', component: _blog_about_blog_about_component__WEBPACK_IMPORTED_MODULE_11__["BlogAboutComponent"] },
                    // this is the route parameter blog/:blogId (syntax -- routeName/: nameOftheVariable we will pass it from the home here we are collecting it 
                    { path: 'blog/:blogId', component: _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_7__["BlogViewComponent"] },
                    { path: 'create', component: _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_8__["BlogCreateComponent"] },
                    { path: 'edit/:blogId', component: _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_9__["BlogEditComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] },
                ])
            ],
            //here we have to add a service     n68e90 MAke a entry of service class into the provider Array
            providers: [_blog_service_service__WEBPACK_IMPORTED_MODULE_12__["BlogServiceService"], _http_service__WEBPACK_IMPORTED_MODULE_13__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] //this the shell page 
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-about/blog-about.component.css":
/*!*****************************************************!*\
  !*** ./src/app/blog-about/blog-about.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-about/blog-about.component.html":
/*!******************************************************!*\
  !*** ./src/app/blog-about/blog-about.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog-about works!\n</p>\n"

/***/ }),

/***/ "./src/app/blog-about/blog-about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/blog-about/blog-about.component.ts ***!
  \****************************************************/
/*! exports provided: BlogAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogAboutComponent", function() { return BlogAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogAboutComponent = /** @class */ (function () {
    function BlogAboutComponent() {
    }
    BlogAboutComponent.prototype.ngOnInit = function () {
    };
    BlogAboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-about',
            template: __webpack_require__(/*! ./blog-about.component.html */ "./src/app/blog-about/blog-about.component.html"),
            styles: [__webpack_require__(/*! ./blog-about.component.css */ "./src/app/blog-about/blog-about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogAboutComponent);
    return BlogAboutComponent;
}());



/***/ }),

/***/ "./src/app/blog-create/blog-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required{\r\nborder-left: 5px solid green;\r\n}\r\n.ng-invalid:not(form){\r\n    border-left: 5px solid red;\r\n    }"

/***/ }),

/***/ "./src/app/blog-create/blog-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"text-align: left\">\n    <div class=\"col-md-12\">\n      <form #createBlogForm=\"ngForm\" (ngSubmit)=\"createBlog()\">\n        <div class=\"form-group\">\n          <label>Blog Title</label>\n          <input type=\"text\" name=\"blogTitle\" [(ngModel)]=\"blogTitle\" #title=\"ngModel\" class=\"form-control\" placeholder=\"Enter the title\"\n            required>\n        </div>\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n          Blog tilte is required\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" name=\"blogDescription\" [(ngModel)]=\"blogDescription\" #description=\"ngModel\" class=\"form-control\" placeholder=\"Enter the Description\"\n            required>\n        </div>\n        <div class=\"form-group\">\n          <label>Enter the Blog Body</label>\n          <!-- name and [(ngModel)] must be same and it is the name of the component class field\n                  #title is a way to give altername name to the model see how we used it after that\n                  -->\n          <input type=\"textarea\" name=\"blogBodyHtml\" [(ngModel)]=\"blogBodyHtml\" #blogBody=\"ngModel\" class=\"form-control\" rows=\"3\" placeholder=\"Enter the blog Body\"\n            required>\n        </div>\n        <div class=\"form-group\">\n          <label>Category</label>\n          <select name=\"blogCategory\" [(ngModel)]=\"blogCategory\" #category=\"ngModel\" class=\"form-control\" id=\"category\" required>\n            <!-- When something selected from the drowdown that comes in the [value] =\"category\" and then\n                      that value is stored int the blogCategory which is the original Model\n                      because we created binding here it is like ... name=\"blogCategory\"  #category=\"ngModel\" - we have given name category to the Model\n                      and we have assigned selected value to the category in [value] =\"category\"\n                      -->\n            <option *ngFor=\"let category of blogPossibleCategories\" [value]=\"category\">{{category}}</option>\n          </select>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createBlogForm.valid\">\n          Post the Blog\n        </button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blog-create/blog-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.ts ***!
  \******************************************************/
/*! exports provided: BlogCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCreateComponent", function() { return BlogCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _node_modules_angular_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/Router */ "./node_modules/@angular/Router/fesm5/router.js");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// below imports are for routing to the blog view after entering a blog


var BlogCreateComponent = /** @class */ (function () {
    function BlogCreateComponent(httpService, _route, router, toastr) {
        this.httpService = httpService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.blogPossibleCategories = ["Comedy", "Action", "Drama", "Technology"];
    }
    BlogCreateComponent.prototype.ngOnInit = function () {
    };
    BlogCreateComponent.prototype.createBlog = function () {
        var _this = this;
        console.log("called createBlog of create class");
        var blogData = {
            title: this.blogTitle,
            description: this.blogDescription,
            blogBody: this.blogBodyHtml,
            category: this.blogCategory,
        }; //end bolgData
        console.log("printing in create class");
        console.log(blogData);
        this.httpService.createBlog(blogData).subscribe(function (data) {
            console.log("blog created");
            // this.toastr.success('Blog is created successfully!', 'Success!');
            _this.toastr.success('Blog is created successfully!', 'Success', {
                timeOut: 1000,
                positionClass: 'toast-top-right'
            });
            //alert(`Blog is created successfully`);
            console.log(data);
            setTimeout(function () {
                _this.router.navigate(['/blog', data.data.blogId]);
            }, 1500);
        }, function (error) {
            console.log("Some error occured in Create");
            console.log(error.errorMessageg);
            _this.toastr.error('Sorry!!some error occured', 'Oops!', {
                timeOut: 1000,
                positionClass: 'toast-top-right'
            });
            //alert(`Sorry!!some error occured`);
        });
    }; //end of createBlog Method
    BlogCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-create',
            template: __webpack_require__(/*! ./blog-create.component.html */ "./src/app/blog-create/blog-create.component.html"),
            styles: [__webpack_require__(/*! ./blog-create.component.css */ "./src/app/blog-create/blog-create.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _node_modules_angular_Router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _node_modules_angular_Router__WEBPACK_IMPORTED_MODULE_2__["Router"], _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], BlogCreateComponent);
    return BlogCreateComponent;
}());



/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" style=\"text-align: left\">\n      <div class=\"col-md-12\">\n        <form #createBlogForm=\"ngForm\" (ngSubmit)=\"editThisBlog()\">\n          <div class=\"form-group\">\n            <label>Blog Title</label>\n            <input type=\"text\" name=\"blogTitle\" [(ngModel)]=\"currentBlog.title\" #title=\"ngModel\" class=\"form-control\" placeholder=\"Enter the title\"\n              required>\n          </div>\n          <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n            Blog tilte is required\n          </div>\n          <div class=\"form-group\">\n            <label>Description</label>\n            <input type=\"text\" name=\"blogDescription\" [(ngModel)]=\"currentBlog.description\" #description=\"ngModel\" class=\"form-control\" placeholder=\"Enter the Description\"\n              required>\n          </div>\n          <div class=\"form-group\">\n            <label>Enter the Blog Body</label>\n            <!-- name and [(ngModel)] must be same and it is the name of the component class field\n                    #title is a way to give altername name to the model see how we used it after that\n                    -->\n            <input type=\"textarea\" name=\"blogBodyHtml\" [(ngModel)]=\"currentBlog.bodyHtml\" #blogBody=\"ngModel\" class=\"form-control\" rows=\"3\" placeholder=\"Enter the blog Body\"\n              required>\n          </div>\n          <div class=\"form-group\">\n            <label>Category</label>\n            <select name=\"blogCategory\" [(ngModel)]=\"currentBlog.category\" #category=\"ngModel\" class=\"form-control\" id=\"category\" required>\n              <!-- When something selected from the drowdown that comes in the [value] =\"category\" and then\n                        that value is stored int the blogCategory which is the original Model\n                        because we created binding here it is like ... name=\"blogCategory\"  #category=\"ngModel\" - we have given name category to the Model\n                        and we have assigned selected value to the category in [value] =\"category\"\n                        -->\n              <option *ngFor=\"let category of blogPossibleCategories\" [value]=\"category\">{{category}}</option>\n            </select>\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createBlogForm.valid\">\n            Edit the Blog\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.ts ***!
  \**************************************************/
/*! exports provided: BlogEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEditComponent", function() { return BlogEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _node_modules_angular_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/Router */ "./node_modules/@angular/Router/fesm5/router.js");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// below imports are for routing to the blog view after entering a blog


var BlogEditComponent = /** @class */ (function () {
    function BlogEditComponent(httpService, _route, router, toastr) {
        this.httpService = httpService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.blogPossibleCategories = ["Comedy", "Action", "Drama", "Technology"];
    }
    BlogEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting the blogId from Route
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log(myBlogId);
        //getting the blogdetails from the service
        this.httpService.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            _this.currentBlog = data["data"];
            console.log(data);
        }, function (error) {
            console.log("Some error occured in View");
            console.log(error.errorMessageg);
        });
        console.log(this.currentBlog);
    };
    BlogEditComponent.prototype.editThisBlog = function () {
        var _this = this;
        console.log("blog edit called");
        this.httpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(function (data) {
            console.log("blog edited");
            _this.toastr.success('Blog is edited successfully!', 'Success', {
                timeOut: 1000,
                positionClass: 'toast-top-right'
            });
            //alert(`Blog is created successfully`);
            console.log(data);
            setTimeout(function () {
                _this.router.navigate(['/blog', _this.currentBlog.blogId]);
            }, 1500);
        }, function (error) {
            console.log("Some error occured in delete");
            console.log(error.errorMessageg);
            _this.toastr.error('Sorry!!some error occured during edit', 'Oops!', {
                timeOut: 1000,
                positionClass: 'toast-top-right'
            });
        });
    };
    BlogEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-edit',
            template: __webpack_require__(/*! ./blog-edit.component.html */ "./src/app/blog-edit/blog-edit.component.html"),
            styles: [__webpack_require__(/*! ./blog-edit.component.css */ "./src/app/blog-edit/blog-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _node_modules_angular_Router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _node_modules_angular_Router__WEBPACK_IMPORTED_MODULE_2__["Router"], _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], BlogEditComponent);
    return BlogEditComponent;
}());



/***/ }),

/***/ "./src/app/blog-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/blog-service.service.ts ***!
  \*****************************************/
/*! exports provided: BlogServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogServiceService", function() { return BlogServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogServiceService = /** @class */ (function () {
    function BlogServiceService() {
        //declare a dummy blogg variabale here
        this.allBlogs = [
            {
                "blogId": "1",
                "lastModified": "2018-12-07T12:20:47",
                "created": "2018-10-08T11:20:47",
                "tags": [],
                "author": "Amardip",
                "category": "Comedy",
                "isPublished": true,
                "views": 0,
                "bodyHtml": "This is the body for first blog",
                "description": "Here is the description for first blog",
                "title": "The first blog"
            },
            {
                "blogId": "2",
                "lastModified": "2017-12-07T12:20:47",
                "created": "2017-10-08T11:20:47",
                "tags": [],
                "author": "Madhu",
                "category": "Horror",
                "isPublished": true,
                "views": 0,
                "bodyHtml": "This is the body for second blog",
                "description": "Here is the description for second blog",
                "title": "The second blog"
            },
            {
                "blogId": "3",
                "lastModified": "2016-12-07T12:20:47",
                "created": "2016-10-08T11:20:47",
                "tags": [],
                "author": "Dip",
                "category": "Comedy",
                "isPublished": true,
                "views": 0,
                "bodyHtml": "This is the body for third blog",
                "description": "Here is the description for third blog",
                "title": "The third blog"
            }
        ];
        console.log("service consturctor is called");
    }
    BlogServiceService.prototype.getAllBlogs = function () {
        return this.allBlogs;
    };
    BlogServiceService.prototype.getSingleBlogInformation = function (currentBlogId) {
        for (var _i = 0, _a = this.allBlogs; _i < _a.length; _i++) {
            var blog = _a[_i];
            if (blog.blogId == currentBlogId)
                this.currentBlog = blog;
            return this.currentBlog;
        }
    }; //end of getSingleBlogInformation function
    BlogServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BlogServiceService);
    return BlogServiceService;
}());



/***/ }),

/***/ "./src/app/blog-view/blog-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--use ngIf in all the row div before using the variable otherwise app may crasf-->\n  <div class=\"row\" *ngIf=\"currentBlog\">\n    <div class=\"col-md-12\">\n      <h2>{{currentBlog.title}}</h2>\n      <small>Blog number {{currentBlog.blogId}}</small>\n      <p>Posted by {{currentBlog.author}} On {{currentBlog.created | date}}</p>\n      <p *ngIf=\"currentBlog.tags.length>0 && currentBlog.tags.length !=undefined\">Tags :\n        <span *ngFor=\"let tag of currentBlog.tags;let first=first;let last=last\">{{tag}}{{last ? '' : ', '}}</span>\n      </p>\n      <hr>\n      <!--to render html as well use below it expecting bodyHtml variable with some html tags see blog id 3-->\n      <div [innerHtml]=\"currentBlog.bodyHtml\"></div>\n      <hr>\n      <h5>Category : {{currentBlog.category}}</h5>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\" *ngIf=\"currentBlog\">\n    <div class=\"col-md-4\">\n      <!--Here we are using routerLink with parameter (syntax routername,propertyNameToPass-->\n      <a class=\"btn btn-primary\" [routerLink]=\"['/edit',currentBlog.blogId]\">Edit</a>\n    </div>\n    <div class=\"col-md-4\">\n      <a class=\"btn btn-danger\" (click) = \"deleteThisBlog()\"> Delete</a>\n    </div>\n    <div class=\"col-md-4\">\n      <a class=\"btn btn-warning\" (click) = \"goBackToPreviousPage()\">Go Back</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.ts ***!
  \**************************************************/
/*! exports provided: BlogViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogViewComponent", function() { return BlogViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/Router */ "./node_modules/@angular/Router/fesm5/router.js");
/* harmony import */ var _blog_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-service.service */ "./src/app/blog-service.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Route related code..this is to capture the value passed in the address bar




//import location for goback kind of facility

var BlogViewComponent = /** @class */ (function () {
    //consturcor used to inject anything to the class as soon as it created--- keep in mind the access specifiers
    function BlogViewComponent(_route, router, blogServiceService, httpService, toastr, location) {
        this._route = _route;
        this.router = router;
        this.blogServiceService = blogServiceService;
        this.httpService = httpService;
        this.toastr = toastr;
        this.location = location;
        console.log("BlogServiceService constuctor called in view component");
    }
    BlogViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting the blogId from Route
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log(myBlogId);
        //getting the blogdetails from the service
        this.httpService.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            _this.currentBlog = data["data"];
            console.log(data);
        }, function (error) {
            console.log("Some error occured in View");
            console.log(error.errorMessageg);
        });
        console.log(this.currentBlog);
    };
    /*
    for blog-service
      ngOnInit() {
        //getting the blogId from Route
        let myBlogId = this._route.snapshot.paramMap.get('blogId');
        //getting the blogdetails from the service
        this.currentBlog = this.blogServiceService.getSingleBlogInformation(myBlogId);
        console.log(this.currentBlog);
      }
    */
    BlogViewComponent.prototype.deleteThisBlog = function () {
        var _this = this;
        console.log("blog deleted called");
        this.httpService.deleteBlog(this.currentBlog.blogId).subscribe(function (data) {
            console.log("blog deleted");
            _this.toastr.success('Blog is deleted successfully!', 'Success', {
                timeOut: 1000,
                positionClass: 'toast-top-right'
            });
            //alert(`Blog is created successfully`);
            console.log(data);
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 1500);
        }, function (error) {
            console.log("Some error occured in delete");
            console.log(error.errorMessageg);
            _this.toastr.error('Sorry!!some error occured', 'Oops!', {
                timeOut: 1000,
                positionClass: 'toast-top-right'
            });
        });
    };
    BlogViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    BlogViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-view',
            template: __webpack_require__(/*! ./blog-view.component.html */ "./src/app/blog-view/blog-view.component.html"),
            styles: [__webpack_require__(/*! ./blog-view.component.css */ "./src/app/blog-view/blog-view.component.css")],
            //include providers array here for goback facility
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_Router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_Router__WEBPACK_IMPORTED_MODULE_1__["Router"], _blog_service_service__WEBPACK_IMPORTED_MODULE_2__["BlogServiceService"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], BlogViewComponent);
    return BlogViewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size: 22px\">All Blogs\n    </div>\n    <br/>\n    <br/>\n    <br/>\n  </div>\n\n  <div class=\"row\" style=\"text-align:center\" *ngIf=\" allBlogs.length>0\">\n    <!---Give attension to the syntax-->\n<!---\n  Can't have multiple template bindings on one element. Use only one attribute prefixed with * (\"\n    <div *ngFor=\"let blog of allBlogs \" class=\"col-md-4\" [ERROR ->]*ngIf=\" allBlogs.length>0\"\n-->\n    <div *ngFor=\"let blog of allBlogs \" class=\"col-md-6\" >\n\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <div class=\"panel-heading\"> {{ blog.title | uppercase }}\n          </div>\n          <div class=\"panel-body\">\n            <p> {{ blog.description }} </p>\n          </div>\n          <div class=\"panel-footer\"> Posted On {{blog.created | date}}\n            <br/> by {{blog.author}}\n            <br/>\n            <br/>\n            <a [routerLink]=\"['/blog' , blog.blogId]\" class=\"btn btn-primary\">Read</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog-service.service */ "./src/app/blog-service.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import statement for a service which we have created by cmd line and provided in app.module.ts


var HomeComponent = /** @class */ (function () {
    // n68e90 wherever you want to use perticular service, there you have to created instance of that 
    // service class in a constuctor (dont use new keyward) so you can call all the methods and fields
    // of the service using that object
    function HomeComponent(blogServiceService, httpService) {
        this.blogServiceService = blogServiceService;
        this.httpService = httpService;
        console.log("BlogServiceService constuctor called in home component");
    }
    // for http service use suscribe method 
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allBlogs = this.httpService.getAllBlogs().subscribe(function (data) {
            _this.allBlogs = data["data"];
            console.log(data);
        }, function (error) {
            console.log("Some error occured in Home");
            console.log(error.errorMessageg);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service_service__WEBPACK_IMPORTED_MODULE_1__["BlogServiceService"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import http client and httpErrorResponse

//import Observable first installed  rxjs-compat. by using npm install rxjs-compat --save.

var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.baseUrl = "https://blogapp.edwisor.com/api/v1/blogs";
        this.authKey = "ODlkN2FkOGYxZGE4OTAyMWE3OTg2YjUyNDllOTZiNGY3ZWFlZWE0M2YyMjIyY2I1MzcyYWEyMWJhYTFlZmNjMTZjYzA3ZDFjZDA4Nzk0MzFkNDdkYzI1YjE3OWMwOGM3NGZlYzI0NWI4N2JkZjExMTliZDJlNjhiZmZiNWJmM2QyYQ==";
        console.log("http service constructor called");
    }
    //some exception handling add this to all the service which are making http call.
    HttpService.prototype.handleError = function (err) {
        console.log("Handle error http call");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    HttpService.prototype.getAllBlogs = function () {
        var myResponse = this._http.get(this.baseUrl + "/all?authToken=" + this.authKey);
        return myResponse;
    };
    HttpService.prototype.getSingleBlogInformation = function (currentBlogId) {
        var myResponse = this._http.get(this.baseUrl + "/view/" + currentBlogId + "?authToken=" + this.authKey);
        console.log(this.baseUrl + "/view/" + this.currentBlog + "?authToken=" + this.authKey);
        return myResponse;
    };
    HttpService.prototype.createBlog = function (blogData) {
        console.log("called createBlog of http.service");
        var myResponse = this._http.post(this.baseUrl + "/create?authToken=" + this.authKey, blogData);
        return myResponse;
    };
    HttpService.prototype.deleteBlog = function (currentBlogId) {
        console.log("blog deleted service called");
        console.log(currentBlogId);
        var data = {};
        var myResponse = this._http.post(this.baseUrl + "/" + currentBlogId + "/delete?authToken=" + this.authKey, data);
        return myResponse;
    };
    HttpService.prototype.editBlog = function (currentBlogId, blogData) {
        var myResponse = this._http.post(this.baseUrl + "/" + currentBlogId + "/edit?authToken=" + this.authKey, blogData);
        return myResponse;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Amardip\Desktop\EDWISOR  NEW\Angular Applications\blog-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map