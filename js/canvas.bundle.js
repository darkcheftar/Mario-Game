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

/***/ "./src/img/star.png":
/*!**************************!*\
  !*** ./src/img/star.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f4265e3ed7a18aab9c1282e5a4852384.png");

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
/* harmony import */ var _img_audio_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/audio.mp3 */ "./src/img/audio.mp3");
/* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/star.png */ "./src/img/star.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main */ "./src/js/main.js");








console.log(_img_audio_mp3__WEBPACK_IMPORTED_MODULE_4__["default"]);
var myAudio = new Audio(_img_audio_mp3__WEBPACK_IMPORTED_MODULE_4__["default"]);

if (typeof myAudio.loop == 'boolean') {
  myAudio.loop = true;
} else {
  myAudio.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}

['keydown', 'click'].forEach(function (e) {
  document.addEventListener(e, function () {
    myAudio.play();
  });
});
console.log(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 570;
var platformImage = null;
var platformSmallTallImage = null;
var starImage = null;
var player = null;
var platforms = [];
var genericObjects = [];
var stars = [];
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
  starImage = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_img_star_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
  platformImage = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  platformSmallTallImage = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  stars = [new _main__WEBPACK_IMPORTED_MODULE_7__["Star"](c, canvas, 50, 350, starImage), new _main__WEBPACK_IMPORTED_MODULE_7__["Star"](c, canvas, 150, 350, starImage), new _main__WEBPACK_IMPORTED_MODULE_7__["Star"](c, canvas, 250, 350, starImage), new _main__WEBPACK_IMPORTED_MODULE_7__["Star"](c, canvas, 350, 350, starImage)];
  player = new _main__WEBPACK_IMPORTED_MODULE_7__["Player"](c, canvas);
  platforms = [new _main__WEBPACK_IMPORTED_MODULE_7__["Platform"]({
    x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
    c: c
  }), new _main__WEBPACK_IMPORTED_MODULE_7__["Platform"]({
    x: -1,
    y: 470,
    image: platformImage,
    c: c
  }), new _main__WEBPACK_IMPORTED_MODULE_7__["Platform"]({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage,
    c: c
  }), new _main__WEBPACK_IMPORTED_MODULE_7__["Platform"]({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage,
    c: c
  }), new _main__WEBPACK_IMPORTED_MODULE_7__["Platform"]({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage,
    c: c
  }), new _main__WEBPACK_IMPORTED_MODULE_7__["Platform"]({
    x: platformImage.width * 4 + 300 - 2,
    y: 470,
    image: platformImage,
    c: c
  }), new _main__WEBPACK_IMPORTED_MODULE_7__["Platform"]({
    x: platformImage.width * 5 + 700 - 2,
    y: 470,
    image: platformImage,
    c: c
  })];
  genericObjects = [new _main__WEBPACK_IMPORTED_MODULE_7__["GenericObject"]({
    x: -1,
    y: -1,
    image: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
    c: c
  }), new _main__WEBPACK_IMPORTED_MODULE_7__["GenericObject"]({
    x: -1,
    y: -1,
    image: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
    c: c
  })];
  scrollOffset = 0;
}

function animate() {
  console.log(platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width);
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  stars.forEach(function (star) {
    if (star.visible) {
      star.draw();
    }
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

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      stars.forEach(function (star) {
        star.position.x -= player.speed;
      });
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      stars.forEach(function (star) {
        star.position.x += player.speed;
      });
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  } //star collisoin detection


  stars.forEach(function (star) {
    if (star.visible && player.position.y + player.height <= star.position.y && player.position.y + player.height + player.velocity.y >= star.position.y && player.position.x + player.width >= star.position.x && player.position.x <= star.position.x + star.width) {
      star.visible = false;
      player.score += 1;
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["laserate"])(220);
    }
  }); // platform collision detection

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

  c.fillText("score: ".concat(player.score), 10, 50);
}

init();
animate();
addEventListener("keydown", function (_ref) {
  var keyCode = _ref.keyCode;

  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case 83:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = true;
      lastKey = "right";
      break;

    case 87:
      console.log("up");
      if (player.velocity.y == 0) player.velocity.y -= 30;
      break;
  }

  console.log(keys.right.pressed);
});
addEventListener("keyup", function (_ref2) {
  var keyCode = _ref2.keyCode;

  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;

    case 83:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;

    case 87:
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
/*! exports provided: Platform, Player, GenericObject, Star */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericObject", function() { return GenericObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Star", function() { return Star; });
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var gravity = 1.5;

var Star = /*#__PURE__*/function () {
  function Star(c, canvas, x, y, img) {
    _classCallCheck(this, Star);

    this.c = c;
    this.canvas = canvas;
    this.visible = true;
    this.position = {
      x: x,
      y: y
    };
    this.height = img.height;
    this.width = img.width;
    this.img = img;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      this.c.drawImage(this.img, 0, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Star;
}();

var Player = /*#__PURE__*/function () {
  function Player(c, canvas) {
    _classCallCheck(this, Player);

    this.canvas = canvas;
    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.c = c;
    this.width = 66;
    this.height = 150;
    this.score = 0;
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

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image,
        c = _ref.c;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.c = c;
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      this.c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image,
        c = _ref2.c;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    console.log(c);
    this.c = c;
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

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var audioContext = new AudioContext();

function laserate(a) {
  // create an oscillator node
  var osc = audioContext.createOscillator(); // set type - can be sine, square, sawtooth, triangle

  osc.type = "triangle"; // set frequency

  osc.frequency.value = a ? 192 * 5 : 5 * 150; // up frequency over a second

  osc.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 1); // create gain node

  var gain = audioContext.createGain(); // gain by default is 1 - drop it to near mute after about a second

  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3); // start oscillator

  osc.start(); // stop it after a second

  osc.stop(audioContext.currentTime + 1); // connect our graph

  osc.connect(gain).connect(audioContext.destination);
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  createImage: createImage,
  laserate: laserate
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map