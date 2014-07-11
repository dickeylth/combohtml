/**
 * Created by 弘树<tiehang.lth@alibaba-inc.com> on 14-7-8.
 * 处理页面资源通用逻辑
 */
var pathUtil = require('./path-util'),
	_ = require('underscore');

function isJS(node){
}

function inlineAssets(scriptNodes, styleNodes, config){

}

function comboAssets(scriptNodes, styleNodes, config){
	var relativeUrl = config.relativeUrl,
		preserveAbsolutePath = config.preserveAbsolutePath,
		excludeAssets = config.excludeAssets,
		compressExt = config.compressExt;

	_.each(scriptNodes, function(scriptNode){

	});
	if(pathUtil.isAbsoluteUrl()){

	}
}

function procAssets(type, config, scriptNodes, styleNodes){
	if(type == 'combo'){
		comboAssets.apply(this, arguments);
	} else if(type == 'inline'){
		inlineAssets.apply(this, arguments);
	}
}

exports.proc = procAssets;