define(function(require, exports, module) {

	var View           = require('famous/core/View');
	var Surface           = require('famous/core/Surface');
	var Modifier      = require('famous/core/Modifier');
	var Transform = require("famous/core/Transform");
	var EventHandler = require('famous/core/EventHandler');
	var Scrollview = require("famous/views/Scrollview");

	function GridView(data){
		this.projects = data.data.projects;
		View.apply(this, arguments);
		_eventHandling.call(this);
		_createScrollView.call(this);
	}

	GridView.prototype = Object.create(View.prototype);
	GridView.prototype.constructor = GridView;

	function _createScrollView(){
		var self = this;
		var scrollview = new Scrollview();
		var surfaces = [];
		var projectsLength = this.projects.length;
		var projectImagePath = 'content/images/'
		scrollview.sequenceFrom(surfaces);

		var scrollviewMod = new Modifier({
			align: [0.25,0],
			origin: [0.5,0]
		});

		for(var i = 0, project, thumbnail; i < projectsLength; i++){
			project = new Surface({
				size: [400,250],
				classes: ['p-thumb'],
				content: '<img src="'+projectImagePath + (i+1) +'.png" />',
				properties: {
					projectId: this.projects[i].id,
					backgroundColor: '#CCC'
				}
			});

			project.on('click', function(){
				var project = self.projects[this.properties.projectId];
				self.eventHandler.emit('grid clicked', project);
			});

			project.pipe(scrollview);
			surfaces.push(project);
		}
		
		this.add(scrollviewMod).add(scrollview);
	}

	function _eventHandling(){
		this.eventHandler = new EventHandler();
	}


	module.exports = GridView;

});