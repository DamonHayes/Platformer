function Player(x,y){
	this.x = x;
	this.y = y;
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.friction = 0.6;
	this.maxSpeed = 10;
	this.width = 49;
	this.height = 99;
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
			if (upKey) {
				//check on ground
				
				this.ySpeed -= 15;
			}
			
			//Apply Gravity
			this.ySpeed += 5;
			
			//correct speed
			if (this.xSpeed > this.maxSpeed) {
				this.xSpeed = this.maxSpeed;
			} else if (this.xSpeed < -this.maxSpeed) {
				this.xSpeed = -this.maxSpeed;
			}
			if (this.ySpeed > this.maxSpeed) {
				this.ySpeed = this.maxSpeed;
			} else if (this.ySpeed < -this.maxSpeed) {
				this.ySpeed = -this.maxSpeed;
			}
			if (this.xSpeed > 0){
				this.xSpeed = Math.floor(this.xSpeed);
			} else {
				this.xSpeed = Math.ceil(this.xSpeed);
			}
			if (this.ySpeed > 0){
				this.ySpeed = Math.floor(this.ySpeed);
			} else {
				this.ySpeed = Math.ceil(this.ySpeed);
			}
			
			//horizontal collision rect
			let horizontalRect = {
				x: this.x + this.xSpeed,
				y: this.y,
				width: this.width,
				height: this.height
			}
			
			//vertical collision rect
			let verticalRect = {
				x: this.x,
				y: this.y + this.ySpeed,
				width: this.width,
				height: this.height
			}
			
			//check for intersections
			for (let i=0; i < borders.length; i++) {
				let borderRect = {
					x: borders[i].x,
					y: borders[i].y,
					width: borders[i].width,
					height: borders[i].height
				}
			if (checkIntersection(horizontalRect, borderRect)){
					while(checkIntersection(horizontalRect, borderRect)) {
						horizontalRect.x -= Math.sign(this.xSpeed);
					}
					this.x = horizontalRect.x;
					this.xSpeed = 0;
				}
			if (checkIntersection(verticalRect, borderRect)){
					while(checkIntersection(verticalRect, borderRect)) {
						verticalRect.y -= Math.sign(this.ySpeed);
					}
					this.y = verticalRect.y;
					this.ySpeed = 0;
				}
			}
			
			this.x += this.xSpeed;
			this.y += this.ySpeed;
		}
	}
	
	this.draw = function() {
		context.fillStyle = 'green';
		context.fillRect(this.x+55,this.y-100,this.width,this.height)
	}
}

