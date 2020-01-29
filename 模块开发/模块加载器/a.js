define(function (require, exports, modules) {
    'use strict';
    var b = require("b");
    console.log(b)
    var Hello = function () {
        console.log("这是a.js")
    }
    exports.Hello = Hello
});