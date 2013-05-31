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
var label_z = nodes.Label
var grossini = nodes.Sprite
var enemy = nodes.Sprite

function Transitions () {
    // You must always call the super class constructor
    Transitions.superclass.constructor.call(this)

    // Get size of canvas
    var s = Director.sharedDirector.winSize

    // Create label
    var label = new Label({ string:   'Knowhow Test'
                          , fontName: 'Arial'
                          , fontSize: 36
                          })

    // Position the label in the centre of the view
    label.position = ccp(150, 420)
    label_z = label
    // Add label to layer
    this.addChild(label)

    
    var grossini_z = new nodes.Sprite({
    	file : '/resources/grossini.png',
    })
    grossini_z.position = ccp(50, 240)
    this.addChild(grossini_z)
    grossini = grossini_z
    
    var enemy_z = new nodes.Sprite({
    	file : '/resources/grossinis_sister1.png',
    })    
    enemy_z.position = ccp(600, 240)
    this.addChild(enemy_z)
    enemy = enemy_z

    this.schedule({method:"update", interval:0.3})
}

// Inherit from cocos.nodes.Layer
Transitions.inherit(Layer,{
	update:function (delay){

		label_z.string = "Schedule - " + delay
		//enemy.position = ccp(enemy.position.x - 10, enemy.position.y)
		var action = new cocos.actions.MoveBy({duration:0.3, position : ccp(-50,0)})
		var isOverlap = geo.rectOverlapsRect(grossini.boundingBox, enemy.boundingBox)
		if(isOverlap){
			//action = action.reverse()
			var action = new cocos.actions.MoveBy({duration:0.3, position : ccp(50,0)})
		}
		enemy.runAction(action)
	}
})

/**
 * Entry point for the application
 */
function main () {
    var director = Director.sharedDirector

    // Wait for the director to finish preloading our assets
    events.addListener(director, 'ready', function (director) {
        var scene = new Scene()
          , layer = new Transitions()
        scene.addChild(layer)

        var scene2 = new Scene()
        , layer2 = new Layer('layer2')
        , label = new Label({
        	string: 'Scene2'
        	, fontName : 'Arial'
        	, fontSize: 45
        	})
        scene2.addChild(layer2)
        label.position = ccp(320, 240)
        layer2.addChild(label)
        
        var menuItem = new nodes.MenuItemImage({
        	normalImage :'/resources/f1.png',
        	selectedImage : '/resources/f2.png',
        	callback:function(){
        		var transition = new nodes.TransitionRotoZoom({
        			duration:1.5,
        			scene:scene2
        		})
        		director.replaceScene(transition)
        	}
        })
        var menu = new nodes.Menu([])
        menu.position = ccp(580,30)
        menu.addChild(menuItem)
        layer.addChild(menu)
        // Run the scene
        director.replaceScene(scene)
    })

    // Preload our assets
    director.runPreloadScene()
}


exports.main = main
