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
function Airplane(x,y){
    var airplane_frames = [ new cocos.SpriteFrame({ texture : texture,
    	rect: new geo.Rect(184,55,15,17)})]
    var airplane = new nodes.Sprite({frame:airplane_frames[0]})
    airplane.scale = 2
    airplane.position = ccp(x,y)
    return airplane
}
function Enemy(x, y, type){
    var enemy_frames = [ new cocos.SpriteFrame({ 
    	texture : texture, rect: new geo.Rect(161,103,15,16)}),
    	new cocos.SpriteFrame({
    		texture : texture, rect: new geo.Rect(185,103,15,16)	
    	})]
    if(type == "type2"){
        var enemy_frames = [ new cocos.SpriteFrame({ 
        	texture : texture, rect: new geo.Rect(161,127,15,16)}),
        	new cocos.SpriteFrame({
        		texture : texture, rect: new geo.Rect(185,123,15,16)	
        	})]    	
    }
    var enemy = new nodes.Sprite({frame:enemy_frames[0]})
    enemy.scale = 2
    enemy.position = ccp(x,y)
    
    var animation = new cocos.Animation({
    	frames: enemy_frames, delay: 0.4
    })
    var animate = new cocos.actions.Animate({animation: animation})
    enemy.runAction(new cocos.actions.RepeatForever(animate))
    return enemy
	
}
function Galaga () {
    Galaga.superclass.constructor.call(this)
    
    var s = Director.sharedDirector.winSize
    /* TITLE */
    var title = new Label({ string:   'GALAGA'
                          , fontName: 'Arial'
                          , fontSize: 46
                          , fontcolor: 'yellow'
                          })
    title.position = ccp(320, 360)
    this.addChild(title)
    /* DESC */
    var desc = new Label({ string:   '아래 비행기를 눌러서 시작해주세요.'
    	 				  , fontName: '돋움'
                          , fontSize: 15
                          })  
    desc.position = ccp(320, 320)
    this.addChild(desc)
    var action = new cocos.actions.Blink({duration:1, blinks: 1})
    desc.runAction(new cocos.actions.RepeatForever(action))
    /* SPRITE */
    var airplane_frames = [ new cocos.SpriteFrame({ texture : texture,
    	rect: new geo.Rect(184,55,15,17)})]
    var airplane = new nodes.Sprite({frame:airplane_frames[0]})
    
    var menu = new nodes.Menu([])
    var menuItem = new nodes.MenuItemSprite({
    	normalImage:airplane,
    	callback:function(){
    		var sceneGame = new Scene()
    		var layerGame = new GalagaGame()
    		sceneGame.addChild(layerGame)

    		Director.sharedDirector.replaceScene(new nodes.
    				TransitionSlideInB({duration:0.5, scene: sceneGame}))

    	}
    })
    menuItem.scale = 2
    menu.position = ccp(320, 100)
    menu.addChild(menuItem)
    this.addChild(menu)
}

// Inherit from cocos.nodes.Layer
Galaga.inherit(Layer)


function GalagaGame(){
	GalagaGame.superclass.constructor.call(this)
	this.isKeyboardEnable = true
	/* 아군기 생성 */
	this.airplane = Airplane(320, 60)
	this.addChild(this.airplane)
	/* 아군기 생명 생성, 최초 2개.*/
	this.life = [Airplane(20,20), Airplane(55,20)]
	this.addChild(this.life[0])
	this.addChild(this.life[1])
	
	this.enemies = []
	for(var i= 0; i< 4; i++){
		for (var j= 0; j<3; j++){
			var x = i * 50
			var y = j * 50
			var enemy = Enemy(100+x, 300+y)
			this.addChild(enemy)
			this.enemies.push(enemy)
		}
	}
	for(var i= 0; i< 4; i++){
		for (var j= 0; j<3; j++){
			var x = i * 50
			var y = j * 50
			var enemy = Enemy(400+x, 300+y, "type2")
			this.addChild(enemy)
			this.enemies.push(enemy)
		}
	}	
	this.missiles = []
	this.enemyMissiles = []
	this.keyMap = []
	this.schedule({method:"update", interval:0.02})

}
GalagaGame.inherit(Layer,{
	keyDown: function(evt){
		evt.preventDefault()
		this.keyMap[evt.keyCode] = true;
	},
	keyUp: function(evt){
		evt.keyMap[evt.keyCode] = false;
	},
	update:function(delay){
		var airplane = this.airplane
		if(this.keyMap[37]){
			airplane.position = ccp(airplane.position.x - 10, airplane.position.y)
			alert('gg')
		}
		else if(this.keyMap[39]){
			airplane.position = ccp(airplane.position.x + 10, airplane.position.y)
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
