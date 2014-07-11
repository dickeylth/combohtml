/**
 * Created by 弘树<tiehang.lth@alibaba-inc.com> on 14-7-8.
 * 处理文件编码，只处理 utf-8 / GBK 两种编码
 */

var isUTF8 = require('is-utf8'),
	iconv = require('iconv-lite');

/**
 * 将文件 buffer 解码
 * @param fileBuffer 文件 Buffer
 * @returns {String} 解码后的字符串
 */
module.exports = function (fileBuffer) {

	var encoding = 'utf8';
	if(!isUTF8(fileBuffer)){
		encoding = 'GBK';
	}

	return iconv.decode(fileBuffer, encoding);
};