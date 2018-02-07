webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" class=\"text-center\" id=\"about\">\n    <div class=\"card\">\n    <h2 style=\"color:white;\">Welcome to #collegeHACKS</h2>\n        <p>collegeHACKS allows you to find a roommate or an apartment, look for a shared ride and for used textbooks.</p>\n        <p>Skim the list of roommates, rides or textbooks to find anything of interest.</p>\n        <p>Or simply make a post for a roommate / apartment, a shared ride or to sell a textbook.</p>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-ride/add-ride.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container\r\n{\r\n    background-color: tan;\r\n    \r\n}\r\n\r\n\r\nh1\r\n{\r\n    color: indianred;\r\n}\r\n\r\n.card\r\n{\r\n    padding: 1em;\r\n}\r\n\r\n:invalid\r\n{\r\n    color: brown;\r\n}\r\n\r\n\r\n.container\r\n{\r\n    margin-top: 5%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-ride/add-ride.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<form [formGroup]='form' #myForm = \"ngForm\" \n(ngSubmit)= \"onSubmit(form.value, myForm)\">\n\n    <div class=\"container\">\n        <div class=\"card\">\n            <div class=\"row\">\n                <div class=\"card col-sm-4\" style=\"left:15%;\">\n                    <h1 class=\"text-center\">Ride Information</h1> \n                        \n                    <!-- Address -->\n                    <h5>Starting Address*</h5>\n            \n                    <div class=\"row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"start_street\">Street* </label>\n                            <input type=\"text\" class=\"form-control\" formControlName='start_street' #start_street required >            \n                        </div>\n\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"start_city\">City*</label>\n                            <input type=\"text\" class=\"form-control\" formControlName='start_city' #start_city required>\n                        </div>\n                    </div>\n                    \n\n                    <div class=\"row\">\n                        \n                        <div class=\"form-group col-md-6\">\n                            <label for=\"start_state\">State*</label>\n                            <input type=\"text\" class=\"form-control\" formControlName='start_state' #start_state required>\n                        </div>\n                            \n                        <div class=\"form-group col-md-6\">\n                            <label for=\"start_zip\">Zip*</label>\n                            <input type=\"number\" class=\"form-control\" formControlName='start_zip' #start_zip required>\n                        </div>\n                    </div>\n                \n                    \n                    <h5>Destination*</h5>    \n                    \n                    <div class=\"row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"dest_street\">Street* </label>\n                            <input type=\"text\" class=\"form-control\" formControlName='dest_street' #dest_street required >            \n                        </div>\n        \n                        <div class=\"form-group col-md-6\">\n                            <label for=\"dest_city\">City*</label>\n                            <input type=\"text\" class=\"form-control\" formControlName='dest_city' #dest_city required>\n                        </div>\n                    </div>\n                            \n        \n                    <div class=\"row\">\n                        \n                        <div class=\"form-group col-md-6\">\n                            <label for=\"dest_state\">State*</label>\n                            <input type=\"text\" class=\"form-control\" formControlName='dest_state' #dest_state required>\n                        </div>\n                            \n                        <div class=\"form-group col-md-6\">\n                            <label for=\"dest_zip\">Zip*</label>\n                            <input type=\"number\" class=\"form-control\" formControlName='dest_zip' #dest_zip required>\n                        </div>\n                    </div>\n\n                    <!-- Date and Time -->\n    \n                    <div class=\"form-group\">\n                        <label for=\"date\">Date*  </label>\n                        <div class=\"input-group\">    \n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                  ngbDatepicker #date=\"ngbDatepicker\" formControlName='date' required>\n                            <button class=\"input-group-addon\" (click)=\"date.toggle()\" type=\"button\" style=\"cursor: pointer;\">\n                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                            </button>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group \">\n                        <label for=\"time\">Time* </label>  \n                        <input type=\"text\" class=\"form-control\" formControlName='time' #time required>\n                    </div>\n                  \n\n                </div>\n                \n                <!-- Contant information -->\n                <div class=\"card col-sm-4\" style=\"left: 18%;\">\n                    <h1 class=\"text-center\">Contact Information</h1>\n                    \n                    <div class=\"form-group\">\n                        <label for=\"name\">Name* </label>\n                        <input type=\"text\" class=\"form-control\" formControlName='name' #name required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email* </label>\n                        <input type=\"email\" class=\"form-control\" formControlName='email' #email required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"phone\" style=\"color:black;\">Phone </label>\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Optional\" formControlName='phone' #phone>\n                    </div>\n\n                    <div class=\"text-center\" style=\"padding-top: 10%;\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-lg\">\n                            Submit  \n                        </button>\n                        <button type=\"reset\" class=\"btn btn-primary btn-lg\">\n                            Cancel  \n                        </button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</form>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/add-ride/add-ride.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_service__ = __webpack_require__("../../../../../src/app/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddRideComponent = (function () {
    function AddRideComponent(db, fb) {
        this.fb = fb;
        this.itemsRef = db.list("/hacks/ride");
        this.form = fb.group({
            'start_street': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'start_city': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'start_state': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'start_zip': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'dest_street': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'dest_city': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'dest_state': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'dest_zip': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'date': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'time': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'phone': [null, ""]
        });
    }
    AddRideComponent.prototype.ngOnInit = function () {
    };
    AddRideComponent.prototype.onSubmit = function (form, myForm) {
        if (myForm.valid) {
            this.databasePush(form);
        }
    };
    AddRideComponent.prototype.databasePush = function (form) {
        this.itemsRef.push({
            startStreet: form.start_street,
            startCity: form.start_city,
            startState: form.start_state,
            startZip: form.start_zip,
            destinationStreet: form.dest_street,
            destinationCity: form.dest_city,
            destinationState: form.dest_state,
            destinationZip: form.dest_zip,
            Date: form.date,
            Time: form.time,
            Name: form.name,
            Email: form.email,
            Phone: form.phone
        });
        location.reload();
    };
    return AddRideComponent;
}());
AddRideComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-ride',
        template: __webpack_require__("../../../../../src/app/add-ride/add-ride.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-ride/add-ride.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__map_service__["a" /* MapService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], AddRideComponent);

var _a, _b;
//# sourceMappingURL=add-ride.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-roommate/add-roommate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container\r\n{\r\n    background-color: tan;\r\n}\r\n\r\n.card\r\n{\r\n    padding: 1em;\r\n    \r\n}\r\n\r\nh1\r\n{\r\n    color: indianred;\r\n}\r\n\r\n:invalid\r\n{\r\n    color: brown;\r\n}\r\n\r\n\r\n#map {\r\n    height: 100%;\r\n  }\r\n  /* Optional: Makes the sample page fill the window. */\r\n  html, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  #floating-panel {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 25%;\r\n    z-index: 5;\r\n    background-color: #fff;\r\n    padding: 5px;\r\n    border: 1px solid #999;\r\n    text-align: center;\r\n    font-family: 'Roboto','sans-serif';\r\n    line-height: 30px;\r\n    padding-left: 10px;\r\n  }\r\n\r\n  .container\r\n  {\r\n      margin-top: 5%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-roommate/add-roommate.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]='form' #myForm = \"ngForm\" (ngSubmit)= \"onSubmit(form.value, myForm)\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"card\">\r\n            <div class=\"row\">\r\n\r\n                <!-- Apartment Information -->\r\n                <div class=\"card col-sm-4\" style=\"left:15%;\">\r\n                    <h1 class=\"text-center\">Apartment Information</h1>\r\n                        \r\n                    <!-- Name of apartment -->\r\n                    <div class=\"form-group\">\r\n                        <label for=\"apartment\">Apartment Name*</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName='apartment' #apartment required >\r\n                    </div>\r\n                    \r\n                    <!-- Address for apartment -->\r\n                    <div class=\"form-group\">\r\n                        <label for=\"address\">Address*</label>\r\n                        <input type=\"text\" class=\"form-control\" #address formControlName='address' placeholder=\"1234 Main St\" required>\r\n                    </div>\r\n    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputAddress2\" style=\"color:black;\">Address 2</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Apartment, studio, or floor\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group \">\r\n                        <label for=\"city\">City*</label>  \r\n                        <input type=\"text\" class=\"form-control\" formControlName='city' #city required>\r\n                    </div>\r\n                         \r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"state\">State*</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName='state' #state required>\r\n                        </div>\r\n                            \r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"zip\">Zip*</label>\r\n                            <input type=\"number\" class=\"form-control\" formControlName='zip' #zip required>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"rent\">Rent*</label>\r\n                            <input type=\"number\" class=\"form-control\" formControlName='rent' #rent required>\r\n                        </div>\r\n                            \r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"utilities\">Utilities*</label>\r\n                            <input type=\"number\" class=\"form-control\" formControlName='utilities' #utilities required>\r\n                        </div>\r\n                    </div>\r\n\r\n                \r\n                    <div class=\"form-group\">\r\n                        <label for=\"date\">Date*  </label>\r\n                        <div class=\"input-group\">    \r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                    ngbDatepicker #date=\"ngbDatepicker\" formControlName='date' required>\r\n                            <button class=\"input-group-addon\" (click)=\"date.toggle()\" type=\"button\" style=\"cursor: pointer;\">\r\n                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                \r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"desc\" style=\"color:black;\">Description</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Optional\" formControlName='desc' #desc>\r\n                    </div>\r\n\r\n                </div>\r\n                \r\n                <!-- Contact information -->\r\n                <div class=\"card col-sm-4\" style=\"left:18%;\">\r\n                    <h1 class=\"text-center\">Contact Information</h1>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Name*</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName='name' #name required>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Email*</label>\r\n                        <input type=\"email\" class=\"form-control\" formControlName='email' #email required>\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"phone\" style=\"color:black;\">Phone Number</label>\r\n                        <input type=\"Number\" class=\"form-control\" placeholder=\"Optional\" formControlName='phone' #phone>\r\n                    </div>\r\n\r\n                    <div class=\"text-center\" style=\"padding-top: 10%;\">\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-lg\" >\r\n                            Submit  \r\n                        </button>\r\n                        <button type=\"reset\" class=\"btn btn-primary btn-lg\">\r\n                            Cancel  \r\n                        </button>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</form>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/add-roommate/add-roommate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRoommateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddRoommateComponent = (function () {
    function AddRoommateComponent(db, fb) {
        this.valid = true;
        this.itemsRef = db.list("/hacks/roommate");
        this.form = fb.group({
            'apartment': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'address': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'city': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'state': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'zip': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'rent': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'utilities': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'date': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'phone': [null, ""],
            'desc': [null, ""]
        });
    }
    AddRoommateComponent.prototype.ngOnInit = function () {
    };
    AddRoommateComponent.prototype.onSubmit = function (form, myForm) {
        if (myForm.valid) {
            this.itemsRef.push({
                Apt: form.apartment,
                Address: form.address + ", " + form.city + " " + form.state + " " + form.zip,
                Rent: form.rent,
                Utilities: form.utilities,
                Name: form.name,
                Email: form.email,
                description: form.desc,
                Date: form.date,
                Phone: form.phone
            });
            location.reload();
        }
    };
    return AddRoommateComponent;
}());
AddRoommateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-roommate',
        template: __webpack_require__("../../../../../src/app/add-roommate/add-roommate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-roommate/add-roommate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], AddRoommateComponent);

var _a, _b;
//# sourceMappingURL=add-roommate.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-textbook/add-textbook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container\r\n{\r\n    background-color: tan;\r\n    \r\n}\r\n\r\n\r\nh1\r\n{\r\n    color: indianred;\r\n}\r\n\r\n.card\r\n{\r\n    padding: 1em;\r\n}\r\n\r\n:invalid\r\n{\r\n    color: brown;\r\n}\r\n\r\n.container\r\n{\r\n    margin-top: 5%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-textbook/add-textbook.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]='form' #myForm = \"ngForm\" \n(ngSubmit)= \"onSubmit(form.value, myForm)\">\n\n    <div class=\"container\">\n        <div class=\"card\">\n            <div class=\"row\">\n                <div class=\"card col-sm-4\" style=\"left:15%;\">\n                    <h1 class=\"text-center\">Textbook Information</h1> \n                        \n                    <!-- Address -->\n                    <div class=\"form-group\">\n                        <label for=\"book\">Name* </label>\n                        <input type=\"text\" class=\"form-control\" formControlName='book' #book ngModel required >\n                        \n                    </div>\n                    \n                    \n                    <div class=\"form-group\">\n                        <label for=\"edition\">Edition*</label>\n                        <input type=\"text\" class=\"form-control\" #edition formControlName='edition' required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"price\">Price*</label>\n                        <input type=\"number\" class=\"form-control\" #price formControlName='price' required>\n                    </div>\n\n                    <label for=\"condition\">Condition*</label>\n                    <select class=\"selectpicker\" #condition formControlName='condition' required>\n                        <option>New</option>\n                        <option>Like New</option>\n                        <option>Used - Very Good</option>\n                        <option>Used - Good</option>\n                    </select>\n                \n                    <div class=\"form-group\">\n                        <label for=\"desc\" style=\"color:black;\">Description</label>\n                        <input type=\"text\" class=\"form-control\" #desc formControlName='desc'>\n                    </div>\n\n                    <br>\n                    \n                </div>\n                \n                <!-- Contant information -->\n                <div class=\"card col-sm-4\" style=\"left: 18%;\">\n                    <h1 class=\"text-center\">Contact Information</h1>\n                    \n                    <div class=\"form-group\">\n                        <label for=\"name\">Name* </label>\n                        <input type=\"text\" class=\"form-control\" formControlName='name' #name required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email* </label>\n                        <input type=\"email\" class=\"form-control\" formControlName='email' #email required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"phone\" style=\"color:black;\">Phone </label>\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Optional\" formControlName='phone' #phone>\n                    </div> \n\n                    <div class=\"text-center\" style=\"padding-top: 10%;\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-lg\">\n                            Submit  \n                        </button>\n                        <button type=\"reset\" class=\"btn btn-primary btn-lg\">\n                            Cancel  \n                        </button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    \n\n</form>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/add-textbook/add-textbook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTextbookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTextbookComponent = (function () {
    function AddTextbookComponent(db, fb) {
        this.fb = fb;
        this.itemsRef = db.list("/hacks/textbook");
        this.form = fb.group({
            'book': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'edition': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'price': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'condition': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            'phone': [null, ""],
            'desc': [null, ""]
        });
    }
    AddTextbookComponent.prototype.ngOnInit = function () {
    };
    AddTextbookComponent.prototype.onSubmit = function (value, myForm) {
        if (myForm.valid) {
            this.itemsRef.push({
                Book: value.book,
                Edition: value.edition,
                Name: value.name,
                Email: value.email,
                Description: value.desc,
                Condition: value.condition,
                Price: value.price,
                Phone: value.phone
            });
            console.log(value.image);
            location.reload();
        }
    };
    return AddTextbookComponent;
}());
AddTextbookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-textbook',
        template: __webpack_require__("../../../../../src/app/add-textbook/add-textbook.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-textbook/add-textbook.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], AddTextbookComponent);

var _a, _b;
//# sourceMappingURL=add-textbook.component.js.map

/***/ }),

