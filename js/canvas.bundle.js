/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/audio.mp3":
/*!***************************!*\
  !*** ./src/img/audio.mp3 ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fdad0cdd95c84c4589ea107b10165d66.mp3");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_audio_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/audio.mp3 */ "./src/img/audio.mp3");







var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 570;
var maxScrolloffset = 16000;
var platformImage;
var platformSmallTallImage;
var player = null;
var platforms = [];
var genericObjects = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  platformImage = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["createImage"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var platformSmallTallImage = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["createImage"])(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  player = new _main__WEBPACK_IMPORTED_MODULE_4__["Player"](canvas); //   platforms = [
  //     new Platform({
  //       x:
  //         platformImage.width * 4 +
  //         300 -
  //         2 +
  //         platformImage.width -
  //         platformSmallTallImage.width,
  //       y: 270,
  //       image: createImage(platformSmallTall),
  //       canvas,
  //     }),
  //     new Platform({ x: -1, y: 470, image: platformImage, canvas }),
  //     new Platform({
  //       x: platformImage.width - 3,
  //       y: 470,
  //       image: platformImage,
  //       canvas,
  //     }),
  //     new Platform({
  //       x: platformImage.width * 2 + 100,
  //       y: 470,
  //       image: platformImage,
  //       canvas,
  //     }),
  //     new Platform({
  //       x: platformImage.width * 3 + 300,
  //       y: 470,
  //       image: platformImage,
  //       canvas,
  //     }),
  //     new Platform({
  //       x: platformImage.width * 4 + 300 - 2,
  //       y: 470,
  //       image: platformImage,
  //       canvas,
  //     }),
  //     new Platform({
  //       x: platformImage.width * 5 + 700 - 2,
  //       y: 470,
  //       image: platformImage,
  //       canvas,
  //     }),
  //   ];

  platforms = [];
  platforms.push(new _main__WEBPACK_IMPORTED_MODULE_4__["Platform"]({
    x: -1,
    y: 470,
    image: platformImage,
    canvas: canvas
  }));
  var o = 0;

  for (var i = 0; i < 30; i++) {
    o += 100;
    platforms.push(new _main__WEBPACK_IMPORTED_MODULE_4__["Platform"]({
      x: 700 + (platformImage.width + 300) * i - 2,
      y: 470 - Math.random() * 100,
      image: platformImage,
      canvas: canvas
    }));
  }

  genericObjects = [new _main__WEBPACK_IMPORTED_MODULE_4__["GenericObject"]({
    x: -1,
    y: -1,
    image: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
    canvas: canvas
  }), new _main__WEBPACK_IMPORTED_MODULE_4__["GenericObject"]({
    x: -1,
    y: -1,
    image: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
    canvas: canvas
  })];
  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed && scrollOffset < maxScrolloffset) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }

  console.log(scrollOffset); // platform collision detection

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // sprite switching

  if (keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } // win condition


  if (scrollOffset > 2000) {
    console.log("You win");
  } // lose condition


  if (player.position.y > canvas.height) {
    init();
  }

  c.rect(10, 10, 100, 10);
  c.stroke();
  c.fillRect(10, 10, scrollOffset / maxScrolloffset * 100, 10);
}

document.querySelector('button').addEventListener('click', function () {
  var div = document.querySelector('div');
  console.log('hi', div);
  div.classList.add('invisible');
  Object(_utils__WEBPACK_IMPORTED_MODULE_5__["playAudio"])(_img_audio_mp3__WEBPACK_IMPORTED_MODULE_6__["default"]);
  init();
});
init();
animate();
addEventListener("keydown", function (_ref) {
  var key = _ref.key;

  // console.log(keyCode)
  switch (key) {
    case 'a':
    case 'ArrowLeft':
      console.log("left");
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case 's':
    case 'ArrowDown':
      console.log("down");
      break;

    case 'd':
    case 'ArrowRight':
      console.log("right");
      keys.right.pressed = true;
      lastKey = "right";
      break;

    case 'w':
    case 'ArrowUp':
      console.log("up");
      if (player.velocity.y == 0) player.velocity.y -= 25;
      break;
  }

  console.log(keys.right.pressed);
});
addEventListener("keyup", function (_ref2) {
  var key = _ref2.key;

  // console.log(keyCode)
  switch (key) {
    case 'a':
    case 'ArrowLeft':
      console.log("left");
      keys.left.pressed = false;
      break;

    case 's':
    case 'ArrowDown':
      console.log("down");
      break;

    case 'd':
    case 'ArrowRight':
      console.log("right");
      keys.right.pressed = false;
      break;

    case 'w':
    case 'ArrowUp':
      console.log("up");
      break;
  }

  console.log(keys.right.pressed);
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: Platform, Player, GenericObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericObject", function() { return GenericObject; });
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var gravity = 1.5;

var Player = /*#__PURE__*/function () {
  function Player(canvas) {
    _classCallCheck(this, Player);

    this.canvas = canvas;
    this.c = canvas.getContext("2d");
    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        left: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        left: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      this.c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0;else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= this.canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

var StationaryObject = /*#__PURE__*/function () {
  function StationaryObject(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image,
        canvas = _ref.canvas;

    _classCallCheck(this, StationaryObject);

    this.position = {
      x: x,
      y: y
    };
    this.c = canvas.getContext("2d");
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(StationaryObject, [{
    key: "draw",
    value: function draw() {
      this.c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return StationaryObject;
}();

var Platform = /*#__PURE__*/function (_StationaryObject) {
  _inherits(Platform, _StationaryObject);

  var _super = _createSuper(Platform);

  function Platform() {
    _classCallCheck(this, Platform);

    return _super.apply(this, arguments);
  }

  return Platform;
}(StationaryObject);

var Star = /*#__PURE__*/function (_StationaryObject2) {
  _inherits(Star, _StationaryObject2);

  var _super2 = _createSuper(Star);

  function Star(_ref2) {
    var _this;

    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image,
        canvas = _ref2.canvas;

    _classCallCheck(this, Star);

    _this = _super2.call(this, {
      x: x,
      y: y,
      image: image,
      canvas: canvas
    });
    _this.visible = true;
    return _this;
  }

  return Star;
}(StationaryObject);

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image,
        canvas = _ref3.canvas;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.c = canvas.getContext("2d");
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      this.c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();



/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function playAudio(src) {
  myAudio = new Audio(src);

  if (typeof myAudio.loop == 'boolean') {
    myAudio.loop = true;
  } else {
    myAudio.addEventListener('ended', function () {
      alert('done');
      this.currentTime = 0;
      this.play();
    }, false);
  }

  myAudio.play();
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  createImage: createImage,
  playAudio: playAudio
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map