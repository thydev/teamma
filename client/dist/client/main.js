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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _playersadd_playersadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playersadd/playersadd.component */ "./src/app/playersadd/playersadd.component.ts");
/* harmony import */ var _playerslist_playerslist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerslist/playerslist.component */ "./src/app/playerslist/playerslist.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'players', component: _players_players_component__WEBPACK_IMPORTED_MODULE_2__["PlayersComponent"], children: [
            { path: 'add', component: _playersadd_playersadd_component__WEBPACK_IMPORTED_MODULE_3__["PlayersaddComponent"] },
            { path: 'list', component: _playerslist_playerslist_component__WEBPACK_IMPORTED_MODULE_4__["PlayerslistComponent"] },
        ] },
    { path: 'games/:id', component: _games_games_component__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"] },
    // { path: '', component: PlayerslistComponent },
    { path: '', pathMatch: 'full', redirectTo: '/players/list' },
    { path: '**', component: _playerslist_playerslist_component__WEBPACK_IMPORTED_MODULE_4__["PlayerslistComponent"] }
];
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light\">\n    \n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['players/list']\" >Manger Players</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['games', 1]\" >Manager player Status</a></li>\n    </ul>\n</nav>\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'app';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.service */ "./src/app/player.service.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _playersadd_playersadd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./playersadd/playersadd.component */ "./src/app/playersadd/playersadd.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _playerslist_playerslist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./playerslist/playerslist.component */ "./src/app/playerslist/playerslist.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _players_players_component__WEBPACK_IMPORTED_MODULE_7__["PlayersComponent"],
                _playersadd_playersadd_component__WEBPACK_IMPORTED_MODULE_8__["PlayersaddComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_9__["GamesComponent"],
                _playerslist_playerslist_component__WEBPACK_IMPORTED_MODULE_10__["PlayerslistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/games/games.component.css":
/*!*******************************************!*\
  !*** ./src/app/games/games.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button [routerLink]=\"['/games', 1]\" class=\"btn btn-link\">Game 1</button> | \n  <button [routerLink]=\"['/games', 2]\" class=\"btn btn-link\">Game 2</button> | \n  <button [routerLink]=\"['/games', 3]\" class=\"btn btn-link\">Game 3</button> \n</div>\n<div class=\"row\">\n  <div class=\"col-12 text-center\">\n      <table class=\"table table-hover border w-75\">\n          <thead>\n            <tr>\n              <th>Team Name</th>\n              <th colspan=\"3\" class=\"text-center\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let t of players\">\n              <td>{{t.name}}</td>\n              <td><button (click)=\"onUpdateStatus(t, 2)\" \n                    [ngClass]=\"{'btn-success': t[gamesNametatus] == 2}\"\n                    class=\"btn btn-secondary\">Playing</button></td>\n              <td><button (click)=\"onUpdateStatus(t, 1)\"\n                    [ngClass]=\"{'btn-warning': t[gamesNametatus] == 1}\"\n                    class=\"btn btn-secondary\">Not Playing</button></td>\n              <td><button (click)=\"onUpdateStatus(t, 0)\" \n                    [ngClass]=\"{'btn-danger': t[gamesNametatus] == 0}\"\n                    class=\"btn btn-secondary\">Undecided</button></td>\n            </tr>\n      \n          </tbody>\n        </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamesComponent = /** @class */ (function () {
    function GamesComponent(_route, _router, _playerService) {
        this._route = _route;
        this._router = _router;
        this._playerService = _playerService;
        this.gamesNametatus = 'game1status';
        this.gameName = ['game1status', 'game2status', 'game3status'];
    }
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.gamesNametatus = _this.gameName[params['id'] - 1];
            _this.getAll();
        });
    };
    GamesComponent.prototype.getAll = function () {
        var _this = this;
        var obsItem = this._playerService.getAll();
        obsItem.subscribe(function (data) {
            _this.players = data['data'];
        });
    };
    GamesComponent.prototype.onUpdateStatus = function (player, status) {
        var _this = this;
        // Dynamic property in ts or js ???
        // const item = {[this.gamesNametatus] : status};
        var item = {};
        if (this.gamesNametatus === 'game1status') {
            item = { game1status: status };
        }
        else if (this.gamesNametatus === 'game2status') {
            item = { game2status: status };
        }
        else if (this.gamesNametatus === 'game3status') {
            item = { game3status: status };
        }
        var obsItem = this._playerService.update(player._id, item);
        obsItem.subscribe(function (data) {
            console.log(data);
            _this.getAll();
        });
    };
    GamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/player.service.ts":
/*!***********************************!*\
  !*** ./src/app/player.service.ts ***!
  \***********************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerService = /** @class */ (function () {
    function PlayerService(_http) {
        this._http = _http;
        this.baseUrl = '/api/';
    }
    PlayerService.prototype.getAll = function () {
        return this._http.get(this.baseUrl);
    };
    PlayerService.prototype.getOne = function (id) {
        return this._http.get(this.baseUrl + id);
    };
    PlayerService.prototype.addNew = function (newItem) {
        return this._http.post(this.baseUrl, newItem);
    };
    PlayerService.prototype.update = function (id, item) {
        return this._http.put(this.baseUrl + id, item, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    PlayerService.prototype.delete = function (id) {
        return this._http.delete(this.baseUrl + id);
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/players/players.component.css":
/*!***********************************************!*\
  !*** ./src/app/players/players.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/players/players.component.html":
/*!************************************************!*\
  !*** ./src/app/players/players.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <button [routerLink]=\"['list']\" class=\"btn btn-link\">List</button> | \n  <button [routerLink]=\"['add']\" class=\"btn btn-link\">Add Player</button> \n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/players/players.component.ts":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
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

var PlayersComponent = /** @class */ (function () {
    function PlayersComponent() {
    }
    PlayersComponent.prototype.ngOnInit = function () {
    };
    PlayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(/*! ./players.component.html */ "./src/app/players/players.component.html"),
            styles: [__webpack_require__(/*! ./players.component.css */ "./src/app/players/players.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/playersadd/playersadd.component.css":
/*!*****************************************************!*\
  !*** ./src/app/playersadd/playersadd.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/playersadd/playersadd.component.html":
/*!******************************************************!*\
  !*** ./src/app/playersadd/playersadd.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-horizontal\" (submit)=\"onSubmit()\" >\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-3\" for=\"email\">Player name:</label>\n      <div class=\"col-sm-9\">\n\n        <!-- <span [hidden]=\"name.valid\" class=\"text-danger\">*Name must be at least 3 characters in length.</span> -->\n\n        <span [hidden]=\"!errors.name || name.valid\"  class=\"text-danger\">*{{errors.name.message}}</span>\n        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter player name\"\n          required\n          minlength=\"3\"\n          maxlength=\"50\"\n          name=\"name\"\n          [(ngModel)]=\"player.name\"\n          #name=\"ngModel\"\n        />\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-3\" for=\"pwd\">Prefered position:</label>\n      <div class=\"col-sm-9\"> \n        <input type=\"text\" class=\"form-control\" id=\"position\" placeholder=\"Enter position\"\n          name=\"position\"\n          [(ngModel)]=\"player.position\"\n        >\n      </div>\n    </div>\n    <div class=\"form-group\"> \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <!-- <button type=\"submit\" class=\"btn btn-primary\" \n          [ngClass]=\"{'disabled':!name.valid}\"\n        >Add BT3</button> -->\n        <button type=\"submit\" class=\"btn btn-primary\" \n          [disabled]=\"!name.valid\"\n        >Add</button>\n\n        <button type=\"submit\" class=\"btn btn-primary\" \n          \n        > Get Backend Validation Errors</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/playersadd/playersadd.component.ts":
/*!****************************************************!*\
  !*** ./src/app/playersadd/playersadd.component.ts ***!
  \****************************************************/
/*! exports provided: PlayersaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersaddComponent", function() { return PlayersaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersaddComponent = /** @class */ (function () {
    function PlayersaddComponent(_playerService, _router) {
        this._playerService = _playerService;
        this._router = _router;
        this.message = '';
        this.errors = {
            name: ''
        };
    }
    PlayersaddComponent.prototype.ngOnInit = function () {
        this.player = { name: '', position: '' };
    };
    PlayersaddComponent.prototype.onSubmit = function () {
        var _this = this;
        var obsItem = this._playerService.addNew(this.player);
        obsItem.subscribe(function (data) {
            // console.log(data);
            _this.message = data['message'];
            if (data['message'] === 'Success') {
                _this.message = ': ' + _this.player.name + ' was added!';
                _this.player = { name: '', position: '' };
                _this.errors.name = '';
                _this.goHome();
            }
            else {
                console.log(data['error'].errors);
                _this.errors = data['error'].errors;
                // for (const err in data['error'].errors) {
                //   // console.log(err);
                //   if (err) {
                //     this.errors.name = data['error'].errors[err].message;
                //   }
                //   // console.log(err);
                // }
            }
        });
    };
    PlayersaddComponent.prototype.goHome = function () {
        this._router.navigate(['/players/list']);
    };
    PlayersaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-playersadd',
            template: __webpack_require__(/*! ./playersadd.component.html */ "./src/app/playersadd/playersadd.component.html"),
            styles: [__webpack_require__(/*! ./playersadd.component.css */ "./src/app/playersadd/playersadd.component.css")]
        }),
        __metadata("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlayersaddComponent);
    return PlayersaddComponent;
}());



/***/ }),

/***/ "./src/app/playerslist/playerslist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/playerslist/playerslist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/playerslist/playerslist.component.html":
/*!********************************************************!*\
  !*** ./src/app/playerslist/playerslist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table table-hover border\">\n    <thead>\n      <tr>\n        <th>Team Name</th>\n        <th>Prefered Position</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let t of players\">\n        <td>{{t.name}}</td>\n        <td>{{t.position}}</td>\n        <td><button (click)=\"onDelete(t)\" class=\"btn btn-danger\">Delete</button></td>\n      </tr>\n\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/playerslist/playerslist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/playerslist/playerslist.component.ts ***!
  \******************************************************/
/*! exports provided: PlayerslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerslistComponent", function() { return PlayerslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerslistComponent = /** @class */ (function () {
    function PlayerslistComponent(_playerService) {
        this._playerService = _playerService;
    }
    PlayerslistComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    PlayerslistComponent.prototype.getAll = function () {
        var _this = this;
        var obsItem = this._playerService.getAll();
        obsItem.subscribe(function (data) {
            _this.players = data['data'];
        });
    };
    PlayerslistComponent.prototype.onDelete = function (item) {
        var _this = this;
        if (confirm("Are you sure want to delete " + item.name + " ?")) {
            console.log('yes');
            console.log(item);
            var obsItem = this._playerService.delete(item._id);
            obsItem.subscribe(function (data) {
                console.log(data);
                _this.getAll();
            });
        }
        else {
            console.log('no');
        }
    };
    PlayerslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-playerslist',
            template: __webpack_require__(/*! ./playerslist.component.html */ "./src/app/playerslist/playerslist.component.html"),
            styles: [__webpack_require__(/*! ./playerslist.component.css */ "./src/app/playerslist/playerslist.component.css")]
        }),
        __metadata("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]])
    ], PlayerslistComponent);
    return PlayerslistComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /Users/chanthy/Desktop/dj/mean/teammanager/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map