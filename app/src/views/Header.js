define(function(require, exports, module) {
	var View           = require('famous/core/View');
	var Surface           = require('famous/core/Surface');
	var RenderNode     = require('famous/core/RenderNode');

	function Header(){
		View.apply(this, arguments);
		_createNav.call(this);

	}

	Header.prototype = Object.create(View.prototype);
  	Header.prototype.constructor = Header;

  	function _createNav(){
  		var s = new Surface({
	        size: [undefined, 100],
	        content: "Header",
	        classes: ["green-bg"],
	        properties: {
	            lineHeight: "100px",
	            textAlign: "center"
	        }
	    });

	    this.add(s);
  	}


  	module.exports = Header;

});