define(function(require, exports, module) {
	var View           = require('famous/core/View');
	var Surface           = require('famous/core/Surface');

	function Footer(){
		View.apply(this, arguments);
		_createFooter.call(this);

	}

	Footer.prototype = Object.create(View.prototype);
  	Footer.prototype.constructor = Footer;

  	function _createFooter(){
  		var s = new Surface({
	        size: [undefined, 50],
	        content: "Footer",
	        classes: ["green-bg"],
	        properties: {
	            lineHeight: "50px",
	            textAlign: "center"
	        }
	    });

	    this.add(s);
  	}

  	module.exports = Footer;
});