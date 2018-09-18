function Kirby()
{
	this.img = new Image();
	this.img.src = "img/kirby.png";
	this.speed = 4;

	this.position = 
	{
		x: 0,
		y:0
	};

	this.size = 
	{
		width: 50,
		height: 50
	};
}

Kirby.prototype.Move = function()
{
	if(keyboard[37]) // right
	{
		this.position.x -= this.speed;
	}
	if(keyboard[39]) // left
	{
		this.position.x += this.speed;
	}
	if(keyboard[38]) // top
	{
		this.position.y -= this.speed;
	}
	if(keyboard[40]) // down
	{
		this.position.y += this.speed;
	}
};

Kirby.prototype.Draw = function()
{
	ctx.drawImage(this.img, 
				  this.position.x, 
				  this.position.y, 
				  this.size.width, 
				  this.size.height);
	// console.log('kirby');
};