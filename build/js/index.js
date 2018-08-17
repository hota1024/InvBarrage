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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    width: 640,
    height: 480,
    player: {},
    shots: [],
    enemies: [],
    bullets: [],
    score: 0,
    items: [],
    itemsCount: {
        blue: 0,
        red: 0,
        yellow: 0
    },
    explosions: [],
    counter: 0,
    stage: 0,
    stageCleared: false,
    stageClearDelay: 0,
    powerBalls: [],
    bgStars: [],
    showStore: false,
    cheat: function cheat(password) {
        if (password) {
            if (password === 'Enjoy coding.') {
                this.player.hp = 999999;
            }
        } else {
            console.log('cheat (password...)');
        }
    }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    getAngle: function getAngle(x1, y1, x2, y2) {
        return (atan((x1 - x2) / (y1 - y2)) + (y2 < y1) * -180 + 90 + 180) * -1;
    }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Items_BlueItem__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Items_RedItem__ = __webpack_require__(9);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var AbstractEnemy = function () {
    function AbstractEnemy() {
        _classCallCheck(this, AbstractEnemy);

        this.shapes = null;
        this.counter = 0;
    }

    _createClass(AbstractEnemy, [{
        key: "update",
        value: function update() {
            this.counter++;
        }
    }, {
        key: "delete",
        value: function _delete() {
            for (var i = 0; i < this.maxHP; ++i) {
                if (random(0, 5) == 0) {
                    __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].items.push(new __WEBPACK_IMPORTED_MODULE_2__Items_RedItem__["a" /* default */](random(this.shape.x - 15, this.shape.x + 15), random(this.shape.y - 15, this.shape.y + 15)));
                }
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].items.push(new __WEBPACK_IMPORTED_MODULE_1__Items_BlueItem__["a" /* default */](random(this.shape.x - 15, this.shape.x + 15), random(this.shape.y - 15, this.shape.y + 15)));
            }
            this.shape.delete();
        }
    }, {
        key: "onShotTouch",
        value: function onShotTouch(shot) {
            this.hp -= shot.atk;
        }
    }]);

    return AbstractEnemy;
}();

/* harmony default export */ __webpack_exports__["a"] = (AbstractEnemy);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractBullet__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NormalBullet = function (_AbstractBullet) {
    _inherits(NormalBullet, _AbstractBullet);

    function NormalBullet(x, y, angle, speed) {
        var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#E91E63';

        _classCallCheck(this, NormalBullet);

        var _this = _possibleConstructorReturn(this, (NormalBullet.__proto__ || Object.getPrototypeOf(NormalBullet)).call(this));

        _this.shape = new Circle({
            x: x,
            y: y,
            radius: 6,
            color: color
        });

        _this.angle = angle;
        _this.speed = speed;
        return _this;
    }

    _createClass(NormalBullet, [{
        key: 'update',
        value: function update() {
            this.shape.x += cos(this.angle) * this.speed;
            this.shape.y += sin(this.angle) * this.speed;

            if (abs(this.shape.x) > maxX + 6 || abs(this.shape.y) > maxY + 6) {
                return false;
            }

            if (this.shape.touching(__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape)) {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.hp -= 1;
                return false;
            }

            return true;
        }
    }]);

    return NormalBullet;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractBullet__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (NormalBullet);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractItem__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BlueItem = function (_AbstractItem) {
    _inherits(BlueItem, _AbstractItem);

    function BlueItem(x, y) {
        _classCallCheck(this, BlueItem);

        return _possibleConstructorReturn(this, (BlueItem.__proto__ || Object.getPrototypeOf(BlueItem)).call(this, x, y, '#2196F3'));
    }

    _createClass(BlueItem, [{
        key: 'onTouch',
        value: function onTouch() {
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].score += 20;
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].itemsCount.blue++;
        }
    }]);

    return BlueItem;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractItem__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (BlueItem);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractBullet = function () {
    function AbstractBullet() {
        _classCallCheck(this, AbstractBullet);
    }

    _createClass(AbstractBullet, [{
        key: "delete",
        value: function _delete() {
            this.shape.delete();
        }
    }]);

    return AbstractBullet;
}();

/* harmony default export */ __webpack_exports__["a"] = (AbstractBullet);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Explosion = function () {
    function Explosion(x, y, size) {
        _classCallCheck(this, Explosion);

        this.shape = new Circle({
            x: x,
            y: y,
            radius: size,
            color: 'rgba(244,67,54, 0.5)'
        });
        this.counter = 0;
    }

    _createClass(Explosion, [{
        key: 'update',
        value: function update() {
            this.counter++;

            if (this.counter >= 30) {
                return false;
            }

            return true;
        }
    }, {
        key: 'delete',
        value: function _delete() {
            this.shape.delete();
        }
    }]);

    return Explosion;
}();

/* harmony default export */ __webpack_exports__["a"] = (Explosion);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var AbstractItem = function () {
    function AbstractItem(x, y, color) {
        _classCallCheck(this, AbstractItem);

        this.shape = new Rectangle({
            x: x,
            y: y,
            width: 7,
            height: 10,
            color: color
        });
    }

    _createClass(AbstractItem, [{
        key: "update",
        value: function update() {
            if (__WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].player.shape.y > maxY - 200) {
                this.shape.x += (__WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].player.shape.x - this.shape.x) / 10;
                this.shape.y += (__WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].player.shape.y - this.shape.y) / 10;
            } else {
                this.shape.y -= 1;
            }

            if (abs(this.shape.x) > maxX || abs(this.shape.y) > maxY) {
                return false;
            }

            if (this.shape.touching(__WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].player.shape)) {
                this.onTouch();
                return false;
            }

            return true;
        }
    }, {
        key: "delete",
        value: function _delete() {
            this.shape.delete();
        }
    }, {
        key: "onTouch",
        value: function onTouch() {}
    }]);

    return AbstractItem;
}();

/* harmony default export */ __webpack_exports__["a"] = (AbstractItem);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HpBar = function () {
    function HpBar(x, y, width, height, bgColor, barColor) {
        _classCallCheck(this, HpBar);

        this.bg = new Rectangle({
            x: x,
            y: y,
            width: width,
            height: height,
            color: bgColor
        });

        this.bar = new Rectangle({
            x: x,
            y: y,
            width: width,
            height: height,
            color: barColor
        });
    }

    _createClass(HpBar, [{
        key: "set",
        value: function set(hp, maxHP) {
            this.bar.width = hp / maxHP * this.bg.width;
            this.bar.x = (this.bg.width - this.bar.width) / -2 - this.bg.x;
        }
    }, {
        key: "delete",
        value: function _delete() {
            this.bg.delete();
            this.bar.delete();
        }
    }]);

    return HpBar;
}();

