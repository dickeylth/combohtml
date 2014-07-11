/**
 * Created by 弘树<tiehang.lth@alibaba-inc.com> on 14-7-8.
 * 入口
 */
var cheerio = require('cheerio'),
	_ = require('underscore'),
	configUtil = require('./libs/config-util'),
	assets = require('./libs/assets'),
	decodeFile = require('./libs/decode');

function ComboHTML(fileBuffer, config) {

	var defaultCfg = {

		// 指定 js/css 资源处理方式
		assets: {

			// url combo 方式
			combo : {
				relativeUrl: null,      // url combo 的 base 路径（e.g. http://g.tbcdn.cn/trip/h5-flight/0.1.0/）
				preserveAbsolutePath: true,     // 对绝对路径的资源，是否不要处理
				excludeAssets: [],              // 不需要处理的资源路径
				compressExt: '-min'             // 资源通过 uglify/cssmin 等压缩后生成的压缩版文件的后缀名
			},

			// 嵌入行内的方式
			inline: {
				excludeAssets: [],              // 不需要处理的资源路径
				compressAssets: true            // 是否打到行内前进行压缩
			}
		},

		meta: null,                             // 需要给页面加的 meta 标签

		compressHTML: true,                     // 是否压缩 HTML

		convert2vm: false,                      // 是否将 juicer 语法转 vm
		convert2php: false                      // 是否将 juicer 语法转 php

	};

	// mix config，校验 config
	config = configUtil.merge(defaultCfg, config);
	if (configUtil.validate(config)) {

		// 编码转换，只处理 UTF-8、GBK 两种编码
		var fileContent = decodeFile(fileBuffer);

		// 解析 DOM
		var $ = cheerio.load(fileContent, {
			normalizeWhitespace: true,
			decodeEntities: false
		});

		// 处理 assets：js/css，combo or inline?
		var scriptNodes = $('script[src]'),
			styleNodes = $('link[href]'),
			type = config.assets.type;

		if (type) {
			assets.proc(type, config.assets[type], scriptNodes, styleNodes);
		}


		// 处理 meta

		// juicer 转 vm/php

		// 处理 ssi：递归处理 assets

		// html 压缩
	}

}

module.exports = ComboHTML;