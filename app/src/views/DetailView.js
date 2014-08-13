define(function(require, exports, module) {
	var View           = require('famous/core/View');
	var Surface           = require('famous/core/Surface');
	var EventHandler = require('famous/core/EventHandler');

	function DetailView(options){
		this.options = options;
		View.apply(this, arguments);
		_setEventHandling.call(this);
		_createView.call(this);
	}

	DetailView.prototype = Object.create(View.prototype);
	DetailView.prototype.constructor = DetailView;

	function _createView(){
		var s = new Surface({
	        size: [undefined, undefined],
	        content: this.options.name,
	        classes: ["pattern-bg"],
	        properties: {
	            lineHeight: "100px",
	            textAlign: "center",
	            cursor: "pointer"
	        }
	    });

	    s.on('click', function(){
			console.log('click reg in Grid View');
			this.eventHandler.emit('detail clicked');
		}.bind(this));

	    this.add(s);
	}

	function _setEventHandling(){
		this.eventHandler = new EventHandler();
	}


	module.exports = DetailView;

});