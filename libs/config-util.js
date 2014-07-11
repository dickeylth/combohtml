/**
 * Created by 弘树<tiehang.lth@alibaba-inc.com> on 14-7-8.
 * config 工具方法
 */
var _ = require('underscore');

/**
 * 合并默认配置与用户配置，对 assets 配置特殊处理
 * @param defaultCfg
 * @param config
 * @returns {*}
 */
exports.merge = function (defaultCfg, config){
	_.extend(defaultCfg, config);
	var assetsConfig = config.assets;
	if(assetsConfig){
		var assetsKey = _.keys(assetsConfig)[0],
			mergeConfig = {};
		mergeConfig[assetsKey] = _.clone(defaultCfg.assets[assetsKey]);
		defaultCfg.assets = mergeConfig;
		defaultCfg.assets.type = assetsKey;
	}
	return defaultCfg;
};

/**
 * 验证 config 是否合法
 * @param config
 * @returns {boolean}
 */
exports.validate = function (config) {
	if(config){
		var assetsCfg = config.assets;
		if(assetsCfg.combo){
			if(!assetsCfg.combo.relativeUrl){
				throw '[combohtml] combohtml assets combo config MUST define relativeUrl';
			}
		}

		return true;

	} else {
		throw '[combohtml] combohtml config null, please check and fix';
	}

};