/***/ "../../../../../src/app/apartment-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApartmentDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApartmentDataService = (function () {
    function ApartmentDataService(db) {
        this.itemsRef = db.list('/hacks/roommate');
        this.items = this.itemsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    ApartmentDataService.prototype.getEntries = function () {
        return this.items;
    };
    // delete entries whose start date is past present month / year
    ApartmentDataService.prototype.oldEntries = function () {
        var _this = this;
        this.items.forEach(function (element) {
            element.map(function (entry) {
                var month = new Date().getMonth() + 1;
                if (new Date().getFullYear() > entry.Date.year) {
                    _this.itemsRef.remove(entry.key);
                }
                if (new Date().getFullYear() === entry.Date.year) {
                    if (month > entry.Date.month) {
                        _this.itemsRef.remove(entry.key);
                    }
                }
            });
        });
    };
    return ApartmentDataService;
}());
ApartmentDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ApartmentDataService);

var _a;
//# sourceMappingURL=apartment-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_roommate_roommate_component__ = __webpack_require__("../../../../../src/app/components/roommate/roommate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ride_ride_component__ = __webpack_require__("../../../../../src/app/components/ride/ride.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_textbooks_textbooks_component__ = __webpack_require__("../../../../../src/app/components/textbooks/textbooks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__ = __webpack_require__("../../../../cuppa-ng2-slidemenu/cuppa-ng2-slidemenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng_bootstrap_form_validation__ = __webpack_require__("../../../../ng-bootstrap-form-validation/ng-bootstrap-form-validation/ng-bootstrap-form-validation.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_service__ = __webpack_require__("../../../../../src/app/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__add_ride_add_ride_component__ = __webpack_require__("../../../../../src/app/add-ride/add-ride.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__add_roommate_add_roommate_component__ = __webpack_require__("../../../../../src/app/add-roommate/add-roommate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_textbook_add_textbook_component__ = __webpack_require__("../../../../../src/app/add-textbook/add-textbook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_user_user_component__["a" /* UserComponent */] },
    { path: 'roommates', component: __WEBPACK_IMPORTED_MODULE_6__components_roommate_roommate_component__["a" /* RoommateComponent */] },
    { path: 'rides', component: __WEBPACK_IMPORTED_MODULE_7__components_ride_ride_component__["a" /* RideComponent */] },
    { path: 'display-books', component: __WEBPACK_IMPORTED_MODULE_8__components_textbooks_textbooks_component__["a" /* TextbooksComponent */] },
    { path: 'create-post', component: __WEBPACK_IMPORTED_MODULE_9__components_post_post_component__["a" /* PostComponent */] },
    { path: 'add-ride', component: __WEBPACK_IMPORTED_MODULE_20__add_ride_add_ride_component__["a" /* AddRideComponent */] },
    { path: 'need-roommate', component: __WEBPACK_IMPORTED_MODULE_21__add_roommate_add_roommate_component__["a" /* AddRoommateComponent */] },
    { path: 'need-textbook', component: __WEBPACK_IMPORTED_MODULE_22__add_textbook_add_textbook_component__["a" /* AddTextbookComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_23__about_about_component__["a" /* AboutComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_roommate_roommate_component__["a" /* RoommateComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_ride_ride_component__["a" /* RideComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_textbooks_textbooks_component__["a" /* TextbooksComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_20__add_ride_add_ride_component__["a" /* AddRideComponent */],
            __WEBPACK_IMPORTED_MODULE_21__add_roommate_add_roommate_component__["a" /* AddRoommateComponent */],
            __WEBPACK_IMPORTED_MODULE_22__add_textbook_add_textbook_component__["a" /* AddTextbookComponent */],
            __WEBPACK_IMPORTED_MODULE_23__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_24__map_map_component__["a" /* MapComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_17__environments_environment__["a" /* environment */].firebase), __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_11_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__["a" /* SlideMenuModule */], __WEBPACK_IMPORTED_MODULE_14__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12_ng_bootstrap_form_validation__["a" /* NgBootstrapFormValidationModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_13__map_service__["a" /* MapService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]] //  the main component
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/book-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookDataService = (function () {
    function BookDataService(db) {
        this.itemsRef = db.list('/hacks/textbook');
        this.items = this.itemsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    BookDataService.prototype.retrieveData = function () {
        return this.items;
    };
    return BookDataService;
}());
BookDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], BookDataService);

var _a;
//# sourceMappingURL=book-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n    \r\n    font-size: 18.5px;\r\n    \r\n}\r\n\r\n.bg-dark\r\n{\r\n   background-color: #833a3a !important;\r\n}\r\n\r\n.navbar\r\n{\r\n    border-radius: 4px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  \n  <nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-dark\" role=\"navigation\" >\n    \n    <a class=\"navbar-brand\" [routerLink]=\"['']\"  style=\"color:white;\">#collegeHACKS</a>\n      \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" \n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" \n    (click)=\"toggleCollapsed()\" appMobileSidebarToggler >\n     \n      <span class=\"navbar-toggler-icon\" style=\"color: white;\"></span>\n    </button>\n      \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\" >\n      <ul class=\"navbar-nav ml-auto\" >\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/roommates']\" style=\"color:white;\">Apartments</a>\n        </li>\n      \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/rides']\" style=\"color:white;\">Rides</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/display-books']\" style=\"color:white;\">Textbooks</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/create-post']\" style=\"color:white;\">Post</a>\n        </li>\n          \n      </ul>\n        \n      <!-- <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form> -->\n    \n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.collapsed = true;
    }
    NavbarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    NavbarComponent.prototype.openMenu = function () {
        document.getElementById('wrapper');
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn, .a\r\n{\r\n    color: white;\r\n    font-size: 2em;\r\n    display: block;\r\n    margin: 0 auto;\r\n    background-color: rgba(255, 162, 0, 0.849);\r\n}\r\n\r\n.each-button\r\n{\r\n    color: white;\r\n}\r\n\r\n.container\r\n{\r\n    margin-top: 8%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n\n<div class=\"container\">\n  <div class=\"each_post\">\n    <button class=\"btn btn-warning btn-lg\"> \n      <a [routerLink]=\"['/add-ride']\" class=\"each-button\">\n        <i class=\"fa fa-car\" aria-hidden=\"true\"></i> \n        Need a Ride\n      </a>\n    </button>\n  </div>\n  <br>\n  \n  <div>\n    <button class=\"btn btn-warning btn-lg\" >\n        <a [routerLink]=\"['/need-roommate']\" class=\"each-button\">\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i>  \n          Need an Apartment\n        </a>\n    </button>\n  </div>\n  <br>\n  \n  <div>\n    <button class=\"btn btn-warning btn-lg\">\n      <a [routerLink]=\"['/need-textbook']\" class=\"each-button\">\n        <i class=\"fa fa-book\" aria-hidden=\"true\"></i>  \n        Sell a Textbook\n      </a>\n    </button>\n  </div>\n</div>  \n"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    return PostComponent;
}());
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PostComponent);

//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/ride/ride.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h5\r\n{\r\n    color: white;\r\n}\r\n\r\n#eachCard\r\n{\r\n    margin: 1.5em;\r\n    background-color: lightslategray;\r\n}\r\n\r\n.btn\r\n{\r\n    color: white;\r\n    background-color: lightslategray;\r\n}\r\n\r\n#header, h4\r\n{\r\n    background-color:lightslategray;;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n#map\r\n{\r\n    float: right;\r\n    width: 45%;\r\n    margin-top: 1.5em;\r\n}\r\n\r\n.container\r\n{\r\n    margin-top: 5%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ride/ride.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"card text-center\"  id=\"eachCard\" *ngFor=\"let ride of rides | async\">      \n                <h5> {{ride.startStreet}} </h5>\n                    \n                     <p style=\"color:white;\"> To</p> \n                     <h5> {{ride.destinationStreet}}</h5>\n                     \n            \n                <ngb-accordion [closeOthers]=\"true\">\n                    <ngb-panel title = \"View Details\" >\n                        \n                        <ng-template ngbPanelContent >\n                            <li class=\"list-group-item\">\n                                Time : {{ride.Time}}\n                                <br>\n                                Date: {{ride.Date.month}} / {{ride.Date.day}} / {{ride.Date.year}} \n                            </li>      \n                            <li class=\"list-group-item text-center\">\n                                <a (click)=\"display(ride, content)\" data-toggle =\"modal\" class=\"btn btn-info\" role=\"button\" style=\"color:white;\">\n                                    <i class=\"fa fa-address-card\" aria-hidden=\"true\"> Contact </i>\n                                </a>\n\n                                <button class=\"btn btn-info\" role=\"button\" style=\"color:white;\" \n                                (click)=\"showOnMap(ride.startStreet+ride.startCity+ride.startState+ride.startZip, ride.destinationStreet+ride.destinationCity+ride.destinationState+ride.destinationZip, infoPop)\">\n                                    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"> Find on Map</i>\n                                    \n                                </button>\n                                \n                            </li>        \n                        </ng-template>\n                    </ngb-panel>            \n                </ngb-accordion>\n            </div>\n        </div>\n        <div id=\"map\">\n            <app-map></app-map>\n        </div>\n    </div> \n    \n</div> \n\n <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\" id=\"header\">\n        <h4 class=\"modal-title text-center\" >\n            <i class=\"fa fa-user-o\" aria-hidden=\"true\"> {{data.Name}}</i> \n        </h4>\n\n    </div>\n    <div class=\"modal-body\" id=\"contact\">\n        <li class=\"list-group-item\">\n            {{data.Email}}\n        </li>\n        <div *ngIf=\"data.Phone\">\n            <li class=\"list-group-item\">\n                {{data.Phone}}\n            </li>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template> \n\n<ng-template #infoPop let-c=\"close\" let-d=\"dismiss\">\n    \n    <div class=\"modal-body\" id=\"info\" #info>\n      \n    </div>\n    \n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template> \n"

/***/ }),

