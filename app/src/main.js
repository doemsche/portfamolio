/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine          = require('famous/core/Engine');
    var Modifier        = require('famous/core/Modifier');
    var Surface         = require('famous/core/Surface');
    var Easing          = require('famous/transitions/Easing');
    var HeaderFooterLayout = require("famous/views/HeaderFooterLayout");

    //import views
    var Header          = require('views/Header');
    var Footer          = require('views/Footer');
    var MainView          = require('views/MainView');

    var layout = new HeaderFooterLayout({
        headerSize: 100,
        footerSize: 50
    });

    var mainContext = Engine.createContext();

    layout.content.add( new MainView() );

    layout.header.add( new Header() );

    layout.footer.add( new Footer() );

    mainContext.add(layout);

});
