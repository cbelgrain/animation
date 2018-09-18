'use strict';

var canvas, ctx, gameObjects = [], keyboard = [], mouse = {};


/* --------------------------------------------------- */


function init()
{
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	gameObjects.push(new Kirby());
	gameObjects.push(new Cuphead());
	// gameObjects.push(new KirbyTwo());

	requestAnimationFrame(Update);	
}

function Update()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for(var i = 0; i < gameObjects.length; i++)
	{
		gameObjects[i].Move();
		gameObjects[i].Draw();
	}

	requestAnimationFrame(Update);
}


/* --------------------------------------------------- */


window.requestAnimationFrame =  window.requestAnimationFrame || 
								window.mozRequestAnimationFrame ||
                              	window.webkitRequestAnimationFrame || 
                              	window.msRequestAnimationFrame;