/***/ "../../../../../src/app/components/ride/ride.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rides_data_service__ = __webpack_require__("../../../../../src/app/rides-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_service__ = __webpack_require__("../../../../../src/app/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RideComponent = (function () {
    function RideComponent(modalService, rd, ms) {
        this.modalService = modalService;
        this.rd = rd;
        this.ms = ms;
        this.rides = rd.getEntries();
    }
    RideComponent.prototype.ngOnInit = function () {
        this.rd.oldEntries();
    };
    RideComponent.prototype.display = function (item, modal) {
        this.data = item;
        this.modalService.open(modal);
    };
    // show the route
    RideComponent.prototype.showOnMap = function (address_start, address_dest, modal) {
        this.ms.showRouteForRide(address_start, address_dest);
        // this.ms.currentMessage.subscribe(message => this.message = message);
        // console.log(this.message);
        this.modalService.open(modal);
    };
    return RideComponent;
}());
RideComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ride',
        template: __webpack_require__("../../../../../src/app/components/ride/ride.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/ride/ride.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__rides_data_service__["a" /* RidesDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__rides_data_service__["a" /* RidesDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rides_data_service__["a" /* RidesDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__map_service__["a" /* MapService */]) === "function" && _c || Object])
], RideComponent);

var _a, _b, _c;
//# sourceMappingURL=ride.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/roommate/roommate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h5\r\n{\r\n    color: white;\r\n}\r\n\r\n#eachCard\r\n{\r\n    margin: 1.5em;\r\n    background-color: lightslategray;\r\n}\r\n\r\n.btn\r\n{\r\n    color: white;\r\n    background-color: lightslategray;\r\n}\r\n\r\n#map\r\n{\r\n    float: right;\r\n    width: 45%;\r\n    margin-top: 1.5em;\r\n}\r\n\r\n#header, h4\r\n{\r\n    background-color:lightslategrey;;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.container\r\n{\r\n    margin-top: 5%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/roommate/roommate.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n    <div class=\"container\" id=\"main\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"card\"  id=\"eachCard\" *ngFor=\"let item of items | async\">     \n                    <div class=\"text-center\" style=\"font-size:20px; color:white;\">\n                        <h5>{{item.Apt | uppercase}} </h5>\n                        \n                        {{item.Address}}        \n                    </div>\n\n                    <ngb-accordion [closeOthers]=\"true\">\n                        <ngb-panel >\n                            <ng-template ngbPanelTitle >\n                                View Details\n                            </ng-template>\n                            \n                            <ng-template ngbPanelContent>\n                                <li class=\"list-group-item\">\n                                    Start Date : {{item.Date.month}} / {{item.Date.day}} / {{item.Date.year}}\n                                </li>\n\n                                <li class=\"list-group-item\">\n                                    Rent + Utilities =  {{item.Rent}} + {{item.Utilities}} <br>\n                                    <div *ngIf=\"item.desc\">{{item.description}}</div>\n                                </li>      \n\n                                <li class=\"list-group-item\">\n                                    <a (click)=\"display(item, content)\" data-toggle =\"modal\" class=\"btn btn-info\" role=\"button\" style=\"color:white;\">\n                                        <i class=\"fa fa-address-card\" aria-hidden=\"true\"> Contact</i>\n                                    </a>\n                                    <a class=\"btn btn-info\" role=\"button\" style=\"color:white;\" (click)=\"showOnMap(item.Address)\">\n                                        <i class=\"fa fa-map-marker\" aria-hidden=\"true\"> Find on Map</i>\n                                    </a>\n                                </li>          \n                            </ng-template>\n                        </ngb-panel>            \n                    </ngb-accordion>\n                </div>                 \n            </div>\n\n            <div class=\"container\" id =\"map\">\n                <app-map></app-map>\n            </div>\n        \n        </div>\n    </div>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\" id=\"header\">\n        <h4 class=\"modal-title text-center\" >\n            <i class=\"fa fa-user-o\" aria-hidden=\"true\"> {{data.Name}}</i> \n        </h4>\n\n    </div>\n    <div class=\"modal-body\" id=\"contact\">\n        \n        <li class=\"list-group-item\">\n            {{data.Email}}\n        </li>\n        \n\n        <div *ngIf=\"data.Phone\">\n                <li class=\"list-group-item\">\n                    <i class=\"fa fa-mobile\" aria-hidden=\"true\">{{data.Phone}}</i>\n                </li>\n        </div>\n\n        <div *ngIf=\"data.description\">\n            <li class=\"list-group-item\">\n                <b> Note: </b>{{data.description}}\n            </li>\n        </div>\n        \n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template> \n"

