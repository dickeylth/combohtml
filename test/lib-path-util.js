/**
 * Created by 弘树<tiehang.lth@alibaba-inc.com> on 14-7-8.
 * Test for  libs/path-util.js
 */
var should = require('chai').should();
var pathUtil = require('../libs/path-util');

describe('PathUtil Test', function(){

	describe('isAbsolutePath Test', function(){
		it('http://g.tbcdn.cn/mpi/tracker/0.2.0/index-min.js should be absoulte path', function () {
			pathUtil.isAbsoluteUrl('http://g.tbcdn.cn/mpi/tracker/0.2.0/index-min.js').should.equal(true);
		});
		it('test.html should be relative path', function () {
			pathUtil.isAbsoluteUrl('test.html').should.equal(false);
		});
	});

	describe('calcRelativePathFromCurrentDir Test', function(){
		it('src/mods/abc.html + ../abc.js -> ../src/abc.js', function () {
			pathUtil.calcRelativePathFromCurrentDir('src/mods/abc.html', '../abc.js').should.equal('../src/abc.js');
		});
	});

});