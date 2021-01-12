let width = 1000;
let height = 1000;

const size = width * 0.13;
const rot = -5;

function setup() {
  createCanvas(width, height);
  rectMode(CENTER);
}

function draw() {
	background(255);
	noStroke();

	translate(width/2, height/2);

	let c = 255;

	for (i = 0; i < 7; i++) {
	 	rotate(rot -i);
	 	fill(c);
	 	rect(0, 0, size*(8-(i*2)), size*(8-i) );

	 	c = c == 255 ? 0 : 255;
	}

	fill(c);
	rotate(rot-7);
	rect(0, 0, size, size*2);

	for (let i = 1; i < 22; i++) {
		c = c == 255 ? 0 : 255;
		
		fill(c);
		rotate(rot-8-i);

		let w = size / (2*i);
		let h = i == 1 ? size : size / (2*(i-1));
		
		rect(0, 0, w, h);
	}

}