/***/ }),

/***/ "../../../../../src/app/components/roommate/roommate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoommateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apartment_data_service__ = __webpack_require__("../../../../../src/app/apartment-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_service__ = __webpack_require__("../../../../../src/app/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoommateComponent = (function () {
    function RoommateComponent(modalService, de, ms) {
        this.modalService = modalService;
        this.de = de;
        this.ms = ms;
        this.items = de.getEntries();
    }
    RoommateComponent.prototype.ngOnInit = function () {
        this.de.oldEntries(); // delete entries past present month / year
    };
    RoommateComponent.prototype.display = function (item, modal) {
        this.data = item;
        this.modalService.open(modal);
    };
    RoommateComponent.prototype.showOnMap = function (address) {
        this.ms.showApartment(address);
    };
    return RoommateComponent;
}());
RoommateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-roommate',
        template: __webpack_require__("../../../../../src/app/components/roommate/roommate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/roommate/roommate.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__apartment_data_service__["a" /* ApartmentDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__apartment_data_service__["a" /* ApartmentDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__apartment_data_service__["a" /* ApartmentDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__map_service__["a" /* MapService */]) === "function" && _c || Object])
], RoommateComponent);

var _a, _b, _c;
//# sourceMappingURL=roommate.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/textbooks/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.fa84c320faecd70e2cb1.jpg";

