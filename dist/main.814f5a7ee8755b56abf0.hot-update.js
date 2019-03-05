exports.id = "main";
exports.modules = {

/***/ "./src/messages/messages.controller.ts":
/*!*********************************************!*\
  !*** ./src/messages/messages.controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst quotes_service_1 = __webpack_require__(/*! ../services/quotes/quotes.service */ \"./src/services/quotes/quotes.service.ts\");\r\nlet MessagesController = class MessagesController {\r\n    constructor(quotesService) {\r\n        this.quotesService = quotesService;\r\n    }\r\n    getMessages() {\r\n        return this.quotesService.getQuotes();\r\n    }\r\n    getMessage(id) {\r\n        return this.quotesService.getQuote(id);\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get(),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", void 0)\r\n], MessagesController.prototype, \"getMessages\", null);\r\n__decorate([\r\n    common_1.Get(':id'),\r\n    __param(0, common_1.Param('id')),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object]),\r\n    __metadata(\"design:returntype\", void 0)\r\n], MessagesController.prototype, \"getMessage\", null);\r\nMessagesController = __decorate([\r\n    common_1.Controller('messages'),\r\n    __metadata(\"design:paramtypes\", [quotes_service_1.QuotesService])\r\n], MessagesController);\r\nexports.MessagesController = MessagesController;\r\n\n\n//# sourceURL=webpack:///./src/messages/messages.controller.ts?");

/***/ }),

/***/ "./src/services/quotes/quotes.service.ts":
/*!***********************************************!*\
  !*** ./src/services/quotes/quotes.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst operators_1 = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\r\nlet QuotesService = class QuotesService {\r\n    constructor(http) {\r\n        this.http = http;\r\n    }\r\n    getQuotes() {\r\n        return this.http.get('http://quotesondesign.com/wp-json/posts')\r\n            .pipe(operators_1.map(response => response.data));\r\n    }\r\n    getQuote(id) {\r\n        return this.http.get('http://quotesondesign.com/wp-json/posts/' + id)\r\n            .pipe(operators_1.map(response => response.data));\r\n    }\r\n    getRandomQuote() {\r\n        return this.http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')\r\n            .pipe(operators_1.map(response => response.data));\r\n    }\r\n};\r\nQuotesService = __decorate([\r\n    common_1.Injectable(),\r\n    __metadata(\"design:paramtypes\", [common_1.HttpService])\r\n], QuotesService);\r\nexports.QuotesService = QuotesService;\r\n\n\n//# sourceURL=webpack:///./src/services/quotes/quotes.service.ts?");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rxjs/operators\");\n\n//# sourceURL=webpack:///external_%22rxjs/operators%22?");

/***/ })

};