/* harmony default export */ __webpack_exports__["a"] = (HpBar);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractItem__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RedItem = function (_AbstractItem) {
    _inherits(RedItem, _AbstractItem);

    function RedItem(x, y) {
        _classCallCheck(this, RedItem);

        return _possibleConstructorReturn(this, (RedItem.__proto__ || Object.getPrototypeOf(RedItem)).call(this, x, y, '#8bc34a'));
    }

    _createClass(RedItem, [{
        key: 'onTouch',
        value: function onTouch() {
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.hp++;
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].itemsCount.red++;
        }
    }]);

    return RedItem;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractItem__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (RedItem);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PowerBall = function () {
    function PowerBall(x, y) {
        _classCallCheck(this, PowerBall);

        var angle = random(0, 360);

        this.colors = ['#f44336', '#8bc34a', '#03a9f4'];

        this.colorIndex = random(0, this.colors.length - 1);

        this.bg = new Circle({
            x: x,
            y: y,
            radius: 16,
            color: 'white'
        });
        this.shape = new Circle({
            x: x,
            y: y,
            radius: 14,
            color: this.colors[this.colorIndex]
        });
        this.velocity = {
            x: cos(angle),
            y: sin(angle)
        };
    }

    _createClass(PowerBall, [{
        key: 'update',
        value: function update() {
            this.shape.color = this.colors[this.colorIndex];

            if (abs(this.shape.x) > maxX) {
                this.velocity.x *= -1;
                this.onBounced();
            }

            if (abs(this.shape.y) > maxY) {
                this.velocity.y *= -1;
                this.onBounced();
            }

            this.shape.x += this.velocity.x * 3;
            this.shape.y += this.velocity.y * 3;

            this.bg.x = this.shape.x;
            this.bg.y = this.shape.y;

            if (this.shape.touching(Game.player.shape)) {
                if (this.colorIndex === 0) {
                    Game.player.level++;
                }
                if (this.colorIndex === 1) {
                    Game.player.hp += 10;
                }
                return false;
            }

            return true;
        }
    }, {
        key: 'onBounced',
        value: function onBounced() {
            this.colorIndex++;
            this.colorIndex %= this.colors.length;
        }
    }, {
        key: 'delete',
        value: function _delete() {
            this.shape.delete();
            this.bg.delete();
        }
    }]);

    return PowerBall;
}();

/* harmony default export */ __webpack_exports__["a"] = (PowerBall);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    Action: 'action',
    Delay: 'delay',
    Wait: 'wait'
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Player__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Enemy_NormalEnemy__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Enemy_TriEnemy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enemy_PolyEnemy__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BackgroundStar__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PowerBall__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Enemy_EndlessNormalEnemy__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Enemy_EndlessTriEnemy__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Enemy_EndlessPolyEnemy__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Enemy_MegaPoloEnemy__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Explosion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Enemy_MegaTeraEnemy__ = __webpack_require__(26);















window.Game = __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */];

fullScreen = false;
setBackdropSize(640, 480);

new Rectangle({
    x: 0,
    y: 0,
    width: __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].width,
    height: __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].height
});

var player = new __WEBPACK_IMPORTED_MODULE_0__Player__["a" /* default */]();
__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player = player;

var gameOverText = new Text({
    text: function text() {
        return 'GameOver!';
    },
    size: 32,
    color: 'white',
    textAlign: 'center',
    x: 0,
    y: 64
});

gameOverText.hide();

var gameClearText = new Text({
    text: function text() {
        return 'GameClear!';
    },
    size: 32,
    color: 'white',
    textAlign: 'center',
    x: 0,
    y: 64
});

gameClearText.hide();

var scoreText = new Text({
    text: function text() {
        return '';
    },
    size: 32,
    color: 'yellow',
    x: minX,
    y: maxY - 24,
    textAlign: "left"
});
var progressText = new Text({
    text: function text() {
        return '';
    },
    size: 18,
    color: 'yellow',
    x: minX,
    y: maxY - 48,
    textAlign: "left"
});

//Debug
__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].stage = 0;
// Game.enemies.push(new MegaTeraEnemy(0, maxY + 100))

