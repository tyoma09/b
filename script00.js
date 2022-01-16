function startGame() {
	myArena.start();
}

var myArena = {
	canvas : document.createElement("canvas");
	start : function() {
		this.canvas.height = 380;
		this.canvas.width = 500;
		this.content = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas,document.body.childNodes[0]
	}
}

function component(width, height, color, x, y, type){
 this.type = type;
 this.score = 0;
 this.width = width;
 this.height = height;
 this.SpeedX = 0;
 this.SpeedX = 0;
 this.x = x;
 this.y = y;
 this.gravity = 0;
 this.gravitySpeed = 0;
 ctx = myArena.context;
 ctx = fillStyle = color;
 ctx.fillRect(this.x, this.y, this.width, this.height);
}