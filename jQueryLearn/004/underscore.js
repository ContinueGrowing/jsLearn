(function (root) {
	var optionscache = {};
	var _ = {
		callbacks: function (options) {
			options = typeof options === "string" ? (optionscache[options] || createOptions(options)) : {}
			var list = [];
			var index;//执行的初始化下标值，默认从0开始
			var length;//有多少个处理函数
			var testing, memory, start,starts;
			//cb执行的fire函数
			var fire = function (data) {
				memory = options.memory || data;
				index = starts || 0;
				testing = true;
				length = list.length;
				for (; index < length; index++) {
					if (list[index].apply(data[0], data[1]) === false && options.stopOnFalse) {
						break;
					}
				}
			};
			var self = {
				add: function () {
					var args = Array.prototype.slice.call(arguments);
					start = list.length;
					args.forEach(function (fn) {
						if (toString.call(fn) === "[object Function]") {
							list.push(fn)
						}
					})
					if(memory){
						starts = start;
						fire(memory)
					}
				},
				fireWith: function (context, arguments) {
					var args = [context, arguments];
					if (!options.once || !testing) {
						fire(args)
					}
				},
				fire: function () {
					//this ==> self
					self.fireWith(this, arguments);
				}
			}
			return self;
		}
	}
	function createOptions(options) {
		var object = optionscache[options] = {};
		options.split((/\s+/)).forEach(function (value) {
			object[value] = true;

		});
		return object;
	}
	root._ = _;
})(this)