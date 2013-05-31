(function(){
__jah__.resources["/main.js"] = {data: function (exports, require, module, __filename, __dirname) {
"use strict"  // Use strict JavaScript mode

// Pull in the modules we're going to use
var cocos  = require('cocos2d')   // Import the cocos2d module
  , nodes  = cocos.nodes          // Convenient access to 'nodes'
  , events = require('events')    // Import the events module
  , geo    = require('geometry')  // Import the geometry module
  , ccp    = geo.ccp              // Short hand to create points

// Convenient access to some constructors
var Layer    = nodes.Layer
  , Scene    = nodes.Scene
  , Label    = nodes.Label
  , Director = cocos.Director

/**
 * @class Initial application layer
 * @extends cocos.nodes.Layer
 */
var texture = new cocos.Texture2D({file: '/resources/galagasheet.png'})
function Galaga () {
    Galaga.superclass.constructor.call(this)
    
    var s = Director.sharedDirector.winSize
    var title = new Label({ string:   'GALAGA'
                          , fontName: 'Arial'
                          , fontSize: 46
                          , fontcolor: 'yellow'
                          })
    title.position = ccp(320, 340)
    this.addChild(title)
}

// Inherit from cocos.nodes.Layer
Galaga.inherit(Layer)

/**
 * Entry point for the application
 */
function main () {
    // Initialise application

    // Get director singleton
    var director = Director.sharedDirector

    // Wait for the director to finish preloading our assets
    events.addListener(director, 'ready', function (director) {
        // Create a scene and layer
        var scene = new Scene()
          , layer = new Galaga()

        // Add our layer to the scene
        scene.addChild(layer)

        // Run the scene
        director.replaceScene(scene)
    })

    // Preload our assets
    director.runPreloadScene()
}


exports.main = main

}, mimetype: "application/javascript", remote: false}; // END: /main.js


__jah__.resources["/resources/animations/dragon_animation.png"] = {data: __jah__.assetURL + "/resources/animations/dragon_animation.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/animations/grossini.plist"] = {data: __jah__.assetURL + "/resources/animations/grossini.plist", mimetype: "text/plain", remote: true};
__jah__.resources["/resources/animations/grossini.png"] = {data: __jah__.assetURL + "/resources/animations/grossini.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/animations/grossini_blue.plist"] = {data: __jah__.assetURL + "/resources/animations/grossini_blue.plist", mimetype: "text/plain", remote: true};
__jah__.resources["/resources/animations/grossini_blue.png"] = {data: __jah__.assetURL + "/resources/animations/grossini_blue.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/animations/grossini_gray.plist"] = {data: __jah__.assetURL + "/resources/animations/grossini_gray.plist", mimetype: "text/plain", remote: true};
__jah__.resources["/resources/animations/grossini_gray.png"] = {data: __jah__.assetURL + "/resources/animations/grossini_gray.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/b1.png"] = {data: __jah__.assetURL + "/resources/b1.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/b2.png"] = {data: __jah__.assetURL + "/resources/b2.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/f1.png"] = {data: __jah__.assetURL + "/resources/f1.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/f2.png"] = {data: __jah__.assetURL + "/resources/f2.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/fonts/tuffy_bold_italic-charmap.png"] = {data: __jah__.assetURL + "/resources/fonts/tuffy_bold_italic-charmap.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/grossini.png"] = {data: __jah__.assetURL + "/resources/grossini.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/grossinis_sister1.png"] = {data: __jah__.assetURL + "/resources/grossinis_sister1.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/grossinis_sister2.png"] = {data: __jah__.assetURL + "/resources/grossinis_sister2.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/grossini_dance_atlas-red.png"] = {data: __jah__.assetURL + "/resources/grossini_dance_atlas-red.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/grossini_dance_atlas.png"] = {data: __jah__.assetURL + "/resources/grossini_dance_atlas.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/r1.png"] = {data: __jah__.assetURL + "/resources/r1.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/r2.png"] = {data: __jah__.assetURL + "/resources/r2.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/TileMaps/fixed-ortho-test2.png"] = {data: __jah__.assetURL + "/resources/TileMaps/fixed-ortho-test2.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/TileMaps/iso-test.png"] = {data: __jah__.assetURL + "/resources/TileMaps/iso-test.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/TileMaps/iso-test.tmx"] = {data: __jah__.assetURL + "/resources/TileMaps/iso-test.tmx", mimetype: "text/plain", remote: true};
__jah__.resources["/resources/TileMaps/ortho-objects.tmx"] = {data: __jah__.assetURL + "/resources/TileMaps/ortho-objects.tmx", mimetype: "text/plain", remote: true};
__jah__.resources["/resources/TileMaps/ortho-test1.png"] = {data: __jah__.assetURL + "/resources/TileMaps/ortho-test1.png", mimetype: "image/png", remote: true};
__jah__.resources["/resources/TileMaps/orthogonal-test1.tmx"] = {data: __jah__.assetURL + "/resources/TileMaps/orthogonal-test1.tmx", mimetype: "text/plain", remote: true};
__jah__.resources["/resources/TileMaps/orthogonal-test1.tsx"] = {data: __jah__.assetURL + "/resources/TileMaps/orthogonal-test1.tsx", mimetype: "text/plain", remote: true};
__jah__.resources["/resources/TileMaps/orthogonal-test2.tmx"] = {data: __jah__.assetURL + "/resources/TileMaps/orthogonal-test2.tmx", mimetype: "text/plain", remote: true};
__jah__.resources["/resources/TileMaps/orthogonal-test4.tmx"] = {data: __jah__.assetURL + "/resources/TileMaps/orthogonal-test4.tmx", mimetype: "text/plain", remote: true};
})();