/***/ }),

/***/ "../../../../../src/app/components/textbooks/textbooks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#body{\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/components/textbooks/background.jpg") + ");\r\n}\r\nh5{\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\nh2{\r\n    text-align: center;\r\n}\r\n\r\n#eachCard{\r\n    margin: 1.5em;\r\n    background-color: lightslategray;\r\n}\r\n\r\n.btn\r\n{\r\n    color: white;\r\n    background-color: lightslategrey;\r\n}\r\n\r\n.list-group-item\r\n{\r\n    text-align: left;\r\n}\r\n\r\n.container\r\n{\r\n    margin-top: 5%;\r\n    \r\n}\r\n\r\np{\r\n    color: white;\r\n    font-size: 20px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/textbooks/textbooks.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n    <div class=\"container\">\n        <div class=\"row\" >\n            <div class=\"col-sm-6\"  *ngFor=\"let item of items | async\">\n                <div class=\"card\" id=\"eachCard\" >\n                    <h5> \n                        {{item.Book}}\n                    </h5>            \n                    <p> Edition: {{item.Edition}} for ${{item.Price}}</p>\n\n                    <li class=\"list-group-item\">\n                            Condition: {{item.Condition}}.\n                    \n                        <li class=\"list-group-item\">\n                                <a (click)=\"display(item, content)\" data-toggle =\"modal\" class=\"btn btn-info\" role=\"button\" style=\"color:white;\">\n                                    <i class=\"fa fa-address-card\" aria-hidden=\"true\"> Contact</i>\n                                </a>\n                        </li>\n                </div>\n            </div> \n        \n        </div>                    \n    </div>\n</div>    \n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n            <i class=\"fa fa-user-o\" aria-hidden=\"true\"> {{data.Name}}</i> \n        </h4>\n\n    </div>\n    <div class=\"modal-body\" id=\"contact\">\n        <li class=\"list-group-item\">\n            {{data.Email}}\n        </li>\n        <div *ngIf=\"data.Phone\">\n            <li class=\"list-group-item\">\n                {{data.Phone}}\n            </li>\n        </div>\n        <div *ngIf=\"data.Description\">    \n            <li class=\"list-group-item\">\n               <b> Note about Book: </b>{{data.Description}}\n            </li>\n        </div>\n        \n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/textbooks/textbooks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextbooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_data_service__ = __webpack_require__("../../../../../src/app/book-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextbooksComponent = (function () {
    function TextbooksComponent(modalService, bd) {
        this.modalService = modalService;
        this.bd = bd;
        this.items = bd.retrieveData();
    }
    TextbooksComponent.prototype.ngOnInit = function () {
    };
    TextbooksComponent.prototype.display = function (item, modal) {
        this.data = item;
        this.modalService.open(modal);
    };
    return TextbooksComponent;
}());
TextbooksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-textbooks',
        template: __webpack_require__("../../../../../src/app/components/textbooks/textbooks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/textbooks/textbooks.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__book_data_service__["a" /* BookDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__book_data_service__["a" /* BookDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book_data_service__["a" /* BookDataService */]) === "function" && _b || Object])
], TextbooksComponent);

