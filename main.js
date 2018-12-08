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

/***/ "./src/app/admin-auth-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/admin-auth-guard.service.ts ***!
  \*********************************************/
/*! exports provided: AdminAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function() { return AdminAuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAuthGuardService = /** @class */ (function () {
    function AdminAuthGuardService(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuardService.prototype.canActivate = function () {
        return this.auth.appUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (appUser) { return appUser.isAdmin; }));
    };
    AdminAuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AdminAuthGuardService);
    return AdminAuthGuardService;
}());



/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.thumbnail {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXByb2R1Y3RzL2FkbWluLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50aHVtYm5haWwge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p style=\"padding-top: 60px\" >\n    <a routerLink=\"/admin/admin-products/new\" class=\"btn btn-primary\">Add New Product</a>\n</p>\n<form class=\"form-inline my-3 my-lg-0\">\n  <input #query (keyup)=\"filter(query.value)\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search...\" aria-label=\"Search\" >\n</form>\n\n\n\n<!-- <p>\n  <input\n   #query\n   (keyup)=\"filter(query.value)\"\n   type=\"text\" class=\"form.control\" placeholder=\"Search...\">\n</p> -->\n\n<table class=\"table table-striped\" [mfData]=\"filteredProducts\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" >\n  <thead>\n    <tr >\n      <th>Cover</th>\n      <th>Title</th>\n      <th>Author</th>\n      <th>Price</th>\n      <th>Category</th>\n      <th>Description</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let p of mf.data\">\n      <td>\n        <img [src]=\"p.imageUrl\" class=\"thumbnail\" alt=\"image\">\n      </td>\n      <td>{{ p.title }}</td>\n      <td>{{ p.author }}</td>\n      <td>{{ p.price | currency: 'DT ' }}</td>\n      <td>{{ p.category }}</td>\n      <td>{{ p.description | summary }}</td>\n      <td>\n        <a [routerLink]=\"['/admin/admin-products/', p.$key]\">Edit</a>\n      </td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n        <td colspan=\"4\">\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n        </td>\n    </tr>\n    </tfoot>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.subscription = this.productService.getAll()
            .subscribe(function (products) { return _this.filteredProducts = _this.products = products; });
    }
    AdminProductsComponent.prototype.filter = function (query) {
        this.filteredProducts = (query) ?
            this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); }) :
            this.products;
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin-products.component.html */ "./src/app/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div\r\n{\r\nmargin-top:10px;\r\nbackground-color: \t#DEB887 ;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLGdCQUFnQjtBQUNoQiw0QkFBNEI7O0NBRTNCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2XHJcbntcclxubWFyZ2luLXRvcDoxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBcdCNERUI4ODcgO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:55px;background-color:burlywood \">\n<div class=\"row  mx-auto justify-context-center \" >\n  <div class=\"col-md-6 \"style=\"font-weight:600;\">\n    <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n          <div class=\"form-group\" >\n            <label for=\"title\">Title</label>\n            <input #title=\"ngModel\" [(ngModel)]=\"product.title\" name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" required>\n            <div class=\"alert \"style=\"color:red\" *ngIf=\"title.touched && title.invalid\">\n              Title is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"author\">Author</label>\n            <input #author=\"ngModel\" [(ngModel)]=\"product.author\" name=\"author\" id=\"author\" type=\"text\" class=\"form-control\" required>\n            <div class=\"alert \" style=\"color:red\"*ngIf=\"author.touched && author.invalid\">\n              Author is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"price\">Price</label>\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">DT</span>\n                <input #price=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\" id=\"price\" type=\"number\" class=\"form-control\" required [min]=\"0\">\n              </div>\n              <div class=\"alert \"style=\"color:red\" *ngIf=\"price.touched && price.invalid\">\n                <div *ngIf=\"!!price.errors.required\">Price is required.</div>\n                <div *ngIf=\"!!price.errors.min\">Price should be 0 or higher.</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"category\">Category</label>\n              <select #category=\"ngModel\" [(ngModel)]=\"product.category\" name=\"category\" id=\"category\" class=\"form-control\" required>\n                <option value=\"\"></option>\n                <option *ngFor=\"let c of categories$ | async\" [value]=\"c.$key\">\n                  {{ c.name }}\n                </option>\n              </select>\n              <div class=\"alert\"style=\"color:red\" *ngIf=\"category.touched && category.invalid\">\n                Category is required.\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <input #description=\"ngModel\" [(ngModel)]=\"product.description\" name=\"description\" id=\"description\" type=\"text\" class=\"form-control\" required>\n            <div class=\"alert \" style=\"color:red;\" *ngIf=\"description.touched && description.invalid\">\n              Desciption is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"imageUrl\">Image URL</label>\n              <input #imageUrl=\"ngModel\" [(ngModel)]=\"product.imageUrl\" name=\"imageUrl\" id=\"imageUrl\" type=\"text\" class=\"form-control\" required url>\n              <div class=\"alert \"style=\"color:red\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n                <div *ngIf=\"!!imageUrl.errors.required\">Image URL is required.</div>\n                <div *ngIf=\"!!imageUrl.errors.url\">Please enter a valid URL.</div>\n              </div>\n          </div>\n          <button class=\"btn btn-primary\">Save</button>\n          <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n      </form>\n  </div>\n  <div class=\"col-md-6\">\n    <div *ngIf=\"product.title\" class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" [src]=\"product.imageUrl\" *ngIf=\"product.imageUrl\">\n       <hr>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{ product.title }}</h4>\n          <h5 class=\"card-title\">{{ product.author }}</h5>\n          <p class=\"card-text\">{{ product.price | currency:' DT' }}</p>\n          <p class=\"card-title\">{{ product.category }}</p>\n          <p class=\"card-title\">{{ product.description | summary }}</p>\n        </div>\n    </div>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/category.service */ "./src/app/category.service.ts");
/* harmony import */ var src_app_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(categoryService, productService, route, router) {
        var _this = this;
        this.categoryService = categoryService;
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.product = {};
        this.categories$ = categoryService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.productService.get(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (p) { return _this.product = p; });
        }
    }
    ProductFormComponent.prototype.save = function (product) {
        if (this.id) {
            this.productService.update(this.id, product);
        }
        else {
            this.productService.create(product);
        }
        this.router.navigate(['/admin/admin-products']);
    };
    ProductFormComponent.prototype.delete = function () {
        if (confirm('Are you sure you want to delete this product?')) {
            this.productService.delete(this.id);
            this.router.navigate(['/admin/admin-products']);
        }
    };
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/admin/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/admin/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            src_app_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nappapp-bs-navbar {\n  min-height: 100%;\n  width: 100%;\n  margin-bottom: -271px;\n  display: table;\n}\n\nrouter-outlet,\nfooter{\n  display: table-row;\n}\n\nheader-main {\n height: 60px;\n}\n\nrouter-outlet {\n  position: absolute;\n}\n\nfooter {\n  height: 20px;\n}\n\n#banner {\n  width : 100%;\n\n  background-color: \t#DEB887  ;\n}\n\nmain {\n  margin: 0px;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0NBQ2hCOztBQUVEOztFQUVFLG1CQUFtQjtDQUNwQjs7QUFFRDtDQUNDLGFBQWE7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7O0VBRWIsNkJBQTZCO0NBQzlCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5hcHBhcHAtYnMtbmF2YmFyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IC0yNzFweDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbnJvdXRlci1vdXRsZXQsXG5mb290ZXJ7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cblxuaGVhZGVyLW1haW4ge1xuIGhlaWdodDogNjBweDtcbn1cblxucm91dGVyLW91dGxldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4jYmFubmVyIHtcbiAgd2lkdGggOiAxMDAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IFx0I0RFQjg4NyAgO1xufVxuXG5tYWluIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bs-navbar></app-bs-navbar>\n\n<main id=\"banner\" role=\"main\" class=\"container\">\n  <router-outlet></router-outlet>\n</main>\n\n<app-footer></app-footer>\n"

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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        auth.user$.subscribe(function (user) {
            if (user) {
                userService.save(user);
                var returnUrl = localStorage.getItem('returnUrl');
                if (returnUrl) {
                    localStorage.removeItem('returnUrl');
                    router.navigateByUrl(returnUrl);
                }
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bs-navbar/bs-navbar.component */ "./src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./check-out/check-out.component */ "./src/app/check-out/check-out.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/order-success/order-success.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-auth-guard.service */ "./src/app/admin-auth-guard.service.ts");
/* harmony import */ var _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/product-form/product-form.component */ "./src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./category.service */ "./src/app/category.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _summary_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./summary.pipe */ "./src/app/summary.pipe.ts");
/* harmony import */ var _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./products/product-filter/product-filter.component */ "./src/app/products/product-filter/product-filter.component.ts");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./product-card/product-card.component */ "./src/app/product-card/product-card.component.ts");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_14__["BsNavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"],
                _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_18__["CheckOutComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_19__["OrderSuccessComponent"],
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_20__["MyOrdersComponent"],
                _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_21__["AdminProductsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_27__["ProductFormComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"],
                _summary_pipe__WEBPACK_IMPORTED_MODULE_31__["SummaryPipe"],
                _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_32__["ProductFilterComponent"],
                _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_33__["ProductCardComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_35__["SignInComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_36__["NgxPaginationModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__["AngularFontAwesomeModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_10__["DataTableModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '', component: _products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"] },
                    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_16__["ProductsComponent"] },
                    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"] },
                    { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_35__["SignInComponent"] },
                    { path: 'check-out', component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_18__["CheckOutComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"]] },
                    { path: 'order-success', component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_19__["OrderSuccessComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"]] },
                    { path: 'my/orders', component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_20__["MyOrdersComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"]] },
                    { path: 'admin/admin-products/new', component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_27__["ProductFormComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_26__["AdminAuthGuardService"]] },
                    { path: 'admin/admin-products/:id', component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_27__["ProductFormComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_26__["AdminAuthGuardService"]] },
                    { path: 'admin/admin-products', component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_21__["AdminProductsComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"], _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_26__["AdminAuthGuardService"]] }
                ])
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"],
                _admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_26__["AdminAuthGuardService"],
                _category_service__WEBPACK_IMPORTED_MODULE_28__["CategoryService"],
                _product_service__WEBPACK_IMPORTED_MODULE_29__["ProductService"],
                _user_service__WEBPACK_IMPORTED_MODULE_25__["UserService"],
                _shopping_cart_service__WEBPACK_IMPORTED_MODULE_34__["ShoppingCartService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                return true;
            }
            else {
                _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                return false;
            }
        }));
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/firebase-browser.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(afAuth, route, userService) {
        this.afAuth = afAuth;
        this.route = route;
        this.userService = userService;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
                if (user) {
                    return _this.userService.get(user.uid);
                }
                else {
                    return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(null);
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle {\n  cursor: pointer;\n}\n\n.img-custom {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nnav {\n  opacity: 0.7;\n\n}\n\n.custom-cat {\n  width: 180px !important;\n  background-color: #343A40;\n  opacity: 0.8;\n  font-weight:bold;\n}\n\n.custom-bar\n{\n  width: 1000px !important;\n  background-color: #343A40;\n  opacity: 0.8;\n  font-weight:bold;\n}\n\n.custom-btn {\n  border-color: whiteF;\n  color: whiteF;\n  background-color: transparent;\n}\n\n.custom-btn:hover {\n  background-color:white;\n  color: white;\n}\n\n.custom-text,a {\n  color: white\n}\n\n.custom-search {\n  outline: 2px solid white;\n}\n\nbutton.btn\n{\n  background-color:transparent;\n  box-shadow: 0 0 1pt 1ptwhite;\n  outline: 2px solid white;\n  color:white;\n}\n\ninput{\n  background-color: transparent;\n   color:white;\n   box-shadow: 0 0 1pt 1pt white;\n   outline: 2px solid white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnMtbmF2YmFyL2JzLW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQWtCO0tBQWxCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGFBQWE7O0NBRWQ7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7O0FBQ0Q7O0VBRUUseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUNEOztFQUVFLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLDhCQUE4QjtHQUM3QixZQUFZO0dBQ1osOEJBQThCO0dBQzlCLHlCQUF5QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2JzLW5hdmJhci9icy1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWctY3VzdG9tIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxubmF2IHtcbiAgb3BhY2l0eTogMC43O1xuXG59XG5cbi5jdXN0b20tY2F0IHtcbiAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNBNDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5jdXN0b20tYmFyXG57XG4gIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M0E0MDtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG4uY3VzdG9tLWJ0biB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGVGO1xuICBjb2xvcjogd2hpdGVGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmN1c3RvbS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tdGV4dCxhIHtcbiAgY29sb3I6IHdoaXRlXG59XG5cbi5jdXN0b20tc2VhcmNoIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHdoaXRlO1xufVxuYnV0dG9uLmJ0blxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgMXB0IDFwdHdoaXRlO1xuICBvdXRsaW5lOiAycHggc29saWQgd2hpdGU7XG4gIGNvbG9yOndoaXRlO1xufVxuaW5wdXR7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgY29sb3I6d2hpdGU7XG4gICBib3gtc2hhZG93OiAwIDAgMXB0IDFwdCB3aGl0ZTtcbiAgIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand custom-text  \" style=\"color: snow ;font-weight:bold\" routerLink=\"/\">House of Books\n    <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <ng-template #anonymousUser>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/sign-in\"><span class=\"custom-text\">Register</span></a>\n          </li>\n\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\"><span class=\"custom-text\"   >Login</span></a>\n          </li>\n      </ng-template>\n      <li ngbDropdown *ngIf='appUser; else anonymousUser' class=\"nav-item dropdown\">\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"style=\"color:white\">\n          {{ appUser.name }}\n          <i class=\"fa fa-user-circle\"style=\"color:white\" aria-hidden=\"true\"></i>\n        </a>\n        <div ngbDropdownMenu  class=\"dropdown-menu custom-cat\" aria-labelledby=\"dropdown01\">\n         <!--- <a class=\"dropdown-item\" routerLink=\"/my/orders\">My orders</a>-->\n          <ng-container  *ngIf='appUser.isAdmin'>\n             <!--<a class=\"dropdown-item\" routerLink=\"/admin/admin-orders\">Manage Orders</a>-->\n            <a class=\"dropdown-item\" routerLink=\"/admin/admin-products\">Manage Products</a>\n          </ng-container>\n          <a class=\"dropdown-item\" style=\"color:snow;\" (click)='logout()'>Log Out</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <span class=\"custom-text\">Categories</span>\n        </a>\n        <div class=\"dropdown-menu custom-bar\" aria-labelledby=\"navbarDropdown\" >\n          <div class=\"row\">\n            <div class=\"col-3\" *ngFor=\"let c of categories$ | async\">\n              <a class=\"dropdown-item \"\n              routerLink=\"/\"\n              [queryParams]=\"{ category: c.$key }\"\n              [class.active]=\"category == c.$key\" id=\"myBtn\">{{ c.name }}</a>\n            </div>\n          </div>\n        </div>\n      </li>\n\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2 custom-search\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn my-2 my-sm-0 custom-btn\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/bs-navbar/bs-navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bs-navbar/bs-navbar.component.ts ***!
  \**************************************************/
/*! exports provided: BsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsNavbarComponent", function() { return BsNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(auth, categoryService) {
        var _this = this;
        this.auth = auth;
        auth.appUser$.subscribe(function (appUser) { return _this.appUser = appUser; });
        this.categories$ = categoryService.getAll();
    }
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('category'),
        __metadata("design:type", Object)
    ], BsNavbarComponent.prototype, "category", void 0);
    BsNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bs-navbar',
            template: __webpack_require__(/*! ./bs-navbar.component.html */ "./src/app/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__(/*! ./bs-navbar.component.css */ "./src/app/bs-navbar/bs-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getAll = function () {
        return this.db.list('/categories', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/check-out/check-out.component.css":
/*!***************************************************!*\
  !*** ./src/app/check-out/check-out.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.cc-img {\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2stb3V0L2NoZWNrLW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jaGVjay1vdXQvY2hlY2stb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYy1pbWcge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/check-out/check-out.component.html":
/*!****************************************************!*\
  !*** ./src/app/check-out/check-out.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\"style=\"margin-top:55px\">\n    <span class=\"anchor\" id=\"formPayment\"></span>\n\n    <!-- form card cc payment -->\n    <div class=\"card card-outline-secondary\">\n        <div class=\"card-body\">\n            <h3 class=\"text-center\">Credit Card Payment</h3>\n            <hr>\n            <div class=\"alert alert-info p-2 pb-3\">\n                <a class=\"close font-weight-normal initialism\" data-dismiss=\"alert\" href=\"#\"><samp>×</samp></a>\n                CVC code is required.\n            </div>\n            <form class=\"form\" role=\"form\" autocomplete=\"off\">\n                <div class=\"form-group\">\n                    <label for=\"cc_name\">Card Holder's Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"cc_name\" pattern=\"\\w+ \\w+.*\" title=\"First and last name\" required=\"required\">\n                </div>\n                <div class=\"form-group\">\n                    <label>Card Number</label>\n                    <input type=\"text\" class=\"form-control\" autocomplete=\"off\" maxlength=\"20\" pattern=\"\\d{16}\" title=\"Credit card number\" required=\"\">\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-md-12\">Card Exp. Date</label>\n                    <div class=\"col-md-4\">\n                        <select class=\"form-control\" name=\"cc_exp_mo\" size=\"0\">\n                            <option value=\"01\">01</option>\n                            <option value=\"02\">02</option>\n                            <option value=\"03\">03</option>\n                            <option value=\"04\">04</option>\n                            <option value=\"05\">05</option>\n                            <option value=\"06\">06</option>\n                            <option value=\"07\">07</option>\n                            <option value=\"08\">08</option>\n                            <option value=\"09\">09</option>\n                            <option value=\"10\">10</option>\n                            <option value=\"11\">11</option>\n                            <option value=\"12\">12</option>\n                        </select>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <select class=\"form-control\" name=\"cc_exp_yr\" size=\"0\">\n                            <option>2018</option>\n                            <option>2019</option>\n                            <option>2020</option>\n                            <option>2021</option>\n                            <option>2022</option>\n                        </select>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" class=\"form-control\" autocomplete=\"off\" maxlength=\"3\" pattern=\"\\d{3}\" title=\"Three digits at back of your card\" required=\"\" placeholder=\"CVC\">\n                    </div>\n                </div>\n                                <hr>\n                <div class=\"form-group row\">\n                    <div class=\"col-md-6\">\n                        <a routerLink=\"/\" type=\"reset\" class=\"btn btn-default btn-lg btn-block\">Cancel</a>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <a routerLink=\"/order-success\" type=\"submit\" class=\"btn btn-success btn-lg btn-block\">Submit</a>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/check-out/check-out.component.ts":
/*!**************************************************!*\
  !*** ./src/app/check-out/check-out.component.ts ***!
  \**************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
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

var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent() {
    }
    CheckOutComponent.prototype.ngOnInit = function () {
    };
    CheckOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! ./check-out.component.html */ "./src/app/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/check-out/check-out.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  padding-top: 0px;\n}\n\n.pagefooter {\n  padding: 0px;\n}\n\nfooter{\n  background-color: #FFF8DC;\n  padding-top: 0px;\n}\n\n.container {\n  width: auto;\n  max-width: 680px;\n  padding: 0 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ucGFnZWZvb3RlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuZm9vdGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOERDO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogNjgwcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small stylish-color-dark pt-4\">\n\n  <!-- Footer Links -->\n  <div class=\"container text-center text-md-left\">\n\n    <div class=\"mx-auto text-center\">\n      <!-- Links -->\n      <h5 class=\"font-weight-bold text-uppercase mt-2 mb-2 text-center\">Links</h5>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-offset-2 col-2\"><a routerLink=\"/\">Home</a></div>\n        <div class=\"col-2\"><a href=\"#!\">Books</a></div>\n        <div class=\"col-2\"><a href=\"#!\">About Us</a></div>\n        <div class=\"col-2\"><a href=\"#!\">Copyright</a></div>\n      </div>\n\n    </div>\n      <!-- Grid column -->\n  </div>\n  <!-- Footer Links -->\n\n  <hr>\n\n  <!-- Call to action -->\n  <ul class=\"list-unstyled list-inline text-center\">\n    <li class=\"list-inline-item\">\n      <h5>Register for free</h5>\n    </li>\n    <li class=\"list-inline-item\">\n      <a routerLink=\"/sign-in\" class=\"btn btn-danger btn-rounded\">Sign up!</a>\n    </li>\n  </ul>\n  <!-- Call to action -->\n\n  <hr>\n\n  <!-- Social buttons -->\n  <ul class=\"list-unstyled list-inline text-center\">\n    <li class=\"list-inline-item\">\n      <a class=\"btn-floating btn-fb\">\n        <i class=\"fa fa-facebook\"> </i>\n      </a>\n    </li>\n    <li class=\"list-inline-item\">\n      <a class=\"btn-floating btn-tw\">\n        <i class=\"fa fa-twitter\"> </i>\n      </a>\n    </li>\n    <li class=\"list-inline-item\">\n      <a class=\"btn-floating btn-gplus\">\n        <i class=\"fa fa-google-plus\"> </i>\n      </a>\n    </li>\n    <li class=\"list-inline-item\">\n      <a class=\"btn-floating btn-li\">\n        <i class=\"fa fa-linkedin\"> </i>\n      </a>\n    </li>\n    <li class=\"list-inline-item\">\n      <a class=\"btn-floating btn-dribbble\">\n        <i class=\"fa fa-dribbble\"> </i>\n      </a>\n    </li>\n  </ul>\n  <!-- Social buttons -->\n\n  <!-- Copyright -->\n  <div class=\"footer-copyright text-center\">© 2018 Copyright:\n    <a href=\"https://mdbootstrap.com/education/bootstrap/\"> HouseofBooks.com</a>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Home works!\n</p>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-image {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.text-image {\r\n  position: relative;\r\n}\r\n\r\n.custom-btn-img {\r\nbackground-color: white;\r\nposition: absolute;\r\nleft: 25%;\r\ntop: 25%;\r\nwidth: 350px;\r\npadding: 20px;\r\nfont-size: 1.25em;\r\nfont-weight: 700;\r\ncolor: #595757;\r\nborder-radius: 100px;\r\npadding-right: 50px;\r\ntext-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7QUFDQSx3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLFVBQVU7QUFDVixTQUFTO0FBQ1QsYUFBYTtBQUNiLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnRleHQtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmN1c3RvbS1idG4taW1nIHtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMjUlO1xyXG50b3A6IDI1JTtcclxud2lkdGg6IDM1MHB4O1xyXG5wYWRkaW5nOiAyMHB4O1xyXG5mb250LXNpemU6IDEuMjVlbTtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuY29sb3I6ICM1OTU3NTc7XHJcbmJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5wYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-img\">\n  <img class=\"full-image\" src=\"https://mitpress.mit.edu/sites/default/files/styles/full_text_column/public/2018-02/Books%201_21.jpg?itok=g6MrylwP\" alt=\"\">\n  <div class=\"text-center\">\n\n    <button (click)='login()' class=\"btn custom-btn-img align-middle\"  >Login with Google</button>\n\n  </div>\n</div>\n\n<!--<button\n  (click)='login()'\n  class=\"btn align-middle btn-primary-outline-dark btn-lg \">Login with Google</button>\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.login = function () {
        this.auth.login();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p\r\n{\r\n  margin-top:50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVycy9teS1vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInBcclxue1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p >\n\n</p>\n"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
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

var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent() {
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/order-success/order-success.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-success/order-success.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  margin-top:55px ;\r\n  height:400px;\r\n  padding-bottom: -20px;\r\n\r\n}\r\nstrong\r\n{\r\n  font-size:1.5rem;\r\n}\r\n.lead\r\n{padding-left:10px ;\r\nfont-size:1.5rem;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjs7Q0FFdkI7QUFDRDs7RUFFRSxpQkFBaUI7Q0FDbEI7QUFDRDtDQUNDLG1CQUFtQjtBQUNwQixpQkFBaUI7O0NBRWhCIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICBtYXJnaW4tdG9wOjU1cHggO1xyXG4gIGhlaWdodDo0MDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogLTIwcHg7XHJcblxyXG59XHJcbnN0cm9uZ1xyXG57XHJcbiAgZm9udC1zaXplOjEuNXJlbTtcclxufVxyXG4ubGVhZFxyXG57cGFkZGluZy1sZWZ0OjEwcHggO1xyXG5mb250LXNpemU6MS41cmVtO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/order-success/order-success.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-success/order-success.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"jumbotron text-xs-center\">\n    <div class=\"alert alert-success\">\n        <strong >Thank you!</strong> Your payment has been processed successfully.\n      </div>\n  <p class=\"lead\"><strong>Thank you for your payment.</strong>  You will be receiving an email shortly to confirm the transaction.</p>\n  <hr>\n  <p style=\"margin-left:10px;\">\n    Having trouble? <a href=\"\">Contact us</a>\n  </p>\n  <p class=\"lead\" style=\"margin-left:10px;\">\n    <a class=\"btn btn-primary btn-lg \" routerLink=\"/\" role=\"button\">Get more books</a>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/order-success/order-success.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-success/order-success.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
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

var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! ./order-success.component.html */ "./src/app/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/order-success/order-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/product-card/product-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-card/product-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.card {\n  margin-bottom: 30px;\n}\n\n.card-footer {\n  padding: 0;\n}\n\ndiv.card {\n  height: calc(100% - 15px);\n  margin-bottom: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuZGl2LmNhcmQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE1cHgpO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/product-card/product-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-card/product-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 15rem;\">\n    <img class=\"card-img-top\" [src]=\"product.imageUrl\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{ product.title }}</h5>\n      <p class=\"card-text\">{{ product.price | currency: 'DT '}}</p>\n      <p class=\"card-text\"> {{ product.description | summary }} </p>\n    </div>\n    <div class=\"card-footer\">\n      <a class=\"btn btn-primary btn-block\"\n       routerLink=\"/check-out\">Buy Now !</a>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/product-card/product-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-card/product-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
    }
    ProductCardComponent.prototype.addToCart = function (product) {
        var cartId = localStorage.getItem('cartId');
        if (!cartId) {
            this.cartService.create().then(function (result) {
                localStorage.setItem('cartId', result.key);
                // Add product to cart
            });
        }
        else {
            // Add product to cart
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (product) {
        return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list('/products');
    };
    ProductService.prototype.get = function (productId) {
        return this.db.object('/products/' + productId);
    };
    ProductService.prototype.update = function (productId, product) {
        return this.db.object('/products/' + productId).update(product);
    };
    ProductService.prototype.delete = function (productId) {
        return this.db.object('/products/' + productId).remove();
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sticky-top {\n  top: 80px;\n}\n\ndiv {\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1maWx0ZXIvcHJvZHVjdC1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZmlsdGVyL3Byb2R1Y3QtZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5LXRvcCB7XG4gIHRvcDogODBweDtcbn1cblxuZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n    <div class=\"list-group\">\n        <a\n          class=\"list-group-item list-group-item-action\"\n          [class.active]=\"!category\"\n          routerLink=\"/\">\n            All Categories\n        </a>\n        <a\n          *ngFor=\"let c of categories$ | async\"\n          class=\"list-group-item list-group-item-action\"\n          routerLink=\"/\"\n          [queryParams]=\"{ category: c.$key }\"\n          [class.active]=\"category == c.$key\">\n          {{ c.name }}\n        </a>\n      </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/products/product-filter/product-filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/product-filter/product-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/category.service */ "./src/app/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('category'),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/app/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.css */ "./src/app/products/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w-100 {\n  height: 100px;\n}\n\n.sticky-top {\n  margin-top: 80px;\n}\n\n.full-image {\n  width: 100%;\n  height: 100vh;\n}\n\n.text-image {\n  position: relative;\n}\n\n.custom-btn-img {\n  background-color: white;\n  position: absolute;\n  left: 5%;\n  top: 55%;\n  width: 250px;\n  padding: 20px;\n  font-size: 1.25em;\n  font-weight: 700;\n  color:#595757  ;\n  border-radius: 100px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxTQUFTO0VBQ1QsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnctMTAwIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnN0aWNreS10b3Age1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4uZnVsbC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4udGV4dC1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmN1c3RvbS1idG4taW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG4gIHRvcDogNTUlO1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjojNTk1NzU3ICA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-img\">\n  <img class=\"full-image\" src='https://www.incimages.com/uploaded_files/image/970x450/getty_549933903_2000133320009280405_105293.jpg' alt=\"\">\n  <div class=\"btn custom-btn-img align-middle\" (click)=\"scroll(prod_section)\">OUR BOOKS</div>\n</div>\n<div class=\"row\" #prod_section>\n  <!--div>\n    <app-product-filter [category]=\"category\"></app-product-filter>\n  </div-->\n  <div class=\"offset-1 col\">\n      <div class=\"row \">\n\n          <ng-container *ngFor=\"let p of filteredProducts| paginate: { itemsPerPage: 16, currentPage: x} ; let i = index \" class=\"center\" >\n              <div class=\"col-3\">\n                 <app-product-card [product]=\"p\"></app-product-card>\n              </div>\n          </ng-container>\n          <pagination-controls style=\"padding-left: 300px; color: black\" (pageChange)=\"x = $event\" ></pagination-controls>\n        </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, productService) {
        var _this = this;
        this.products = [];
        productService
            .getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (products) {
            _this.products = products;
            return route.queryParamMap;
        }))
            .subscribe(function (params) {
            _this.category = params.get('category');
            _this.filteredProducts = (_this.category) ?
                _this.products.filter(function (p) { return p.category === _this.category; }) :
                _this.products;
        });
    }
    ProductsComponent.prototype.scroll = function (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/shopping-cart.service.ts ***!
  \******************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-carts').push({
            dateCreated: new Date().getTime()
        });
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shopping-cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
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

var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent() {
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\n  margin-top: 70px;\n  height: 50%;\n}\n\nh1.title {\n font-size: 50px;\n font-family: 'Passion One', cursive;\n font-weight: 400;\n}\n\nhr{\n width: 10%;\n color: #fff;\n}\n\n.form-group{\n margin-bottom: 15px;\n}\n\nlabel{\n margin-bottom: 15px;\n}\n\ninput,\ninput::-webkit-input-placeholder {\n   font-size: 11px;\n   padding-top: 3px;\n}\n\n.main-login{\n  background-color: #fff;\n   /* shadows and rounded borders */\n   border-radius: 2px;\n   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n\n}\n\n.main-center{\n  margin-top: 30px;\n  margin: 0 auto;\n  max-width: 330px;\n  padding: 40px 40px;\n\n}\n\n.login-button{\n margin-top: 5px;\n}\n\n.login-register{\n font-size: 11px;\n text-align: center;\n}\n\n.container\n{\n  margin-top: 55px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLG9DQUFvQztDQUNwQyxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0Msb0JBQW9CO0NBQ3BCOztBQUVEOztHQUVHLGdCQUFnQjtHQUNoQixpQkFBaUI7Q0FDbkI7O0FBRUQ7RUFDRSx1QkFBdUI7R0FDdEIsaUNBQWlDO0dBR2pDLG1CQUFtQjtHQUduQiwyQ0FBMkM7O0NBRTdDOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1COztDQUVwQjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkI7O0FBQ0Q7O0VBRUUsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbmgxLnRpdGxlIHtcbiBmb250LXNpemU6IDUwcHg7XG4gZm9udC1mYW1pbHk6ICdQYXNzaW9uIE9uZScsIGN1cnNpdmU7XG4gZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaHJ7XG4gd2lkdGg6IDEwJTtcbiBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm0tZ3JvdXB7XG4gbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxubGFiZWx7XG4gbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuaW5wdXQsXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICBmb250LXNpemU6IDExcHg7XG4gICBwYWRkaW5nLXRvcDogM3B4O1xufVxuXG4ubWFpbi1sb2dpbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgIC8qIHNoYWRvd3MgYW5kIHJvdW5kZWQgYm9yZGVycyAqL1xuICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cbn1cblxuLm1haW4tY2VudGVye1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogNDBweCA0MHB4O1xuXG59XG5cbi5sb2dpbi1idXR0b257XG4gbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubG9naW4tcmVnaXN0ZXJ7XG4gZm9udC1zaXplOiAxMXB4O1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXJcbntcbiAgbWFyZ2luLXRvcDogNTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <div class=\"row justify-content-center\">\n  <div class=\"col-md-6\">\n  <div class=\"card\">\n  <header class=\"card-header\">\n    <h4 class=\"card-title mt-2\">Sign up</h4>\n  </header>\n  <article class=\"card-body\">\n  <form>\n    <div class=\"form-row\">\n      <div class=\"col form-group\">\n        <label>First name </label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n      </div> <!-- form-group end.// -->\n      <div class=\"col form-group\">\n        <label>Last name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\" \">\n      </div> <!-- form-group end.// -->\n    </div> <!-- form-row end.// -->\n    <div class=\"form-group\">\n      <label>Email address</label>\n      <input type=\"email\" class=\"form-control\" placeholder=\"\">\n      <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div> <!-- form-group end.// -->\n    <div class=\"form-group\">\n        <label class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gender\" value=\"option1\">\n        <span class=\"form-check-label\"> Male </span>\n      </label>\n      <label class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gender\" value=\"option2\">\n        <span class=\"form-check-label\"> Female</span>\n      </label>\n    </div> <!-- form-group end.// -->\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label>City</label>\n        <input type=\"text\" class=\"form-control\">\n      </div> <!-- form-group end.// -->\n      <div class=\"form-group col-md-6\">\n        <label>Country</label>\n        <select id=\"inputState\" class=\"form-control\">\n          <option> Choose...</option>\n            <option>Uzbekistan</option>\n            <option>Russia</option>\n            <option selected=\"\">United States</option>\n            <option>India</option>\n            <option>Afganistan</option>\n        </select>\n      </div> <!-- form-group end.// -->\n    </div> <!-- form-row.// -->\n    <div class=\"form-group\">\n      <label>Create password</label>\n        <input class=\"form-control\" type=\"password\">\n    </div> <!-- form-group end.// -->\n      <div class=\"form-group\">\n          <a routerLink=\"/login\" type=\"submit\" class=\"btn btn-primary btn-block\"> Register  </a>\n      </div> <!-- form-group// -->\n      <small class=\"text-muted\">By clicking the 'Sign Up' button, you confirm that you accept our <br> Terms of use and Privacy Policy.</small>\n  </form>\n  </article> <!-- card-body end .// -->\n  <div class=\"border-top card-body text-center\">Have an account? <a routerLink=\"/login\">Log In</a></div>\n  </div> <!-- card.// -->\n  </div> <!-- col.//-->\n\n  </div> <!-- row.//-->\n\n\n  </div>\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
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

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/summary.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/summary.pipe.ts ***!
  \*********************************/
/*! exports provided: SummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPipe", function() { return SummaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SummaryPipe = /** @class */ (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (description, args) {
        if (!description) {
            return null;
        }
        return description.substr(0, 150) + '...';
    };
    SummaryPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCtI143j7zEVkHDbWq-bejojQSCfoTuwGQ',
        authDomain: 'oshop-6aa06.firebaseapp.com',
        databaseURL: 'https://oshop-6aa06.firebaseio.com',
        projectId: 'oshop-6aa06',
        storageBucket: '',
        messagingSenderId: '784706709649'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ASUS-PC\Desktop\RT4\biblio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map