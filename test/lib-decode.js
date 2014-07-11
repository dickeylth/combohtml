/**
 * Created by 弘树<tiehang.lth@alibaba-inc.com> on 14-7-8.
 * Test for libs/decode.js
 */
var decode = require('../libs/decode');
var should = require('chai').should();
var fs = require('fs');

describe('Decode Test', function(){

	it('Decode GBK File Test', function () {
		var fileBuffer = fs.readFileSync('test/src/pages/gbk-encoded.html',{encoding: null});
		var decodeResult = decode(fileBuffer);
		(decodeResult.indexOf('测试一下') > 0).should.equal(true);
	});

	it('Decode UTF-8 File Test', function () {
		var fileBuffer = fs.readFileSync('test/src/pages/test.html',{encoding: null});
		var decodeResult = decode(fileBuffer);
		(decodeResult.indexOf('测试一下') > 0).should.equal(true);
	});

});