forever(function () {
    scoreText.text = 'Score:' + __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].score;
    progressText.text = Math.floor(__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter / 3500 * 100) + '%';
    scoreText.sendToFront();
    progressText.sendToFront();

    if (player.hp < 1) {
        player.hpBar.set(player.hp, player.maxHP);
        gameOverText.sendToFront();
        gameOverText.show();
        return;
    }

    player.update();

    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].shots.forEach(function (shot) {
        if (shot.update() === false) {
            shot.delete();
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].shots.remove(shot);
        }
    });
    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.forEach(function (bullet) {
        if (bullet.update() === false) {
            bullet.delete();
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.remove(bullet);
        }
    });
    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.forEach(function (enemy) {
        if (enemy.update() === false) {
            enemy.delete();
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.remove(enemy);
        }
    });
    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].items.forEach(function (item) {
        if (item.update() === false) {
            item.delete();
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].items.remove(item);
        }
    });
    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bgStars.forEach(function (star) {
        if (star.update() === false) {
            star.delete();
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bgStars.remove(star);
        }
    });
    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].explosions.forEach(function (explosion) {
        if (explosion.update() === false) {
            explosion.delete();
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].explosions.remove(explosion);
        }
    });
    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].powerBalls.forEach(function (powerBall) {
        if (powerBall.update() === false) {
            powerBall.delete();
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].powerBalls.remove(powerBall);
        }
    });

    if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].stage === 0) {
        if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter < 3000) {
            if (random(0, 50) === 0) {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.push(new __WEBPACK_IMPORTED_MODULE_2__Enemy_NormalEnemy__["a" /* default */](randomX(), maxY));
            }
            if (random(0, 100) === 0) {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.push(new __WEBPACK_IMPORTED_MODULE_3__Enemy_TriEnemy__["a" /* default */](randomX(), maxY));
            }
            if (random(0, 150) === 0) {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.push(new __WEBPACK_IMPORTED_MODULE_4__Enemy_PolyEnemy__["a" /* default */](randomX(), maxY));
            }
        }

        if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter === 1500) {
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].powerBalls.push(new __WEBPACK_IMPORTED_MODULE_7__PowerBall__["a" /* default */](randomX(), randomY()));
        }

        if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter === 3250) {
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].powerBalls.push(new __WEBPACK_IMPORTED_MODULE_7__PowerBall__["a" /* default */](randomX(), randomY()));
        }

        if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter > 3500 && __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter <= 3501) {
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.push(new __WEBPACK_IMPORTED_MODULE_11__Enemy_MegaPoloEnemy__["a" /* default */](0, maxY + 100));
        }

        if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter > 3501 && __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.length === 0) {
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].stageCleared = true;
        }

        if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].stageCleared) {
            if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].stageClearDelay > 60 * 10) {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter = 0;
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].stage++;
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].stageCleared = false;
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].stageClearDelay = false;
            } else {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].stageClearDelay++;
            }
        }
    }
    if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].stage === 1) {
        if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter < 3000) {
            if (random(0, 45) === 0) {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.push(new __WEBPACK_IMPORTED_MODULE_8__Enemy_EndlessNormalEnemy__["a" /* default */](randomX(), maxY));
            }
            if (random(0, 95) === 0) {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.push(new __WEBPACK_IMPORTED_MODULE_9__Enemy_EndlessTriEnemy__["a" /* default */](randomX(), maxY));
            }
            if (random(0, 145) === 0) {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.push(new __WEBPACK_IMPORTED_MODULE_10__Enemy_EndlessPolyEnemy__["a" /* default */](randomX(), maxY));
            }
        }

        if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter === 3150) {
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].powerBalls.push(new __WEBPACK_IMPORTED_MODULE_7__PowerBall__["a" /* default */](randomX(), randomY()));
        }

        if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter > 3360 && __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter <= 3361) {
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.push(new __WEBPACK_IMPORTED_MODULE_13__Enemy_MegaTeraEnemy__["a" /* default */](0, maxY + 100));
        }

        if (__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter > 3365 && __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].enemies.length === 0) {
            gameClearText.show();
            gameClearText.sendToFront();
        }
    }

    if (random(0, 1) === 0) {
        __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bgStars.push(new __WEBPACK_IMPORTED_MODULE_6__BackgroundStar__["a" /* default */](randomX(), maxY, randomColor(), random(1, 4)));
    }

    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].counter++;
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shot__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HpBar__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Player = function () {
    function Player() {
        _classCallCheck(this, Player);

        this.shape = new Circle({
            radius: 4,
            x: 0,
            y: __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].height / -2 + 48,
            color: 'red'
        });
        this.display = new Circle({
            radius: 16,
            x: 0,
            y: __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].height / -2 + 48,
            color: 'white'
        });
        this.waitShotCount = 5;
        this.shotCount = this.waitShotCount;
        this.canShot = true;
        this.maxHP = 10;
        this.hp = this.maxHP;
        this.hpBar = new __WEBPACK_IMPORTED_MODULE_2__HpBar__["a" /* default */](0, minY + 16, 400, 10, '#f44336', '#2196F3');

        this.level = 0;
    }

    _createClass(Player, [{
        key: "move",
        value: function move() {
            // Declear
            var velocity = {
                x: 0,
                y: 0
            };
            var speed = 5;

            // Low speed
            if (keysDown.includes('SHIFT')) {
                speed = 1;
                this.shape.sendToFront();
            } else {
                this.shape.sendToBack();
            }

            // Input
            if (keysDown.includes('LEFT')) velocity.x -= 1;
            if (keysDown.includes('RIGHT')) velocity.x += 1;
            if (keysDown.includes('UP')) velocity.y += 1;
            if (keysDown.includes('DOWN')) velocity.y -= 1;

            // Adjustment
            if (Math.abs(velocity.x) > 0 && Math.abs(velocity.y) > 0) {
                velocity.x /= Math.sqrt(2);
                velocity.y /= Math.sqrt(2);
            }

            // Move
            this.shape.x += velocity.x * speed;
            this.shape.y += velocity.y * speed;

            // Clamp
            if (this.shape.x < minX) {
                this.shape.x = minX;
            }
            if (this.shape.x > maxX) {
                this.shape.x = maxX;
            }
            if (this.shape.y < minY) {
                this.shape.y = minY;
            }
            if (this.shape.y > maxY) {
                this.shape.y = maxY;
            }

            // Move display
            this.display.x = this.shape.x;
            this.display.y = this.shape.y;
        }
    }, {
        key: "update",
        value: function update() {
            this.move();
            if (this.hp > this.maxHP) this.maxHP = this.hp;
            this.hpBar.set(this.hp, this.maxHP);

            if (this.canShot === false) {
                this.shotCount++;
                if (this.shotCount === this.waitShotCount) {
                    this.shotCount = 0;
                    this.canShot = true;
                }
            }

            if (keysDown.includes('Z') && this.canShot) {
                this.shot();
                this.canShot = false;
                this.shotCount = 0;
            }
        }
    }, {
        key: "shot",
        value: function shot() {
            if (this.level === 0) {
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x, this.shape.y, 90, 20));
                return;
            }

            if (this.level === 1) {
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x + 5, this.shape.y, 90, 20));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x - 5, this.shape.y, 90, 20));
                return;
            }

            if (this.level === 2) {
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x + 5, this.shape.y, 90, 20));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x - 5, this.shape.y, 90, 20));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x, this.shape.y, -90, 10));
                return;
            }

            if (this.level === 3) {
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x + 5, this.shape.y, 90, 20));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x - 5, this.shape.y, 90, 20));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x + 5, this.shape.y, -90, 15));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x - 5, this.shape.y, -90, 15));
                return;
            }

            if (this.level >= 4) {
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x + 5, this.shape.y, 90, 20));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x - 5, this.shape.y, 90, 20));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x + 10, this.shape.y - 10, 90, 20));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x - 10, this.shape.y - 10, 90, 20));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x + 5, this.shape.y, -90, 15));
                __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].shots.push(new __WEBPACK_IMPORTED_MODULE_1__Shot__["a" /* default */](this.shape.x - 5, this.shape.y, -90, 15));
                return;
            }
        }
    }]);

    return Player;
}();

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Explosion__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Shot = function () {
    function Shot(x, y, angle, speed) {
        var atk = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

        _classCallCheck(this, Shot);

        this.shape = new Rectangle({
            x: x,
            y: y,
            width: 8,
            height: 20,
            color: '#2196F3'
        });
        this.angle = angle;
        this.speed = speed;
        this.atk = atk;
    }

    _createClass(Shot, [{
        key: 'update',
        value: function update() {
            var _this = this;

            var shot = this;
            var isDelete = false;

            this.shape.x += cos(this.angle) * this.speed;
            this.shape.y += sin(this.angle) * this.speed;

            if (abs(this.shape.x) > maxX + 64 || abs(this.shape.y) > maxY + 64) {
                return false;
            }

            __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].enemies.forEach(function (enemy) {
                if (enemy.shapes) {
                    enemy.shapes.forEach(function (shape) {
                        if (shot.shape.touching(shape)) {
                            enemy.onShotTouch(_this);
                            isDelete = true;
                        }
                    });
                } else {
                    if (shot.shape.touching(enemy.shape)) {
                        enemy.onShotTouch(_this);
                        isDelete = true;
                    }
                }
            });

            if (isDelete) {
                return false;
            }

            return true;
        }
    }, {
        key: 'delete',
        value: function _delete() {
            __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */].explosions.push(new __WEBPACK_IMPORTED_MODULE_1__Explosion__["a" /* default */](this.shape.x + random(-10, 10), this.shape.y + random(-10, 10), 8));
            this.shape.delete();
        }
    }]);

    return Shot;
}();

