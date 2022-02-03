function Player(x,y){
	this.x = x;
	this.y = y;
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.friction = 0.6;
	this.maxSpeed = 10;
	this.width = 50;
	this.height = 100;
	this.active = true;
	
	this.step = function() {
		if (this.active) {
			//horizontal movement
			if (!leftKey && !rightKey || leftKey && rightKey){
				//slow down
				this.xSpeed *= this.friction;
			}else if (rightKey) {
				this.xSpeed ++;
			}else if (leftKey){
				this.xSpeed --;
			}
			//vertical movement
			
			//correct speed
			this.x += this.xSpeed;
			this.y += this.ySpeed;
		}
	}
	
	this.draw = function() {
		context.fillStyle = 'green';
		context.fillRect(this.x,this.y,this.width,this.height)
	}
}