var _a, _b;
//# sourceMappingURL=textbooks.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/bg-mobile-fallback.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-mobile-fallback.0b5616250e1f2f32de12.jpg";

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body\r\n{\r\n    height: 100%;\r\n    overflow: auto;\r\n    \r\n}\r\n.card\r\n{\r\n    background-color: rgba(1, 44, 93, 0.8);\r\n    margin: 3em;\r\n    color:white;\r\n    font-size: 20px;\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6\r\n{\r\n    font-family:Merriweather;\r\n    font-weight:700;\r\n}\r\n\r\n.overlay\r\n{\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/components/user/bg-mobile-fallback.jpg") + ");\r\n    position:absolute; \r\n    height:100%;\r\n    width:100%;\r\n    background-color:#cd9557;\r\n    opacity:.75;\r\n    z-index:-1\r\n    \r\n}\r\n.masthead\r\n{\r\n    position:relative;overflow:hidden;padding-bottom:3rem\r\n}\r\n.masthead .masthead-bg\r\n{\r\n    position:absolute;\r\n    top:0;\r\n    bottom:0;\r\n    right:0;left:0;\r\n    width:100%;\r\n    height:100%;\r\n    background-color:rgba(0,46,102,.8);\r\n    -webkit-transform:skewY(4deg);\r\n            transform:skewY(4deg);\r\n    -webkit-transform-origin:bottom right;\r\n            transform-origin:bottom right\r\n}\r\n.masthead .masthead-content h1\r\n{\r\n    font-size:2.5rem\r\n}\r\n.masthead .masthead-content \r\n{\r\n    font-size:1.2rem\r\n}\r\n.masthead .masthead-content strong\r\n{\r\n    font-weight:700\r\n}\r\n.masthead .masthead-content .input-group-newsletter input\r\n{\r\n    font-size:1rem;\r\n    padding:1rem\r\n}\r\n@media (min-width:768px)\r\n{\r\n    .masthead\r\n    {\r\n        height:100%;\r\n        width:40.5rem;\r\n        padding-bottom:0\r\n    }\r\n    .masthead .masthead-bg\r\n    {\r\n        -webkit-transform:skewX(-8deg);\r\n                transform:skewX(-8deg);\r\n        -webkit-transform-origin:top right;\r\n                transform-origin:top right\r\n    }\r\n    .masthead .masthead-content\r\n    {\r\n        padding-left:3rem;\r\n        padding-right:10rem\r\n    }\r\n    .masthead .masthead-content h1\r\n    {\r\n        font-size:3.5rem\r\n    }\r\n    .masthead .masthead-content p\r\n    {\r\n        font-size:1.3rem\r\n    }\r\n}\r\n.social-icons ul\r\n{\r\n    margin-top:2rem\r\n}\r\n.social-icons ul>li\r\n{\r\n    margin-left:1rem;\r\n    margin-right:1rem;\r\n    display:inline-block\r\n}\r\n.social-icons ul>li>a\r\n{\r\n    display:block;color:#fff;\r\n    background-color:rgba(0,46,102,.8);\r\n    border-radius:100%;\r\n    font-size:2rem;\r\n    line-height:4rem;\r\n    height:4rem;width:4rem\r\n}\r\n@media (min-width:768px)\r\n{\r\n    .social-icons\r\n    {\r\n        position:absolute;right:2.5rem;bottom:2rem\r\n    }\r\n    .social-icons ul\r\n    {\r\n        margin-top:0\r\n    }\r\n    .social-icons ul>li\r\n    {\r\n        display:block;margin-left:0;margin-right:0;margin-bottom:2rem\r\n    }\r\n    .social-icons ul>li:last-child\r\n    {\r\n        margin-bottom:0\r\n    }\r\n    .social-icons ul>li>a\r\n    {\r\n        transition:all .2s ease-in-out;\r\n        font-size:2rem;\r\n        line-height:4rem;\r\n        height:4rem;\r\n        width:4rem}\r\n    .social-icons ul>li>a:hover\r\n    {\r\n        background-color:#002e66\r\n    }\r\n}\r\n.btn-secondary\r\n{\r\n    background-color:#cd9557;\r\n    border-color:#cd9557\r\n}\r\n    \r\n.btn-secondary:active,.btn-secondary:focus,.btn-secondary:hover\r\n{\r\n    background-color:#ba7c37!important;\r\n    border-color:#ba7c37!important\r\n}\r\n.input\r\n{\r\n    font-weight:300!important\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\r\n          \r\n<div class=\"masthead\">\r\n               \r\n    <div class=\"masthead-bg\"></div>\r\n               \r\n    <div class=\"container h-100\">\r\n        <div class=\"row h-100\">\r\n            <div class=\"col-12 my-auto\">\r\n    \r\n                <div class=\"masthead-content text-white py-5 py-md-0\">\r\n                    <br>\r\n                    <strong>\r\n                        <li >Need an apartment?</li>\r\n                        <li >Looking for a roommate?</li>\r\n                        <li>Need a shared ride?</li>\r\n                        <li>Wanna buy / sell a textbook?</li></strong>    \r\n                        <br>\r\n                        <h3>Welcome to #collegeHACKS</h3> \r\n                        <p>Here you can find a roommate or an apartment, look for a shared ride and textbooks.</p>\r\n                        <p>Skim the list of roommates, rides or textbooks to find anything of interest.</p>\r\n                        <p>Or simply make a post for a roommate / apartment, a shared ride or to sell a textbook.</p>             \r\n                    </div>                   \r\n                </div>        \r\n            </div>            \r\n        </div>\r\n          \r\n    </div>\r\n         \r\n    \r\n    <div class=\"social-icons\">\r\n        \r\n        <ul class=\"list-unstyled text-center mb-0\">\r\n    \r\n            <!-- <li class=\"list-unstyled-item\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n            </li> -->\r\n        </ul>\r\n        \r\n    </div>\r\n    \r\n\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    // public isCollapsed = false;
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapService = (function () {
    function MapService() {
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("default message");
        this.currentMessage = this.messageSource.asObservable();
        this.alert = "";
    }
    /*
     * Locates the apartment on the map
     * Displays place details on info window
    */
    MapService.prototype.showApartment = function (address) {
        var resultsMap = new google.maps.Map(document.getElementById('map'), {
            zoom: 18
        });
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                // get the details about the place
                var infowindow = new google.maps.InfoWindow();
                var service = new google.maps.places.PlacesService(resultsMap);
                service.getDetails({
                    placeId: results[0].place_id
                }, function (place, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        var marker = new google.maps.Marker({
                            map: resultsMap,
                            position: place.geometry.location
                        });
                        google.maps.event.addListener(marker, 'click', function () {
                            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                                place.formatted_address + '</div>');
                            infowindow.open(resultsMap, this);
                        });
                    }
                });
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    /*
     * Displays the route between start and destination address for shared ride
     * called by RideComponent
     * Will calculate the distance and time to reach destination
    */
    MapService.prototype.showRouteForRide = function (start_Address, destination_Address) {
        // this.mp.initMapShowRoute(start_address, destination);
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var service = new google.maps.DistanceMatrixService;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            disableDefaultUI: true,
            zoomControl: true
        });
        directionsDisplay.setMap(map);
        // show the direction on map
        directionsService.route({
            origin: start_Address,
            destination: destination_Address,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        // to find the distance and duration
        service.getDistanceMatrix({
            origins: [start_Address],
            destinations: [destination_Address],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status === 'OK') {
                var originList = response.originAddresses;
                var destinationList = response.destinationAddresses;
                var results = response.rows[0].elements;
                this.alert = results[0].distance.text + " and will take approximately " + results[0].duration.text;
                document.getElementById("info").innerText = "The distance is " + this.alert + ".";
            }
            else {
                alert('Error was: ' + status);
            }
        });
    };
    return MapService;
}());
MapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MapService);

