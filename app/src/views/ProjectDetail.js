/* this view is for creater contact info */
define(function(require, exports, module) {
  var View          = require('famous/core/View');
  var Surface       = require('famous/core/Surface');
  var Modifier      = require('famous/core/Modifier');
  var Transform     = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');
  var GridLayout    = require("famous/views/GridLayout");
  var ImageSurface = require("famous/surfaces/ImageSurface");

  function ProjectDetail(data) {

    View.apply(this, arguments);
    this.data = data;
    this.projectId = this.data.project.id;
    _createDetailView.call(this);
    _createBackLink.call(this);
    //_createGithubLink.call(this);
    // _createMenu.call(this);
  }

  ProjectDetail.prototype = Object.create(View.prototype);
  ProjectDetail.prototype.constructor = ProjectDetail;

  ProjectDetail.DEFAULT_OPTIONS = {
    imgWidth: 316,
    imgHeight: 201,
    fontFamily: 'AvenirNextLTW02-Regular, sans-serif'
    // bioProps: {
    //   backgroundColor: 'white',
    //   color: "#404040",
    //   lineHeight: '50px',
    //   textAlign: 'center',
    //   fontFamily: 'HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif'
    // }
  };

  //   function _createGithubLink () {
  //   var banner = new Surface({
  //     size: [window.innerWidth * 0.05, window.innerHeight * 0.05],
  //       content: '<a href="https://github.com/Famospace/Famo.us-Monospace">' +
  //                      '<img src="https://camo.githubusercontent.com/c6286ade715e9bea433b4705870de482a654f78a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f77686974655f6666666666662e706e67"' +
  //                        'alt="Fork me on GitHub"' +
  //                        'imgdata-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_white_ffffff.png">' +
  //                      '</a>',
  //     properties: {
  //       zIndex: 5
  //     }
  //   });

  //   var bannerMod = new Modifier({
  //     align: [0, 0],
  //     origin: [0, 0],
  //     transform: function () {
  //       if (window.innerWidth < 800) {
  //         return Transform.scale(0.7, 0.7, 0.7);
  //       }
  //     }.bind(this)
  //   });

  //   this.add(bannerMod).add(banner);
  // }

  function _createDetailView () {
    //Content
    var tmpName = this.data.project.name;
    var tmpSubtitle = this.data.project.subtitle;
    var tmpDate = this.data.project.date;
    var tmpAuthor = this.data.project.author;
    var tmpCoffee = this.data.project.coffee;
    var tmpDescr = this.data.project.description;
    
    //Content Surfaces
    var name = new Surface({
      content:'<div class="p-name">'+tmpName+'</div>',
      properties:{
        fontFamily: this.options.fontFamily
      }
    });
    var subtitle = new Surface({
      content:'<div class="p-subtitle">'+tmpSubtitle+'</div>',
      properties:{
        fontFamily: this.options.fontFamily
      }
    });
    var date = new Surface({
      content:'<div class="p-date">'+tmpDate+'</div>',
      properties:{
        fontFamily: this.options.fontFamily
      }
    });
    var author = new Surface({
      content:'<div class="p-author">'+tmpAuthor+'</div>',
      properties:{
        fontFamily: this.options.fontFamily
      }
    });
    var coffee = new Surface({
      content:'<div class="p-coffee">'+tmpCoffee+'</div>',
      properties:{
        fontFamily: this.options.fontFamily
      }
    });
    var descr = new Surface({
      content:'<div class="p-descr">'+tmpDescr+'</div>',
      properties:{
        fontFamily: this.options.fontFamily
      }
    });

    // var grid = new GridLayout({
    //   dimensions: [2, 1]
    // });

    //Image
    var image = new ImageSurface({
        size: [316,201]
    });
    var imgString = 'http://meta-vue.ch/_resources/img/'+this.projectId+'.png';

    image.setContent(imgString);


    // grid.sequenceFrom(surfaces);
    // // If the window width is less than 800 px use this layout (target mobile phone)
    // if (window.innerWidth < 800) {
    //   // used html for contents on the surface
    //   amar = new Surface({
    //     content: '<br/><h2>Amar Patel</h2><center><img width="85%" src="content/images/amar.png"/></center><span display="inline-block"><a href="http://www.github.com/theamarpatel"><img width="20%" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"/></a>  <a href="http://www.linkedin.com/in/amarmpatel"><img width="20%" src="http://press.linkedin.com/display-media/206/4"/></a></span><br/><a color="#000" href="http://www.amarpatel.io/">amarpatel.io</a>',
    //     size: [undefined, undefined],
    //     properties: this.options.bioProps
    //   });

    //   amar.setProperties({borderRight: '1px solid lightgrey'});

    //   joe = new Surface({
    //     content: '<br/><h2>Joe Dou</h2><center><img width="85%" src="content/images/joe.png"/></center><span display="inline-block"><a href="http://www.github.com/joedou"><img width="20%" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"/></a>  <a href="http://www.linkedin.com/in/joedou"><img width="20%" src="http://press.linkedin.com/display-media/206/4"/></a></span><br/><a color="#000" href="http://www.whatwouldjoedou.com/">whatwouldjoedou.com</a>',
    //     size: [undefined, undefined],
    //     properties: this.options.bioProps
    //   });
    // } else { // If the window width is greater than 800 px use this layout (target desktop)
    //   amar = new Surface({
    //     content: '<br/><h2>Amar Patel</h2><center><img width="25%" src="content/images/amar.png"/></center><br/><br/><br/><span display="inline-block"><a href="http://www.github.com/theamarpatel"><img width="6%" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"/></a>  <a href="http://www.linkedin.com/in/amarmpatel"><img width="5%" src="http://press.linkedin.com/display-media/206/4"/></a></span><br/><a color="#000" href="http://www.amarpatel.io/">amarpatel.io</a>',
    //     size: [undefined, undefined],
    //     properties: this.options.bioProps
    //   });

    //   amar.setProperties({borderRight: '1px solid lightgrey'});

    //   joe = new Surface({
    //     content: '<br/><h2>Joe Dou</h2><center><img width="25%" src="content/images/joe.png"/></center><br/><br/><br/><span display="inline-block"><a href="http://www.github.com/joedou"><img width="6%" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"/></a>  <a href="http://www.linkedin.com/in/joedou"><img width="5%" src="http://press.linkedin.com/display-media/206/4"/></a></span><br/><a color="#000" href="http://www.whatwouldjoedou.com/">whatwouldjoedou.com</a>',
    //     size: [undefined, undefined],
    //     properties: this.options.bioProps
    //   });
    // }

    // surfaces.push(amar, joe);

    var nameMod = new Modifier({
        size: [150, 50],
        align: [0.5, 0.4],
    });
    var descrMod = new Modifier({
        size: [450, 50],
        align: [0.5, 0.4],
    });

    nameMod.setTransform(
      Transform.translate(100, 300, 0),
      { duration : 800, curve: 'easeInOut' }
    );
    descrMod.setTransform(
      Transform.translate(-500, -100, 0),
      { duration : 500, curve: 'easeInOut' }
    );
    
    this.add(nameMod).add(name);
    this.add(descrMod).add(descr);
    // this.add(subtitle);
    // this.add(date);
    // this.add(author);
    // this.add(coffee);
    this.add(image);
  }

  function _createBackLink(){
     var backLink = new Surface({
        content: '<div type="button" class="btn btn-success">Back</button>'
     });


    var backLinkMod = new Modifier({
        size: [50, 50],
        align: [0.5, 0.4],
    });

    backLinkMod.setTransform(
      Transform.translate(0, -100, 0),
      { duration : 500, curve: 'easeInOut' }
    );


    backLink.on('click', function () {
      this._eventOutput.emit('showProjectGrid');
    }.bind(this));

     this.add(backLinkMod).add(backLink);
  }

  // // create back button
  // function _createMenu () {
  //   var menuButton = new Surface({
  //     content: 'Back',
  //     properties: {
  //       textAlign: 'center',
  //       fontSize: '.8rem',
  //       fontFamily: 'HelveticaNeue-Light',
  //       zIndex: 4,
  //       lineHeight: '45px',
  //       cursor: 'pointer'
  //     }
  //   });

  //   var menuButtonMod = new Modifier({
      // size: [50, 50],
      // align: [1, 0],
      // origin: [1, 0]
  //   });

  //   this.add(menuButtonMod).add(menuButton);

  //   menuButton.on('click', function () {
  //     this._eventOutput.emit('mainMenu');
  //   }.bind(this));
  // }

  module.exports = ProjectDetail;
});