/* harmony default export */ __webpack_exports__["a"] = (Shot);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Bullet_NormalBullet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Items_BlueItem__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var NormalEnemy = function (_AbstractEnemy) {
    _inherits(NormalEnemy, _AbstractEnemy);

    function NormalEnemy(x, y) {
        _classCallCheck(this, NormalEnemy);

        var _this = _possibleConstructorReturn(this, (NormalEnemy.__proto__ || Object.getPrototypeOf(NormalEnemy)).call(this));

        _this.shape = new Rectangle({
            x: x,
            y: y,
            width: 32,
            height: 32,
            color: '#f44336'
        });
        _this.maxHP = 1;
        _this.hp = _this.maxHP;
        return _this;
    }

    _createClass(NormalEnemy, [{
        key: 'update',
        value: function update() {
            _get(NormalEnemy.prototype.__proto__ || Object.getPrototypeOf(NormalEnemy.prototype), 'update', this).call(this);

            this.shape.y -= 1;

            if (abs(this.shape.x) > maxX + 32 || abs(this.shape.y) > maxY + 32) {
                return false;
            }

            if (this.hp <= 0) {
                return false;
            }

            if (this.counter % 60 == 0) {
                var angle = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.shape.x, this.shape.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);

                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_2__Bullet_NormalBullet__["a" /* default */](this.shape.x, this.shape.y, angle, 2, '#f44336'));
            }

            return true;
        }
    }]);

    return NormalEnemy;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (NormalEnemy);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Bullet_NormalBullet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Items_BlueItem__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TriEnemy = function (_AbstractEnemy) {
    _inherits(TriEnemy, _AbstractEnemy);

    function TriEnemy(x, y) {
        _classCallCheck(this, TriEnemy);

        var _this = _possibleConstructorReturn(this, (TriEnemy.__proto__ || Object.getPrototypeOf(TriEnemy)).call(this));

        _this.shape = new Polygon({
            x: x,
            y: y,
            sides: 3,
            length: 16,
            angle: 270,
            color: '#9c27b0'
        });
        _this.maxHP = 2;
        _this.hp = _this.maxHP;
        return _this;
    }

    _createClass(TriEnemy, [{
        key: 'update',
        value: function update() {
            _get(TriEnemy.prototype.__proto__ || Object.getPrototypeOf(TriEnemy.prototype), 'update', this).call(this);

            this.shape.y -= 3;

            if (abs(this.shape.x) > maxX + 32 || abs(this.shape.y) > maxY + 32) {
                return false;
            }

            if (this.hp <= 0) {
                return false;
            }

            if (this.counter % 30 == 0) {
                var angle = __WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* default */].getAngle(this.shape.x, this.shape.y, __WEBPACK_IMPORTED_MODULE_2__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_2__Game__["a" /* default */].player.shape.y);

                __WEBPACK_IMPORTED_MODULE_2__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_3__Bullet_NormalBullet__["a" /* default */](this.shape.x, this.shape.y, angle, 5, '#9c27b0'));
            }

            return true;
        }
    }]);

    return TriEnemy;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (TriEnemy);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Bullet_NormalBullet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Items_BlueItem__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var PolyEnemy = function (_AbstractEnemy) {
    _inherits(PolyEnemy, _AbstractEnemy);

    function PolyEnemy(x, y) {
        _classCallCheck(this, PolyEnemy);

        var _this = _possibleConstructorReturn(this, (PolyEnemy.__proto__ || Object.getPrototypeOf(PolyEnemy)).call(this));

        _this.shape = new Polygon({
            x: x,
            y: y,
            sides: 5,
            length: 18,
            angle: 270,
            color: '#ff9800'
        });
        _this.maxHP = 4;
        _this.hp = _this.maxHP;
        return _this;
    }

    _createClass(PolyEnemy, [{
        key: 'update',
        value: function update() {
            _get(PolyEnemy.prototype.__proto__ || Object.getPrototypeOf(PolyEnemy.prototype), 'update', this).call(this);

            this.shape.y -= 2;

            if (abs(this.shape.x) > maxX + 32 || abs(this.shape.y) > maxY + 32) {
                return false;
            }

            if (this.hp <= 0) {
                return false;
            }

            if (this.counter % 120 == 0) {
                var angle = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.shape.x, this.shape.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);

                for (var i = 0; i < 16; i++) {
                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_2__Bullet_NormalBullet__["a" /* default */](this.shape.x, this.shape.y, angle, 2, '#ff9800'));
                    angle += 360 / 16;
                }
            }

            return true;
        }
    }]);

    return PolyEnemy;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (PolyEnemy);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackgroundStar = function () {
    function BackgroundStar(x, y, color, size) {
        _classCallCheck(this, BackgroundStar);

        this.shape = new Rectangle({
            x: x,
            y: y,
            color: color,
            width: size / 2,
            height: size
            // radius: size
        });
        this.size = size;
        // this.shape.sendToBack()
    }

    _createClass(BackgroundStar, [{
        key: "update",
        value: function update() {
            this.shape.y -= this.size * 2;

            if (abs(this.shape.x) > maxX + this.size || abs(this.shape.y) > maxY + this.size) {
                return false;
            }

            return true;
        }
    }, {
        key: "delete",
        value: function _delete() {
            this.shape.delete();
        }
    }]);

    return BackgroundStar;
}();