//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"map\" style=\"height:100%\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_service__ = __webpack_require__("../../../../../src/app/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = (function () {
    function MapComponent(ms) {
        this.ms = ms;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    /*
     * Displays an initial map
    */
    MapComponent.prototype.initMap = function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: { lat: 41.850033, lng: -87.6500523 }
        });
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */]) === "function" && _a || Object])
], MapComponent);

var _a;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/rides-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidesDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RidesDataService = (function () {
    function RidesDataService(db) {
        this.ridesRef = db.list('/hacks/ride');
        this.rides = this.ridesRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    RidesDataService.prototype.getEntries = function () {
        return this.rides;
    };
    // delete entries whose start date is past present month / year
    RidesDataService.prototype.oldEntries = function () {
        var _this = this;
        this.rides.forEach(function (element) {
            element.map(function (entry) {
                var month = new Date().getMonth() + 1;
                if (new Date().getFullYear() > entry.Date.year) {
                    _this.ridesRef.remove(entry.key);
                }
                if (new Date().getFullYear() === entry.Date.year) {
                    if (month > entry.Date.month) {
                        _this.ridesRef.remove(entry.key);
                    }
                }
            });
        });
    };
    return RidesDataService;
}());
RidesDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], RidesDataService);

var _a;
//# sourceMappingURL=rides-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirebaseService = (function () {
    function FirebaseService() {
    }
    return FirebaseService;
}());
FirebaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FirebaseService);

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD43JNksp0vmurGy5ye2ydTf6QewTcPpHg",
        authDomain: "schoolhacks-c294b.firebaseapp.com",
        databaseURL: "https://schoolhacks-c294b.firebaseio.com",
        projectId: "schoolhacks-c294b",
        storageBucket: "schoolhacks-c294b.appspot.com",
        messagingSenderId: "88682774533"
    },
    googleMap: {
        apiKey: "AIzaSyDx8GkRDSs6Lkt1MC0BVn_TgGeq_5-Iq3k"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map