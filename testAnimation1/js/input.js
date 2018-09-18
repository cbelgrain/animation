function keyboardDown(e)
{
	keyboard[e.keyCode] = true;
}

function keyboardUp(e)
{
	keyboard[e.keyCode] = false;
}


function mouseMove(e)
{
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
}