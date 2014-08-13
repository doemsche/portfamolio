define(function(require, exports, module) {
	var View           = require('famous/core/View');
	var Surface           = require('famous/core/Surface');
	var Lightbox       = require('famous/views/Lightbox');
	var EventHandler = require('famous/core/EventHandler');

	var GridView 		= require('views/GridView');
	var DetailView 		= require('views/DetailView');

	//Data to be replaced by API
	var ProjectData     = require('data/ProjectData');

	function MainView(){
		View.apply(this, arguments);
		this.viewMap = {};
		_eventHandling.call(this);
		_createViews.call(this);
		_createLightBox.call(this);
	}

	MainView.prototype = Object.create(View.prototype);
	MainView.prototype.constructor = MainView;
	MainView.prototype.showDetail = function(project){
		this.viewMap.detail = null;
		this.viewMap.detail = new DetailView(project);
		this.eventHandler.subscribe(this.viewMap.detail.eventHandler );
		this.lightBox.show( this.viewMap.detail );
	}

	function _createViews(){
		var gridView = new GridView({data: ProjectData});
		var detailView = null;
		this.viewMap['grid'] = gridView;
		this.viewMap['detail'] = detailView;
		//subscribe to gridViews EventHandler
		this.eventHandler.subscribe( this.viewMap.grid.eventHandler )
	}

	function _createLightBox(){
		this.lightBox = new Lightbox();
		this.add(this.lightBox);
		this.lightBox.show( this.viewMap.grid );
	}

	function _eventHandling(){
		this.eventHandler = new EventHandler();

		this.eventHandler.on('grid clicked', function(project){
			this.showDetail(project);
		}.bind(this));

		this.eventHandler.on('detail clicked', function(){
			this.lightBox.show(this.viewMap.grid);
		}.bind(this));
	}


	module.exports = MainView;

});