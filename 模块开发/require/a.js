define([
    'b',
], function(b) {
    'use strict';
    console.log(b)
    var Hello =function(){
        console.log("这是a.js")
    }
    return {    //接口对象
        Hello : Hello
    }
});