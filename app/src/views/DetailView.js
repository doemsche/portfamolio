define(function(require, exports, module) {
	var View           = require('famous/core/View');
	var Surface           = require('famous/core/Surface');
	var RenderNode           = require('famous/core/RenderNode');
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
		var project = this.options;
		var words = [];

		var node = new RenderNode();

		for(var i in project ){
			words.push(project[i]);
		}
		var htmlwords = words.splice(1).splice(0,5);

		for(var j = 0; j < htmlwords.length; j++){
			var tmp = new Surface({
				size: [undefined, 100],
				content: htmlwords[j],
				classes: ["pattern-bg"],
				properties: { 
					lineHeight: "100px",
					textAlign: "center",
					cursor: "pointer"
				}
			});
			tmp.on('click', function(){
				this.eventHandler.emit('detail clicked');
			}.bind(this));
			
			node.add(tmp);
		}



	   
	    this.add(node);
	}

	function _setEventHandling(){
		this.eventHandler = new EventHandler();
	}


	module.exports = DetailView;

});