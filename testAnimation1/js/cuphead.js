function Cuphead()
{
	this.img = new Image();
	this.img.src = "img/sprite.png";

	this.position = 
	{
		x: 100,
		y: 100
	};

	this.size = 
	{
		x:50,
		y:75
	};

	this.imagePosition = 
	{
		x: 0,
		y: 113 * 4
	}
	this.spriteSize = 
	{
		x: 103,
		y: 113
	}
	this.mirror = 1;
}

Cuphead.prototype.Move = function()
{
	// this.IsMirror() ? this.mirror = true : this.mirror = false;
}

Cuphead.prototype.Draw = function()
{
	this.UpdateAnimation();
	if(this.IsMirror())
	{
		drawImage(
			this.img, 
			this.imagePosition.x, 
			this.imagePosition.y, 
			this.spriteSize.x, 
			this.spriteSize.y, 
			this.position.x, 
			this.position.y, 
			this.size.x, 
			this.size.y, 
			true, 
			true);
	}
	else
	{
		drawImage(
			this.img, 
			this.imagePosition.x, 
			this.imagePosition.y, 
			this.spriteSize.x, 
			this.spriteSize.y, 
			this.position.x, 
			this.position.y, 
			this.size.x, 
			this.size.y, 
			false);
	}
	
}

Cuphead.prototype.UpdateAnimation = function()
{
	this.imagePosition.x += 103;
	if(this.imagePosition.x == 103 * 16)
	{
		this.imagePosition.x = 0;
	}
}

Cuphead.prototype.IsMirror = function()
{
	return mouse.x < this.position.x; 
}

function drawImage(img, sx, sy, sw,sh, x, y, width, height, deg, flip, flop, center) 
{

	ctx.save();

	if(typeof width === "undefined") 
		width = img.width;
	if(typeof height === "undefined") 
		height = img.height;
	if(typeof center === "undefined") 
		center = false;

	if(center) 
	{
	    x -= width/2;
	    y -= height/2;
	}

	ctx.translate(x + width/2, y + height/2);


	var rad = 2 * Math.PI - deg * Math.PI / 180;    
	ctx.rotate(rad);

	if(flip) flipScale = -1; else flipScale = 1;
	if(flop) flopScale = -1; else flopScale = 1;
	ctx.scale(flipScale, flopScale);
	  
	ctx.drawImage(img, sx, sy, sw, sh, -width/2, -height/2, width, height);

	ctx.restore();
}