/* harmony default export */ __webpack_exports__["a"] = (BackgroundStar);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bullet_NormalBullet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AbstractEnemy__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var EndlessNormalEnemy = function (_AbstractEnemy) {
    _inherits(EndlessNormalEnemy, _AbstractEnemy);

    function EndlessNormalEnemy(x, y) {
        _classCallCheck(this, EndlessNormalEnemy);

        var _this = _possibleConstructorReturn(this, (EndlessNormalEnemy.__proto__ || Object.getPrototypeOf(EndlessNormalEnemy)).call(this));

        _this.bg = new Rectangle({
            x: x,
            y: y,
            width: 32,
            height: 32,
            color: '#ffeb3b'
        });

        _this.shape = new Rectangle({
            x: x,
            y: y,
            width: 30,
            height: 30,
            color: '#b71c1c'
        });

        _this.maxHP = 4;
        _this.hp = _this.maxHP;
        return _this;
    }

    _createClass(EndlessNormalEnemy, [{
        key: "update",
        value: function update() {
            _get(EndlessNormalEnemy.prototype.__proto__ || Object.getPrototypeOf(EndlessNormalEnemy.prototype), "update", this).call(this);

            this.shape.y -= 1;

            if (abs(this.shape.x) > maxX + 32 || abs(this.shape.y) > maxY + 32) {
                return false;
            }

            if (this.hp <= 0) {
                return false;
            }

            if (this.counter % 30 == 0) {
                var angle = __WEBPACK_IMPORTED_MODULE_0__Utils__["a" /* default */].getAngle(this.shape.x, this.shape.y, Game.player.shape.x, Game.player.shape.y);

                Game.bullets.push(new __WEBPACK_IMPORTED_MODULE_1__Bullet_NormalBullet__["a" /* default */](this.shape.x, this.shape.y, angle, 4, '#f44336'));
            }

            this.bg.x = this.shape.x;
            this.bg.y = this.shape.y;

            return true;
        }
    }, {
        key: "delete",
        value: function _delete() {
            _get(EndlessNormalEnemy.prototype.__proto__ || Object.getPrototypeOf(EndlessNormalEnemy.prototype), "delete", this).call(this);
            this.bg.delete();
        }
    }]);

    return EndlessNormalEnemy;
}(__WEBPACK_IMPORTED_MODULE_2__AbstractEnemy__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (EndlessNormalEnemy);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bullet_NormalBullet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AbstractEnemy__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var EndlessTriEnemy = function (_AbstractEnemy) {
    _inherits(EndlessTriEnemy, _AbstractEnemy);

    function EndlessTriEnemy(x, y) {
        _classCallCheck(this, EndlessTriEnemy);

        var _this = _possibleConstructorReturn(this, (EndlessTriEnemy.__proto__ || Object.getPrototypeOf(EndlessTriEnemy)).call(this));

        _this.bg = new Polygon({
            x: x,
            y: y,
            sides: 3,
            length: 16,
            angle: 270,
            color: '#ffeb3b'
        });

        _this.shape = new Polygon({
            x: x,
            y: y,
            sides: 3,
            length: 14,
            angle: 270,
            color: '#4527a0'
        });

        _this.maxHP = 8;
        _this.hp = _this.maxHP;
        return _this;
    }

    _createClass(EndlessTriEnemy, [{
        key: "update",
        value: function update() {
            _get(EndlessTriEnemy.prototype.__proto__ || Object.getPrototypeOf(EndlessTriEnemy.prototype), "update", this).call(this);

            this.shape.y -= 1;

            if (abs(this.shape.x) > maxX + 32 || abs(this.shape.y) > maxY + 32) {
                return false;
            }

            if (this.hp <= 0) {
                return false;
            }

            if (this.counter % 70 == 0) {
                var angle = __WEBPACK_IMPORTED_MODULE_0__Utils__["a" /* default */].getAngle(this.shape.x, this.shape.y, Game.player.shape.x, Game.player.shape.y);

                Game.bullets.push(new __WEBPACK_IMPORTED_MODULE_1__Bullet_NormalBullet__["a" /* default */](this.shape.x, this.shape.y, angle - 10, 3, '#f44336'));
                Game.bullets.push(new __WEBPACK_IMPORTED_MODULE_1__Bullet_NormalBullet__["a" /* default */](this.shape.x, this.shape.y, angle, 3, '#f44336'));
                Game.bullets.push(new __WEBPACK_IMPORTED_MODULE_1__Bullet_NormalBullet__["a" /* default */](this.shape.x, this.shape.y, angle + 10, 3, '#f44336'));
            }

            this.bg.x = this.shape.x;
            this.bg.y = this.shape.y;

            return true;
        }
    }, {
        key: "delete",
        value: function _delete() {
            _get(EndlessTriEnemy.prototype.__proto__ || Object.getPrototypeOf(EndlessTriEnemy.prototype), "delete", this).call(this);
            this.bg.delete();
        }
    }]);

    return EndlessTriEnemy;
}(__WEBPACK_IMPORTED_MODULE_2__AbstractEnemy__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (EndlessTriEnemy);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Bullet_NormalBullet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Items_BlueItem__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var EndlessPolyEnemy = function (_AbstractEnemy) {
    _inherits(EndlessPolyEnemy, _AbstractEnemy);

    function EndlessPolyEnemy(x, y) {
        _classCallCheck(this, EndlessPolyEnemy);

        var _this = _possibleConstructorReturn(this, (EndlessPolyEnemy.__proto__ || Object.getPrototypeOf(EndlessPolyEnemy)).call(this));

        _this.bg = new Polygon({
            x: x,
            y: y,
            sides: 5,
            length: 18,
            angle: 270,
            color: '#ffeb3b'
        });
        _this.shape = new Polygon({
            x: x,
            y: y,
            sides: 5,
            length: 16,
            angle: 270,
            color: '#ef6c00'
        });
        _this.maxHP = 16;
        _this.hp = _this.maxHP;
        return _this;
    }

    _createClass(EndlessPolyEnemy, [{
        key: 'update',
        value: function update() {
            _get(EndlessPolyEnemy.prototype.__proto__ || Object.getPrototypeOf(EndlessPolyEnemy.prototype), 'update', this).call(this);

            this.shape.y -= 2;

            if (abs(this.shape.x) > maxX + 32 || abs(this.shape.y) > maxY + 32) {
                return false;
            }

            if (this.hp <= 0) {
                return false;
            }

            if (this.counter % 120 == 0) {
                var angle = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.shape.x, this.shape.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);

                for (var i = 0; i < 32; i++) {
                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_2__Bullet_NormalBullet__["a" /* default */](this.shape.x, this.shape.y, angle, 2, '#ff9800'));
                    angle += 360 / 32;
                }
            }

            this.bg.x = this.shape.x;
            this.bg.y = this.shape.y;

            return true;
        }
    }, {
        key: 'delete',
        value: function _delete() {
            _get(EndlessPolyEnemy.prototype.__proto__ || Object.getPrototypeOf(EndlessPolyEnemy.prototype), 'delete', this).call(this);
            this.bg.delete();
            this.shape.delete();
        }
    }]);

    return EndlessPolyEnemy;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (EndlessPolyEnemy);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Bullet_MegaBullet__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Bullet_NormalBullet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Explosion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Items_BlueItem__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Items_RedItem__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Items_YellowItem__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PowerBall__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var MegaPoloEnemy = function (_AbstractEnemy) {
    _inherits(MegaPoloEnemy, _AbstractEnemy);

    function MegaPoloEnemy(x, y) {
        _classCallCheck(this, MegaPoloEnemy);

        var _this = _possibleConstructorReturn(this, (MegaPoloEnemy.__proto__ || Object.getPrototypeOf(MegaPoloEnemy)).call(this));

        _this.center = new Polygon({
            x: x,
            y: y,
            sides: 3,
            length: 100,
            angle: 270,
            color: '#ff9800'
        });
        _this.right = new Polygon({
            x: x + 100,
            y: y + 50,
            sides: 3,
            length: 100,
            angle: 270,
            color: "#ef6c00"
        });

        _this.left = new Polygon({
            x: x - 100,
            y: y + 50,
            sides: 3,
            length: 100,
            angle: 270,
            color: "#ef6c00"
        });

        _this.hpBarBg = new Rectangle({
            x: 0,
            y: maxY - 20,
            height: 10,
            width: 300,
            color: '#f44336'
        });

        _this.hpBar = new Rectangle({
            x: 0,
            y: maxY - 20,
            height: 10,
            width: 300,
            color: '#ff9800'
        });

        _this.shapes = [_this.center, _this.right, _this.left];

        _this.x = x;
        _this.y = y;

        _this.rightMargin = { x: 100, y: 50 };
        _this.leftMargin = { x: -100, y: 50 };

        _this.isDesotry = false;
        _this.isFinishDesotry = false;
        _this.finishCounter = 0;

        _this.maxHP = 1000;
        _this.hp = 0;
        return _this;
    }

    _createClass(MegaPoloEnemy, [{
        key: "update",
        value: function update() {
            if (this.isDesotry) {
                this.destoryUpdate();
            } else {
                _get(MegaPoloEnemy.prototype.__proto__ || Object.getPrototypeOf(MegaPoloEnemy.prototype), "update", this).call(this);
                this.rutineUpdate();
            }

            if (this.isFinishDesotry) {
                return false;
            }

            return true;
        }
    }, {
        key: "rutineUpdate",
        value: function rutineUpdate() {
            if (this.counter <= 120) {
                this.hp = this.counter / 120 * this.maxHP;
                this.y -= 2;
            }

            this.shot();

            this.center.x = this.x;
            this.center.y = this.y;
            this.right.x = this.x + this.rightMargin.x;
            this.right.y = this.y + this.rightMargin.y;
            this.left.x = this.x + this.leftMargin.x;
            this.left.y = this.y + this.leftMargin.y;

            this.hpBarBg.sendToFront();
            this.hpBar.sendToFront();
            this.hpBar.width = this.hp / this.maxHP * this.hpBarBg.width;
            this.hpBar.x = (this.hpBarBg.width - this.hpBar.width) / -2;

            if (this.counter > 120 && this.hp < 1) {
                this.isDesotry = true;
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.forEach(function (bullet) {
                    bullet.delete();
                });
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets = [];
            }
        }
    }, {
        key: "destoryUpdate",
        value: function destoryUpdate() {
            if (this.finishCounter <= 120) {
                this.finishCounter++;

                if (this.finishCounter % 10 === 0) {
                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].explosions.push(new __WEBPACK_IMPORTED_MODULE_5__Explosion__["a" /* default */](this.center.x, this.center.y, random(10, 100)));
                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].explosions.push(new __WEBPACK_IMPORTED_MODULE_5__Explosion__["a" /* default */](this.right.x, this.right.y, random(10, 100)));
                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].explosions.push(new __WEBPACK_IMPORTED_MODULE_5__Explosion__["a" /* default */](this.left.x, this.left.y, random(10, 100)));
                }

                if (this.finishCounter === 120) {
                    this.isFinishDesotry = true;
                }
            }
        }
    }, {
        key: "onShotTouch",
        value: function onShotTouch() {
            if (this.counter <= 120) {
                return;
            }
            this.hp--;
        }
    }, {
        key: "shot",
        value: function shot() {
            if (this.counter >= 120 && this.counter <= 400) {
                if (this.counter % 50 === 0) {
                    var rightAngle = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.right.x, this.right.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);
                    var leftAngle = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.left.x, this.left.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);

                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_2__Bullet_MegaBullet__["a" /* default */](this.right.x, this.right.y, rightAngle, 2, '#9c27b0'));
                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_2__Bullet_MegaBullet__["a" /* default */](this.left.x, this.left.y, leftAngle, 2, '#9c27b0'));
                }
            }

            if (this.counter >= 600 && this.counter <= 800) {
                if (this.counter % 50 === 0) {
                    var angle = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.center.x, this.center.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);

                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_2__Bullet_MegaBullet__["a" /* default */](this.center.x, this.center.y, angle, 7, '#E91E63'));
                }
                this.y--;
            }

            if (this.counter >= 900 && this.counter <= 1100) {
                if (this.counter % 50 === 0) {
                    var _rightAngle = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.right.x, this.right.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);
                    var _leftAngle = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.left.x, this.left.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);

                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_2__Bullet_MegaBullet__["a" /* default */](this.right.x, this.right.y, _rightAngle, 2, '#9c27b0'));
                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_2__Bullet_MegaBullet__["a" /* default */](this.left.x, this.left.y, _leftAngle, 2, '#9c27b0'));
                }
                this.y++;
            }

            if (this.counter >= 1200 && this.counter <= 1300) {
                if (this.counter % 50 === 0) {
                    var _angle = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.center.x, this.center.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);

                    for (var i = 0; i < 32; ++i) {
                        __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_NormalBullet__["a" /* default */](this.center.x, this.center.y, _angle, 2, '#cddc39'));
                        _angle += 360 / 32;
                    }
                }
                this.x++;
            }

            if (this.counter >= 1300 && this.counter <= 1500) {
                if (this.counter % 50 === 0) {
                    var _angle2 = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.center.x, this.center.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);

                    for (var i = 0; i < 32; ++i) {
                        __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_NormalBullet__["a" /* default */](this.center.x, this.center.y, _angle2, 2, '#cddc39'));
                        _angle2 += 360 / 32;
                    }
                }
                this.x--;
            }

            if (this.counter >= 1500 && this.counter <= 1600) {
                if (this.counter % 50 === 0) {
                    var _angle3 = __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* default */].getAngle(this.center.x, this.center.y, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape.y);

                    for (var i = 0; i < 32; ++i) {
                        __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_NormalBullet__["a" /* default */](this.center.x, this.center.y, _angle3, 2, '#cddc39'));
                        _angle3 += 360 / 32;
                    }
                }
                this.x++;
            }

            if (this.counter >= 1650 && this.counter <= 1800) {
                this.rightMargin.x++;
                this.rightMargin.y--;
                this.leftMargin.x--;
                this.leftMargin.y--;
            }

            if (this.counter >= 1900 && this.counter <= 2500) {
                this.center.angle = random(0, 360);
                this.left.angle = random(0, 360);
                this.right.angle = random(0, 360);

                if (this.counter % 3 === 0) {
                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_NormalBullet__["a" /* default */](this.center.x, this.center.y, this.center.angle, 2, '#cddc39'));
                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_NormalBullet__["a" /* default */](this.right.x, this.right.y, this.right.angle, 2, '#cddc39'));
                    __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_NormalBullet__["a" /* default */](this.left.x, this.left.y, this.left.angle, 2, '#cddc39'));
                }
            }

            if (this.counter >= 2500 && this.counter <= 2501) {
                this.center.angle = 270;
                this.left.angle = 270;
                this.right.angle = 270;
            }

            if (this.counter >= 2501 && this.counter <= 2501 + 150) {
                this.rightMargin.x--;
                this.rightMargin.y++;
                this.leftMargin.x++;
                this.leftMargin.y++;
            }

            if (this.counter > 2501 + 150) {
                this.counter = 120;
            }
        }
    }, {
        key: "delete",
        value: function _delete() {
            this.hpBar.delete();
            this.hpBarBg.delete();
            this.shapes.forEach(function (shape) {
                return shape.delete();
            });

            var ItemRange = 100;

            for (var i = 0; i < 50; ++i) {
                var pos = [];
                pos = [random(this.x - ItemRange, this.x + ItemRange), random(this.y - ItemRange, this.y + ItemRange)];
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].items.push(new (Function.prototype.bind.apply(__WEBPACK_IMPORTED_MODULE_6__Items_BlueItem__["a" /* default */], [null].concat(_toConsumableArray(pos))))());

                pos = [random(this.x - ItemRange, this.x + ItemRange), random(this.y - ItemRange, this.y + ItemRange)];
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].items.push(new (Function.prototype.bind.apply(__WEBPACK_IMPORTED_MODULE_7__Items_RedItem__["a" /* default */], [null].concat(_toConsumableArray(pos))))());

                pos = [random(this.x - ItemRange, this.x + ItemRange), random(this.y - ItemRange, this.y + ItemRange)];
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].items.push(new (Function.prototype.bind.apply(__WEBPACK_IMPORTED_MODULE_8__Items_YellowItem__["a" /* default */], [null].concat(_toConsumableArray(pos))))());
            }

            for (var i = 0; i < 3; ++i) {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].powerBalls.push(new __WEBPACK_IMPORTED_MODULE_9__PowerBall__["a" /* default */](this.x, this.y));
            }
        }
    }]);

    return MegaPoloEnemy;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MegaPoloEnemy);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractBullet__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MegaBullet = function (_AbstractBullet) {
    _inherits(MegaBullet, _AbstractBullet);

    function MegaBullet(x, y, angle, speed) {
        var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#E91E63';

        _classCallCheck(this, MegaBullet);

        var _this = _possibleConstructorReturn(this, (MegaBullet.__proto__ || Object.getPrototypeOf(MegaBullet)).call(this));

        _this.shape = new Circle({
            x: x,
            y: y,
            radius: 16,
            color: color
        });

        _this.angle = angle;
        _this.speed = speed;
        return _this;
    }

    _createClass(MegaBullet, [{
        key: 'update',
        value: function update() {
            this.shape.x += cos(this.angle) * this.speed;
            this.shape.y += sin(this.angle) * this.speed;

            if (abs(this.shape.x) > maxX + 16 || abs(this.shape.y) > maxY + 16) {
                return false;
            }

            if (this.shape.touching(__WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.shape)) {
                __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].player.hp -= 1;
                return false;
            }

            return true;
        }
    }]);

    return MegaBullet;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractBullet__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MegaBullet);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractItem__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var YellowItem = function (_AbstractItem) {
    _inherits(YellowItem, _AbstractItem);

    function YellowItem(x, y) {
        _classCallCheck(this, YellowItem);

        return _possibleConstructorReturn(this, (YellowItem.__proto__ || Object.getPrototypeOf(YellowItem)).call(this, x, y, '#ffeb3b'));
    }

    _createClass(YellowItem, [{
        key: 'onTouch',
        value: function onTouch() {
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].score += 10;
            __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */].itemsCount.yellow++;
        }
    }]);

    return YellowItem;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractItem__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (YellowItem);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Behavior_BehaviorManager__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HpBar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Bullet_AccelBullet__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Bullet_NormalBullet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Bullet_ConditionBullet__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Explosion__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var MegaTeraEnemy = function (_AbstractEnemy) {
    _inherits(MegaTeraEnemy, _AbstractEnemy);

    function MegaTeraEnemy(x, y) {
        _classCallCheck(this, MegaTeraEnemy);

        var _this = _possibleConstructorReturn(this, (MegaTeraEnemy.__proto__ || Object.getPrototypeOf(MegaTeraEnemy)).call(this));

        window.boss = _this;

        _this.shape0 = new Polygon({
            sides: 7,
            length: 100,
            angle: 270,
            color: '#009688'
        });
        _this.shape1 = new Polygon({
            sides: 7,
            length: 100,
            angle: 270,
            color: '#009688'
        });

        _this.hpbar = new __WEBPACK_IMPORTED_MODULE_2__HpBar__["a" /* default */](0, maxY - 16, 400, 10, '#f44336', '#009688');

        _this.x = x;
        _this.y = y;

        _this.shapes = [_this.shape0, _this.shape1];
        _this.behavior = new __WEBPACK_IMPORTED_MODULE_1__Behavior_BehaviorManager__["a" /* default */]();
        _this.initBehaviors();

        _this.maxHP = 1700;
        _this.hp = 0;

        _this.bulletCondition = false;
        return _this;
    }

    _createClass(MegaTeraEnemy, [{
        key: "initBehaviors",
        value: function initBehaviors() {
            var enemy = this;
            this.behavior.build(function (builder) {
                builder.action(function (behavior) {
                    return enemy.stageIn();
                });
                builder.delay(30);
                enemy.setBattleBehaviors(builder);
            });
        }
    }, {
        key: "setBattleBehaviors",
        value: function setBattleBehaviors(builder) {
            var _this2 = this;

            var enemy = this;

            builder.action(function (behavior) {
                return enemy.rotate();
            }).every();
            builder.action(function (behavior) {
                return enemy.pattern0(behavior);
            });
            builder.delay(120);
            builder.action(function (behavior) {
                return enemy.pattern1(behavior);
            });
            builder.delay(120);
            builder.wait(function (behavior) {
                return __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.length === 0;
            });
            builder.action(function (behavior) {
                return enemy.pattern2(behavior);
            });
            builder.wait(function (behavior) {
                return __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.length === 0;
            });
            builder.loop(2, function (behavior) {
                builder.action(function (behavior) {
                    return enemy.moveRightWithFire(behavior);
                });
                builder.action(function (behavior) {
                    return enemy.pattern3(behavior);
                });
                builder.action(function (behavior) {
                    return enemy.moveLeftWithFire(behavior);
                });
                builder.action(function (behavior) {
                    return enemy.pattern3(behavior);
                });
                builder.action(function (behavior) {
                    return enemy.moveBase(behavior);
                });
                builder.delay(30);
                builder.action(function (behavior) {
                    return enemy.bulletCondition = true;
                }).once();
                builder.delay(1);
                builder.action(function (behavior) {
                    return enemy.bulletCondition = false;
                }).once();
                builder.wait(function (behavior) {
                    return __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.length <= 4;
                });
            });
            builder.action(function (behavior) {
                enemy.behavior = new __WEBPACK_IMPORTED_MODULE_1__Behavior_BehaviorManager__["a" /* default */]();
                enemy.behavior.build(function (builder) {
                    _this2.setBattleBehaviors(builder);
                });
                return true;
            });
        }
    }, {
        key: "stageIn",
        value: function stageIn() {
            this.y--;
            this.hp = 100 / this.y * this.maxHP;

            return this.y <= 100;
        }
    }, {
        key: "pattern0",
        value: function pattern0(_ref) {
            var counter = _ref.counter;

            if (counter % 2 === 0) {
                __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_AccelBullet__["a" /* default */](randomX(), maxY, -90, 0, 0.05, '#80cbc4'));
            }

            return counter >= 60 * 5;
        }
    }, {
        key: "pattern1",
        value: function pattern1(_ref2) {
            var counter = _ref2.counter;

            if (counter % 20 === 0) {
                var angle = 0;
                angle = __WEBPACK_IMPORTED_MODULE_5__Utils__["a" /* default */].getAngle(this.x - 50, this.y, __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].player.shape.y);
                __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_AccelBullet__["a" /* default */](this.x - 50, this.y, angle, -4, 0.1, '#80cbc4'));
                angle = __WEBPACK_IMPORTED_MODULE_5__Utils__["a" /* default */].getAngle(this.x + 50, this.y, __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].player.shape.y);
                __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_AccelBullet__["a" /* default */](this.x + 50, this.y, angle, -4, 0.1, '#80cbc4'));
                angle = __WEBPACK_IMPORTED_MODULE_5__Utils__["a" /* default */].getAngle(this.x, this.y - 50, __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].player.shape.y);
                __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_AccelBullet__["a" /* default */](this.x, this.y - 50, angle, -4, 0.1, '#80cbc4'));
                angle = __WEBPACK_IMPORTED_MODULE_5__Utils__["a" /* default */].getAngle(this.x, this.y + 50, __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].player.shape.x, __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].player.shape.y);
                __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_4__Bullet_AccelBullet__["a" /* default */](this.x, this.y + 50, angle, -4, 0.1, '#80cbc4'));
            }

            return counter >= 60 * 5;
        }
    }, {
        key: "pattern2",
        value: function pattern2(_ref3) {
            var counter = _ref3.counter;

            if (counter % 20 === 0) {
                var angle0 = -90 + counter;
                var angle1 = -90 - counter;
                for (var i = 0; i < 18; ++i) {
                    var angle = i / 18 * 360;
                    __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_6__Bullet_NormalBullet__["a" /* default */](this.x + cos(angle0) * 50, this.y + sin(angle0) * 50, angle, 2, '#3f51b5'));
                }
                for (var i = 0; i < 18; ++i) {
                    var _angle = i / 18 * 360;
                    __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_6__Bullet_NormalBullet__["a" /* default */](this.x + cos(angle1) * 50, this.y + sin(angle1) * 50, _angle, 2, '#00bcd4'));
                }
            }

            return counter >= 60 * 5;
        }
    }, {
        key: "pattern3",
        value: function pattern3() {
            var enemy = this;

            for (var i = 0; i < 60; ++i) {
                __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.push(new __WEBPACK_IMPORTED_MODULE_7__Bullet_ConditionBullet__["a" /* default */](this.x, this.y, random(0, 360), 4, '#f44336', function () {
                    return enemy.bulletCondition;
                }));
            }

            return true;
        }
    }, {
        key: "moveRightWithFire",
        value: function moveRightWithFire() {
            this.x += (200 - this.x) / 10;
            return 200 - this.x < 1;
        }
    }, {
        key: "moveLeftWithFire",
        value: function moveLeftWithFire() {
            this.x += (-200 - this.x) / 10;
            return 200 - abs(this.x) < 1;
        }
    }, {
        key: "moveBase",
        value: function moveBase() {
            this.x += (0 - this.x) / 10;
            this.y += (100 - this.y) / 10;

            return 0 - this.x < 1 && 100 - this.y < 1;
        }
    }, {
        key: "rotate",
        value: function rotate() {
            this.shape0.angle = this.counter;
            this.shape1.angle = -this.counter;
        }
    }, {
        key: "update",
        value: function update() {
            if (this.isDesotry) {
                this.destoryUpdate();
            } else {
                this.hpbar.set(this.hp, this.maxHP);

                this.behavior.update();

                var enemy = this;
                this.shapes.forEach(function (shape) {
                    shape.x = enemy.x;
                    shape.y = enemy.y;
                });

                this.isDesotry = false;
                this.isFinishDesotry = false;
                this.finishCounter = 0;
            }

            if (this.hp <= 0) {
                this.isDesotry = true;
                __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets.forEach(function (bullet) {
                    bullet.delete();
                });
                __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].bullets = [];
            }

            if (this.isFinishDesotry) {
                return false;
            }
        }
    }, {
        key: "destoryUpdate",
        value: function destoryUpdate() {
            if (this.finishCounter <= 120) {
                this.finishCounter++;

                if (this.finishCounter % 10 === 0) {
                    __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].explosions.push(new __WEBPACK_IMPORTED_MODULE_8__Explosion__["a" /* default */](this.x + random(-50, 50), this.y + random(-50, 50), random(10, 100)));
                }

                if (this.finishCounter === 120) {
                    this.isFinishDesotry = true;
                }
            }
        }
    }, {
        key: "delete",
        value: function _delete() {
            this.hpbar.delete();
            this.shapes.forEach(function (shape) {
                return shape.delete();
            });

            __WEBPACK_IMPORTED_MODULE_3__Game__["a" /* default */].score += 1000;

            var ItemRange = 100;
        }
    }]);

    return MegaTeraEnemy;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractEnemy__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MegaTeraEnemy);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BehaviorBuilder__ = __webpack_require__(28);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BehaviorManager = function () {
    function BehaviorManager() {
        _classCallCheck(this, BehaviorManager);

        this.behaviors = [];
        this.everyBehaviors = [];
        this.index = 0;
        window.bm = this;
    }

    _createClass(BehaviorManager, [{
        key: "update",
        value: function update() {
            this.everyBehaviors.forEach(function (behavior) {
                return behavior.execute();
            });

            var behavior = this.behaviors[this.index];

            if (!behavior) {
                return;
            }

            if (behavior.isEvery) {
                this.everyBehaviors.push(behavior);
                this.index++;
            } else if (behavior.execute() === true) {
                console.log('Executed');
                this.index++;
            }
        }
    }, {
        key: "build",
        value: function build(f) {
            f(new __WEBPACK_IMPORTED_MODULE_0__BehaviorBuilder__["a" /* default */](this));
        }
    }]);

    return BehaviorManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (BehaviorManager);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Behavior__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BehaviorType__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var BehaviorBuilder = function () {
    function BehaviorBuilder(manager) {
        _classCallCheck(this, BehaviorBuilder);

        this.manager = manager;
    }

    _createClass(BehaviorBuilder, [{
        key: "add",
        value: function add(type, data) {
            var behavior = new __WEBPACK_IMPORTED_MODULE_0__Behavior__["a" /* default */](this.manager.behaviors.length, type, data);
            this.manager.behaviors.push(behavior);
            return behavior;
        }
    }, {
        key: "action",
        value: function action(_action) {
            return this.add(__WEBPACK_IMPORTED_MODULE_1__BehaviorType__["a" /* default */].Action, {
                action: _action
            });
        }
    }, {
        key: "delay",
        value: function delay(time) {
            return this.add(__WEBPACK_IMPORTED_MODULE_1__BehaviorType__["a" /* default */].Delay, {
                time: time
            });
        }
    }, {
        key: "wait",
        value: function wait(condition) {
            return this.add(__WEBPACK_IMPORTED_MODULE_1__BehaviorType__["a" /* default */].Wait, {
                condition: condition
            });
        }
    }, {
        key: "loop",
        value: function loop(number, register) {
            for (var i = 0; i < number; ++i) {
                register(this);
            }
        }
    }]);

    return BehaviorBuilder;
}();

/* harmony default export */ __webpack_exports__["a"] = (BehaviorBuilder);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BehaviorType__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Behavior = function () {
    function Behavior(index, type, data) {
        _classCallCheck(this, Behavior);

        this.index = 0;
        this.type = type;
        this.data = data;
        this.counter = 0;

        this.isEvery = false;
        this.isOnce = false;
    }

    _createClass(Behavior, [{
        key: "execute",
        value: function execute() {
            var result = this.executeUnit();

            this.counter++;

            return this.isOnce || result;
        }
    }, {
        key: "executeUnit",
        value: function executeUnit() {
            if (this.type === __WEBPACK_IMPORTED_MODULE_0__BehaviorType__["a" /* default */].Action) {
                return this.data.action(this);
            }
            if (this.type === __WEBPACK_IMPORTED_MODULE_0__BehaviorType__["a" /* default */].Delay) {
                return this.data.time <= this.counter;
            }
            if (this.type === __WEBPACK_IMPORTED_MODULE_0__BehaviorType__["a" /* default */].Wait) {
                return this.data.condition(this);
            }
        }
    }, {
        key: "every",
        value: function every() {
            var ss = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.isEvery = true;
            ss = this;
            return this;
        }
    }, {
        key: "once",
        value: function once() {
            this.isOnce = true;
        }
    }]);

    return Behavior;
}();

/* harmony default export */ __webpack_exports__["a"] = (Behavior);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractBullet__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AccelBullet = function (_AbstractBullet) {
    _inherits(AccelBullet, _AbstractBullet);

    function AccelBullet(x, y, angle, speed, accel) {
        var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#E91E63';

        _classCallCheck(this, AccelBullet);

        var _this = _possibleConstructorReturn(this, (AccelBullet.__proto__ || Object.getPrototypeOf(AccelBullet)).call(this));

        _this.shape = new Circle({
            x: x,
            y: y,
            radius: 6,
            color: color
        });

        _this.angle = angle;
        _this.speed = speed;
        _this.accel = accel;
        return _this;
    }

    _createClass(AccelBullet, [{
        key: "update",
        value: function update() {
            this.shape.x += cos(this.angle) * this.speed;
            this.shape.y += sin(this.angle) * this.speed;

            if (abs(this.shape.x) > maxX + 6 || abs(this.shape.y) > maxY + 6) {
                return false;
            }

            if (this.shape.touching(Game.player.shape)) {
                Game.player.hp -= 1;
                return false;
            }

            this.speed += this.accel;

            return true;
        }
    }]);

    return AccelBullet;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractBullet__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (AccelBullet);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractBullet__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ConditionBullet = function (_AbstractBullet) {
    _inherits(ConditionBullet, _AbstractBullet);

    function ConditionBullet(x, y, angle, speed) {
        var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
        var condition = arguments[5];

        _classCallCheck(this, ConditionBullet);

        var _this = _possibleConstructorReturn(this, (ConditionBullet.__proto__ || Object.getPrototypeOf(ConditionBullet)).call(this));

        _this.shape = new Circle({
            x: x,
            y: y,
            radius: 8,
            color: color
        });

        _this.angle = angle;
        _this.speed = speed;
        _this.condition = condition;
        _this.started = false;
        return _this;
    }

    _createClass(ConditionBullet, [{
        key: "update",
        value: function update() {
            if (this.started === false && this.condition() === false) {
                return true;
            }

            if (this.condition()) {
                this.started = true;
            }

            this.shape.x += cos(this.angle) * this.speed;
            this.shape.y += sin(this.angle) * this.speed;

            if (abs(this.shape.x) > maxX + 16 || abs(this.shape.y) > maxY + 16) {
                return false;
            }

            if (this.shape.touching(Game.player.shape)) {
                Game.player.hp -= 1;
                return false;
            }

            return true;
        }
    }, {
        key: "delete",
        value: function _delete() {
            this.shape.delete();
        }
    }]);

    return ConditionBullet;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractBullet__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ConditionBullet);

/***/ })
/******/ ]);