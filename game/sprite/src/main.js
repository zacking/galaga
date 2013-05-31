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

var test_label = Label
function Hello () {
    // You must always call the super class constructor
    Hello.superclass.constructor.call(this)

    // Get size of canvas
    var s = Director.sharedDirector.winSize

    this.isMouseEnabled = true
    this.isKeyboardEnabled = true
    
    var boy = new nodes.Sprite({
    	file : '/resources/grossini.png',
    })
    var girl = new nodes.Sprite({
    	file : '/resources/grossinis_sister1.png',
    })    
    var label_2 = new Label({
    	string: 'keyboard',
    	fontName: 'Arial',
    	fontSize: 76,
    	fontColor: 'yellow'
    })
    var test_label_1 = new Label({
    	string: "TEST",
    	fontName: 'Arial',
    	fontSize: 40

    })
    test_label = test_label_1
    test_label.string = 'tes1t'
    	
    label_2.position = ccp(320, 180)
    test_label.position = ccp(100, 100)
    label_2.anchorPoint = ccp(0, 0)
    test_label.anchorPoint = ccp(0.6, 0.6)
    
    this.addChild({child:label_2,z:3});
    this.addChild(test_label);
    boy.position = ccp(200, 240)
    girl.position = ccp(300, 240)
    boy.anchorPoint = ccp(0.5, 0)
    girl.anchorPoint = ccp(0.5, 0)
    this.addChild({child:boy,z:2})
    this.addChild(girl)


    var label = new Label({
    	string: 'Grossini',
    	fontName:'Arial',
    	fontSize:20
    })
    
    label.scaleY = 1
    
    label.position = ccp(40,130)
    
    boy.addChild(label)

    // Position the label in the centre of the view
    
    
    // Add label to layer
   
    
    //var action = new cocos.actions.MoveTo({duration:1, position: new geo.Point(420,140)})
    //var action = new cocos.actions.MoveBy({duration:1, position: ccp(0,100)})
    var action = new cocos.actions.JumpTo({duration:1, delta: new geo.Point(300,0), height: 200, jumps: 2})
    boy.runAction(action);
     
}
// Inherit from cocos.nodes.Layer
Hello.inherit(Layer,{
	keyDown : function (evt){
		switch(evt.keyCode){
			case 37:{
				//test_label.position = ccp(test_label.position.x - 10, test_label.position.y)
				test_label.string = 'gg'
				//alert(test_label.string)
				break;
				}
				
			}
		}

})


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
          , layer = new Hello()

        // Add our layer to the scene
        scene.addChild(layer)

        // Run the scene
        director.replaceScene(scene)
    })

    // Preload our assets
    director.runPreloadScene()
}


exports.main = main
