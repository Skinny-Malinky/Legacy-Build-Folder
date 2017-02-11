var k;
var d;
var n;

function setup() {
	createCanvas(640, 480);
	sliderN = createSlider(1, 10, 4, 0.1);
	sliderD = createSlider(1, 10, 4, 0.1);
}

function draw() {
	n = sliderN.value();
	d = sliderD.value();
	k = n / d + n;

	background(51);
	translate(width / 2, height / 2);
	beginShape();
	vertex(0, 0);
	noFill();
	strokeWeight(1);
	for (var a = 0; a < PI * d; a += 0.015) {
		var r = 200 * cos(k * parseInt(a));
		var x = r * cos(a);
		var y = r * sin(a);
		stroke(255);
		vertex(x, y);
	}
	endShape();
}
