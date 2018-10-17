'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util1 = {
    default: 'this is a  object for testing compiler tools'
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//被引用的文件只有一个default声明的对象或者函数的话,则引用的时候不用添加{};
console.error(util1.default);

var test = function test(fn1$$1, fn2$$1) {
    _classCallCheck(this, test);

    alert(this.fn1());
    alert(this.fn2());
};

[1, 2, 3, 4].map(function (t) {
    return t + 1;
});

exports.test = test;
