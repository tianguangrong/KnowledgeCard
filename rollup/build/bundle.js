'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util1 = {
    default: 'this is a  object for testing compiler tools'
};

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//被引用的文件只有一个default声明的对象或者函数的话,则引用的时候不用添加{};
console.error(util1.default);

var Test = function () {
    function Test(fn1$$1, fn2$$1) {
        _classCallCheck(this, Test);

        this.f = fn1$$1();
        this.n = fn2$$1();
    }

    _createClass(Test, [{
        key: 'add',
        value: function add() {
            return this.f + this.n;
        }
    }]);

    return Test;
}();

[1, 2, 3, 4].map(function (t) {
    return t + 1;
});

exports.Test = Test;
