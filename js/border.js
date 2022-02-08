function border(x, y, width, height, type) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.type = type;
	
	this.draw = function() {
		if (this.type === 1) {
			context.fillStyle = 'blue';
		} else if (this.type === 2) {
			context.fillStyle = 'red'
		}
		context.fillRect(this.x, this.y, this.width, this.height)
	}
}