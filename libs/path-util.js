/**
 * Created by 弘树<tiehang.lth@alibaba-inc.com> on 14-7-8.
 * 处理路径的工具方法
 */

var path = require('path');

exports.isAbsoluteUrl = function (urlStr) {
	"use strict";
	return !!urlStr.match(/(http\:)?\/\//);
};

exports.calcRelativePathFromCurrentDir = function (basePath, relativePath) {
	"use strict";
	return path.relative(__dirname, path.join(path.dirname(basePath), relativePath));
};