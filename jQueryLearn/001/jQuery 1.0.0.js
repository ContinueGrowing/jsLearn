(
    function (root) {
        var jQuery = function () {
            return new jQuery.prototype.init()
        }
        jQuery.fn = jQuery.prototype = {
            init: function () {

            },
            css: function () {

            }
        }

        jQuery.fn.extend = jQuery.extend = function () {
            var target = arguments[0] || {};
            var length = arguments.length;
            var i = 1;
            var option, name, copy, src, copyisArray, clone;
            var deep = false;
            if (typeof target === "boolean") {
                deep = target
                target = arguments[1];
                i = 2;
            }
            if (typeof target !== "object") {
                target = {}
            }
            if (length == i) {    //$.extend({})或$.fn.extend({})
                // console.log(this)
                target = this;  //this指向jQuery
                i--;    //0
            }
            //浅拷贝
            for (; i < length; i++) {
                if ((option = arguments[i]) != null) {
                    for (name in option) {
                        copy = option[name];
                        src = target[name];
                        if (deep && (jQuery.isPlainObject(copy) || (copyisArray = jQuery.isArray(copy)))) {
                            if (copyisArray) {
                                copyisArray = false;
                                clone = jQuery.isArray(src) ? src : [];
                            }else{
                                clone = jQuery.isPlainObject(src) ? src : {};
                            }
                            target[name] = jQuery.extend(true,clone,copy)
                        } else if (copy != undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }

            return target;
        }

        /**
         * new init 和 new jQuery一样，因为他们共享原型
         */
        jQuery.prototype.init.prototype = jQuery.prototype;
        // jQuery.fn.init.prototype = jQuery.fn;

        jQuery.extend({
            // 类型检测
            isPlainObject: function (obj) {
                return toString.call(obj) === "[object Object]";
            },
            isArray: function (obj) {
                return toString.call(obj) === "[object Array]";
            },
        })
        // console.log(jQuery.prototype)

        root.$ = root.jQuery = jQuery;
    }
)(this)